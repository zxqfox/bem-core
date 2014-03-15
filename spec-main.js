(function(global) {

var FILE_HTML = /\.html$/,
    doc = global.document,
    karma = global.__karma__,
    files,
    fileToGo,
    filesLen,
    jail;

karma.start = function() {
    files = Object.keys(karma.files).filter(function(file) {
        return FILE_HTML.test(file);
    });
    fileToGo = 0;
    filesLen = files.length;

    // TODO: fail gracefully
    if(!filesLen) return;

    jail = createFrame();
    doc.body.appendChild(jail);

    next();
};

function formatError(error) {
    var stack = error.stack,
        message = error.message;

    if(stack) {
        var firstLine = stack.substring(0, stack.indexOf('\n'));
        if(message && firstLine.indexOf(message) === -1) {
            stack = message + '\n' + stack;
        }

        // remove mocha stack entries
        return stack.replace(/\n.+\/adapter(\/lib)?\/mocha.js\?\d*\:.+(?=(\n|$))/g, '');
    }

    return message;
}

function createReporter() {
    function onRunnerEnd() {
        if(++fileToGo < filesLen) {
            next();
            return;
        }

        done();

        karma.complete({
            coverage : global.__coverage__
        });
    }

    return function mochaKarmaReporter(runner) {
        runner.on('start', function() {
            karma.info({ total : runner.total });
        });

        runner.on('end', onRunnerEnd);

        runner.on('test', function(test) {
            test.$errors = [];
        });

        runner.on('fail', function(test, error) {
            if(test.type === 'hook') {
                test.$errors = [formatError(error)];
                runner.emit('test end', test);
            } else {
                test.$errors.push(formatError(error));
            }
        });

        runner.on('test end', function(test) {
            var skipped = test.pending === true,
                result = {
                    id : '',
                    description : test.title,
                    suite : [],
                    success : test.state === 'passed',
                    skipped : skipped,
                    time : skipped? 0 : test.duration,
                    log : test.$errors || []
                },
                pointer = test.parent;

            while(!pointer.root) {
                result.suite.unshift(pointer.title);
                pointer = pointer.parent;
            }

            karma.result(result);
        });
    };
}

function createFrame() {
    var frame = document.createElement('iframe');

    frame.setAttribute('id', '__bem-pr-jail');
    frame.setAttribute('src', 'about:blank');
    frame.setAttribute('width', '100%');
    frame.setAttribute('height', '100%');
    frame.setAttribute('style', 'border:0;width:100%;height:100%;');

    frame.onload = function() {
        var frameWindow = frame.contentWindow.window;
        if(frameWindow.location.pathname === 'blank') return;

        function setupMocha(mocha) {
            mocha.setup({ reporter : createReporter() });
        }

        var modules = frameWindow.modules;

        if(typeof modules === 'object') {
            modules.define('spec', ['mocha'], function(provide, mocha) {
                setupMocha(mocha);
                provide();
            });
        } else {
            var mocha = frameWindow.mocha;
            if(typeof mocha !== 'undefined') {
                setupMocha(mocha);
                mocha.run();
            }
        }
    };

    // TODO:
//    frame.onerror = function() {
//        removeSuite(frame);
//    };

    return frame;
}

function done() {
    doc.body.removeChild(jail);
}

function next() {
    setTimeout(function() {
        var file = files[fileToGo];
        if(file) jail.contentWindow.window.location = file;
    }, 0);
}

}(this));
