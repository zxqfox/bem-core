module.exports = function(config) {
    config.set({
        reporters : ['mocha'],

        files : [
            { pattern : 'desktop.specs/**/_spec-js+browser-js+bemhtml.css', included : false },
            { pattern : 'desktop.specs/**/_spec-js+browser-js+bemhtml.spec.js', included : false },
            { pattern : 'desktop.specs/**/spec-js+browser-js+bemhtml.html', included : false },
            'spec-main.js'
        ],

        browsers : [
            'Chrome',
            'PhantomJS'
        ]
    });
};
