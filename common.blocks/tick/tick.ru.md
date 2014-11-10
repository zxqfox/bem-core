# tick

Блок `tick` служит для генерации регулярного события `tick`. Подписавшись на событие блока, можно использовать его для поллинга и синхронизации выполняемых операций.

Блок реализован в технологии `vanilla.js` и подходит для использования как на клиенте, так и на сервере.

## Интервал между событиями

Частота, с которой блок генерирует событие `tick`, определяется значением приватной переменной `TICK_INTERVAL`. Значение переменной – целое число – интервал между событиями в миллисекундах. По умолчанию `TICK_INTERVAL = 50`.

## Публичные методы блока

Блок предоставляет два публичных метода:

* `start` – запускает генерацию события `tick` и счетчик, если они еще не запущены. Событие `tick` генерируется через интервал, равный значению `TICK_INTERVAL` после вызова метода;
* `stop` – останавливает генерацию события.

Методы не принимают никаких аргументов.

```js
modules.define('tickemmiter',
    ['i-bem__dom', 'tick'],
    function(provide, tick, BEMDOM) {
BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() { 
                this.setMod('ticking');
            },

            '' : function() {
                this.delMod('ticking');
            }
        },

        'ticking' : {
            'true' : function() {
                tick.start();
            },

            '' : function() {
                tick.stop();
            }
        }
    }
});

provide(BEMDOM);

});
```


Использование подписки на событие блока для синхронизации анимации на примере блока `b-spin`:

```js
modules.define('b-spin',
    ['i-bem__dom', 'tick'],
    function(provide, tick, BEMDOM) {

var FRAME_COUNT = 36;

BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() { // конструктор
                var hasBackgroundPositionY = (!this.elem('icon').css('background-position-y')); /* В IE нельзя получить свойство background-position, только background-position-y */

                this._bgProp = hasBackgroundPositionY? 'background-position-y' : 'background-position';
                this._posPrefix = hasBackgroundPositionY? '-' : '0 -';
                this._curFrame = 0;
                this._size = Number(this.getMod('size') || /[\d]+/.exec(this.getMod('theme'))[0]);

                this.hasMod('progress') && this._bindToTick();
            },

            '' : function() { // деструктор
                this._unbindFromTick();
            }
        },

        'progress' : {
            'true' : function() {
                this._bindToTick();
            },

            '' : function() {
                this._unbindFromTick();
            }
        }
    },

    _bindToTick : function() {
        tick.on('tick', this._onTick, this);
    },

    _unbindFromTick : function() {
        tick.un('tick', this._onTick, this);
    },

    _onTick : function() {
        var offset;
        this._curFrame++ >= FRAME_COUNT?
            offset = this._curFrame * this._size :
            this._curFrame = offset = 0;

        this.elem('icon').css(this._bgProp, this._posPrefix + offset + 'px');
    }
});

provide(BEMDOM);

});
```


## Модификаторы блока

### start_auto

Блок с модификатором `start` в значении `auto` используется для автоматического запуска генерации события `tick`. Событие начинает генерироваться в момент установки модификатора.
