modules.define('i18n', ['objects'], function(provide, objects) {

var data;

function i18n(keyset, key, params) {
    if(!data) throw Error('i18n need to be filled with data');
    var val = data[keyset] && data[keyset][key];
    return typeof val === 'undefined'? 
        keyset + ':' + key :
        typeof val === 'string'?
            val :
            val.call(i18n, params, i18n);
}

i18n.decl = function(i18nData) {
    if(!data) {
        data = i18nData;
        return this;
    }

    for(var ks in i18nData)
        data[ks] = objects.extend(data[ks], i18nData[ks]);
};

provide(i18n);

});

