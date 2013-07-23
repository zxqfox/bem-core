var BEM = require('bem'),
Q = BEM.require('q'),
Tech = require('bem/lib/tech').TechV2,
Deps = require('bem/lib/techs/v2/deps.js').Deps

var dbg = 1;

exports.baseTech = Tech;

exports.techMixin = {

    getBuildResults: function(decl, levels, output, opts) {
        var _this = this,
        res = {},
        files = this.getBuildPaths(decl,levels);
        var BM = _this.getBuildSuffixesMap();

        return files.then(function(files){
            return Q.all(Object.keys(BM).map(
                function(destSuffix){
                    var filteredFiles = []
                    BM[destSuffix].some(function(srcSuffix){
                        files[srcSuffix] && files[srcSuffix].some(function(f){
                            filteredFiles.push(f)
                        })
                    })
                    var file = _this.getPath(output, destSuffix);

                    return _this.validate(file, filteredFiles, opts)}))
                .then(function(filesvalid){
                    if(filesvalid.every(function(v){return v})){
                        console.log("files valid!!!!")
                        return {}
                    } else {
                        console.log("files not valid!!!!")
                        var bemhtmlTech = _this.context.getTech("bemhtml")
                        var browserTech = _this.context.getTech("browser.js")

                        opts = {__proto__:opts,force:true};

                        return Q.all([bemhtmlTech.getBuildResults(decl,levels,output,opts),
                                browserTech.getBuildResults(decl,levels,output,opts)])
                            .spread(function(bemhtml,browser){
                                //                .spread(function(browser){
                                if(browser.js){
                                    if(bemhtml["bemhtml.js"]){
                                        browser.js.unshift(bemhtml["bemhtml.js"]+"\n");
                                    }
                                    return browser;
                                } else {
                                    if(bemhtml["bemhtml.js"]){
                                        return {js: bemhtml["bemhtml.js"]};
                                    } else{
                                        return {};
                                    }
                                }
                            })
                    }
                })
        })
    },

    transformBuildDecl: function(decl) {
        var ss = this.getSuffixesMap();
        var bb = this.getBuildSuffixesMap();
        return decl
            .then(function(decl){
                var deps = new Deps().parseDepsDecl(decl)
                    .filter2(function(dependson, dependent) {
                        if(dependson.item.tech &&
                           dependent.item.tech){
                            console.log("dest",dependent.item,"source",dependson.item)
                        }
                        return ((dependson.item.tech in ss)
                          && dependent.item.tech in bb)
                    }).map(function(item){
                        return item.item;
                    });
                return {deps: deps};
            });
    },

    getBuildSuffixesMap:function(){
        return {
            "js":["browser.js","js","bemhtml.js","vanilla.js"]
        }
    }

};
