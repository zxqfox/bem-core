var assert = require('assert'),
    fs = require('fs'),
    path = require('path'),
    bemhtml = require('../../../../.bem/lib/bemhtml'),
    iBem = fs.readFileSync(path.resolve(
      __dirname,
      '../i-bem__html.bemhtml'
    )).toString();

suite('i-bem block and cache', function() {
  function readFile(file) {
    return fs.readFileSync(path.resolve(__dirname, 'files', file)).toString();
  }

  function unit(name, file, raw) {
    suite(name, function() {
      var contents = {
        src: readFile('cache/' + file + '.bemhtml'),
        data: JSON.parse(readFile('cache/' + file + '.json')),
        dst: readFile('cache/' + file + '.html')
      };

      var BEMHTML = bemhtml.compile(iBem + contents.src, {
        cache: true,
        raw: raw
      });

      ['empty', 'full'].forEach(function(cache) {
        test(
          'when cache is ' + cache,
          function() {
            var result = BEMHTML.call(contents.data) + '\n';
            assert.equal(result, contents.dst);
          }
        );
      });
    });
  }

  unit('basic block', 'basic');
});
