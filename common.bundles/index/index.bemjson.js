({
    block: 'page',
    title: 'Обработчик события click',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'lte IE 9' }
    ],
    content: [{
        block: 'b-square',
        js: {id:1},
        content: { block: 'i-bem', elem: 'i18n', keyset: 'kk', key: 'k1' }
    },{
        block: 'b-square',
        js: {id:1}
    },{ elem: 'js', url: '_index.js' }]
});
