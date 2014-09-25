# keyboard

Блок предназначен для работы с пользовательским вводом с клавиатуры.

## Элементы блока

### __codes

Элемент предоставляет набор имен для часто используемых клавиатурных кодов. Имена используются в тех же случаях, когда обычно используется код клавиши. Использование осмысленных имен вместо кодов клавиш делает программный код более легким для понимания.

Доступен следующий набор имен:

* `BACKSPACE`.
* `TAB`.
* `ENTER`.
* `CAPS_LOCK`.
* `ESC`.
* `SPACE`.
* `PAGE_UP`.
* `PAGE_DOWN`.
* `END`.
* `HOME`.
* `LEFT`.
* `UP`.
* `RIGHT`.
* `DOWN`.
* `INSERT`.
* `DELETE`.

Например, метод `_onKeyDown` сравнивает значение поля `keyCode` объекта события с полями `UP` и `DOWN` объекта `keyCodes`:

```js
modules.define(
    'test1',
    ['i-bem__dom', 'keyboard__codes'],
    function(provide, BEMDOM, keyCodes) {

provide(BEMDOM.decl(this.name, /** @lends test1.prototype */{
    onSetMod : {
        'focused' : {
            'true' : function() {
                this._focus();
            },

            '' : function() {
                this
                    .unbindFromDoc('keydown', this._onKeyDown)
                    .delMod('opened')
                    ._button
                        .delMod('focused');
            }
        },

    _focus : function() {
        this
            .bindToDoc('keydown', this._onKeyDown)
            ._button.setMod('focused');
    },

    _onKeyDown : function(e) {
        if(!this.hasMod('opened') &&
                (e.keyCode === keyCodes.UP || e.keyCode === keyCodes.DOWN) && !e.shiftKey) {
            e.preventDefault();
            this.setMod('opened');
        }
    }
}
}));
});
```
