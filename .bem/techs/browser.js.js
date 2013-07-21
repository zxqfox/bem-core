var PATH = require('path'),
    BEM = require('bem'),
    Q = BEM.require('q'),
    ymPath = require.resolve('ym');

exports.baseTechName = 'vanilla.js';

exports.techMixin = {

    getCreateSuffixes : function() {
        return ['browser.js'];
    },

    getBuildSuffixesMap : function() {
        return {
            'js' : ['vanilla.js', 'browser.js', 'js']
        };
    },

    getYmChunk : function(output) {
        var outputDir = PATH.resolve(output, '..'),
            ymRelPath = PATH.relative(outputDir, ymPath);
        return this.getBuildResultChunk(ymRelPath, ymPath);
    },

    getBuildResult : function(files, suffix, output, opts) {
        return Q.all([
                this.getYmChunk(output),
                this.__base.apply(this, arguments)
            ])
            .spread(function(ym, res) {
                return [ym].concat(res);
            });
    }

};