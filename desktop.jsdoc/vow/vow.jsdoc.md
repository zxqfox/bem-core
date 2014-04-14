## vow Module

Defined in: common.blocks/vow/vow.js

### Deferred Class

The `Deferred` class is used to encapsulate newly-created promise object along with functions that resolve, reject or notify it.

#### Constructor

##### Deferred ()

You can use `vow.defer()` instead of using this constructor.

`new vow.Deferred()` gives the same result as `vow.defer()`.

#### Instance methods

##### promise () → {vow:Promise}

Returns corresponding promise.

###### Returns:

{vow:Promise}

##### resolve ( value )

Resolves corresponding promise with given `value`.

###### Parameters:

* value {*}

##### reject ( reason )

Rejects corresponding promise with given `reason`.

###### Parameters:

* reason {*}

##### notify ( value )

Notifies corresponding promise with given `value`.

###### Parameters:

* value {*}

### Promise Class

The `Promise` class is used when you want to give to the caller something to subscribe to,
but not the ability to resolve or reject the deferred.

#### Constructor

##### Promise ( resolver )

You should use this constructor directly only if you are going to use `vow` as DOM Promises implementation.
In other case you should use `vow.defer()` and `defer.promise()` methods.

###### Parameters:

* resolver {Function}<br/>
  See https://github.com/domenic/promises-unwrapping/blob/master/README.md#the-promise-constructor for details.

#### Instance methods

##### valueOf () → {*}

Returns value of fulfilled promise or reason in case of rejection.

###### Returns:

{*}

##### isResolved () → {Boolean}

Returns `true` if promise is resolved.

###### Returns:

{Boolean}

##### isFulfilled () → {Boolean}

Returns `true` if promise is fulfilled.

###### Returns:

{Boolean}

##### isRejected () → {Boolean}

Returns `true` if promise is rejected.

###### Returns:

{Boolean}

##### then ( [onFulfilled], [onRejected], [onProgress], [ctx] ) → {vow:Promise}

Adds reactions to promise.

###### Parameters:

* [onFulfilled] {Function}<br/>
  Callback that will to be invoked with the value after promise has been fulfilled
* [onRejected] {Function}<br/>
  Callback that will to be invoked with the reason after promise has been rejected
* [onProgress] {Function}<br/>
  Callback that will to be invoked with the value after promise has been notified
* [ctx] {Object}<br/>
  Context of callbacks execution

###### Returns:

{vow:Promise}

A new promise, see https://github.com/promises-aplus/promises-spec for details

##### catch ( onRejected, [ctx] ) → {vow:Promise}

Adds rejection reaction only. It is shortcut for `promise.then(undefined, onRejected)`.

###### Parameters:

* onRejected {Function}<br/>
  Callback to be called with the value after promise has been rejected
* [ctx] {Object}<br/>
  Context of callback execution

###### Returns:

{vow:Promise}

##### fail ( onRejected, [ctx] ) → {vow:Promise}

Adds rejection reaction only. It is shortcut for `promise.then(null, onRejected)`. It's alias for `catch`.

###### Parameters:

* onRejected {Function}<br/>
  Callback to be called with the value after promise has been rejected
* [ctx] {Object}<br/>
  Context of callback execution

###### Returns:

{vow:Promise}

##### always ( onResolved, [ctx] ) → {vow:Promise}

Adds resolving reaction (to fulfillment and rejection both).

###### Parameters:

* onResolved {Function}<br/>
  Callback that to be called with the value after promise has been rejected
* [ctx] {Object}<br/>
  Context of callback execution

###### Returns:

{vow:Promise}

##### progress ( onProgress, [ctx] ) → {vow:Promise}

Adds progress reaction.

###### Parameters:

* onProgress {Function}<br/>
  Callback to be called with the value when promise has been notified
* [ctx] {Object}<br/>
  Context of callback execution

###### Returns:

{vow:Promise}

##### spread ( [onFulfilled], [onRejected], [ctx] ) → {vow:Promise}

Like `promise.then`, but "spreads" the array into a variadic value handler.
It is useful with `vow.all` and `vow.allResolved` methods.

###### Parameters:

* [onFulfilled] {Function}<br/>
  Callback that will to be invoked with the value after promise has been fulfilled
* [onRejected] {Function}<br/>
  Callback that will to be invoked with the reason after promise has been rejected
* [ctx] {Object}<br/>
  Context of callbacks execution

###### Returns:

{vow:Promise}

##### done ( [onFulfilled], [onRejected], [onProgress], [ctx] )

Like `then`, but terminates a chain of promises.
If the promise has been rejected, throws it as an exception in a future turn of the event loop.

###### Parameters:

* [onFulfilled] {Function}<br/>
  Callback that will to be invoked with the value after promise has been fulfilled
* [onRejected] {Function}<br/>
  Callback that will to be invoked with the reason after promise has been rejected
* [onProgress] {Function}<br/>
  Callback that will to be invoked with the value after promise has been notified
* [ctx] {Object}<br/>
  Context of callbacks execution

##### delay ( delay ) → {vow:Promise}

Returns a new promise that will be fulfilled in `delay` milliseconds if the promise is fulfilled,
or immediately rejected if promise is rejected.

###### Parameters:

* delay {Number}

###### Returns:

{vow:Promise}

##### timeout ( timeout ) → {vow:Promise}

Returns a new promise that will be rejected in `timeout` milliseconds
if the promise is not resolved beforehand.

###### Parameters:

* timeout {Number}

###### Returns:

{vow:Promise}

#### Static methods

##### cast ( value ) → {vow:Promise}

Coerces given `value` to a promise, or returns the `value` if it's already a promise.

###### Parameters:

* value {*}

###### Returns:

{vow:Promise}

##### all ( iterable ) → {vow:Promise}

Returns a promise to be fulfilled only after all the items in `iterable` are fulfilled,
or to be rejected when any of the `iterable` is rejected.

###### Parameters:

* iterable {Array | Object}

###### Returns:

{vow:Promise}

##### race ( iterable ) → {vow:Promise}

Returns a promise to be fulfilled only when any of the items in `iterable` are fulfilled,
or to be rejected when the first item is rejected.

###### Parameters:

* iterable {Array}

###### Returns:

{vow:Promise}

##### resolve ( value ) → {vow:Promise}

Returns a promise that has already been resolved with the given `value`.
If `value` is a promise, returned promise will be adopted with the state of given promise.

###### Parameters:

* value {*}

###### Returns:

{vow:Promise}

##### reject ( reason ) → {vow:Promise}

Returns a promise that has already been rejected with the given `reason`.

###### Parameters:

* reason {*}

###### Returns:

{vow:Promise}

### defer () → {vow:Deferred}

Creates a new deferred. This method is a factory method for `vow:Deferred` class.
It's equivalent to `new vow.Deferred()`.

#### Returns:

{vow:Deferred}

### when ( value, [onFulfilled], [onRejected], [onProgress], [ctx] ) → {vow:Promise}

Static equivalent to `promise.then`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}
* [onFulfilled] {Function}<br/>
  Callback that will to be invoked with the value after promise has been fulfilled
* [onRejected] {Function}<br/>
  Callback that will to be invoked with the reason after promise has been rejected
* [onProgress] {Function}<br/>
  Callback that will to be invoked with the value after promise has been notified
* [ctx] {Object}<br/>
  Context of callbacks execution

#### Returns:

{vow:Promise}

### fail ( value, onRejected, [ctx] ) → {vow:Promise}

Static equivalent to `promise.fail`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}
* onRejected {Function}<br/>
  Callback that will to be invoked with the reason after promise has been rejected
* [ctx] {Object}<br/>
  Context of callback execution

#### Returns:

{vow:Promise}

### always ( value, onResolved, [ctx] ) → {vow:Promise}

Static equivalent to `promise.always`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}
* onResolved {Function}<br/>
  Callback that will to be invoked with the reason after promise has been resolved
* [ctx] {Object}<br/>
  Context of callback execution

#### Returns:

{vow:Promise}

### progress ( value, onProgress, [ctx] ) → {vow:Promise}

Static equivalent to `promise.progress`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}
* onProgress {Function}<br/>
  Callback that will to be invoked with the reason after promise has been notified
* [ctx] {Object}<br/>
  Context of callback execution

#### Returns:

{vow:Promise}

### spread ( value, [onFulfilled], [onRejected], [ctx] ) → {vow:Promise}

Static equivalent to `promise.spread`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}
* [onFulfilled] {Function}<br/>
  Callback that will to be invoked with the value after promise has been fulfilled
* [onRejected] {Function}<br/>
  Callback that will to be invoked with the reason after promise has been rejected
* [ctx] {Object}<br/>
  Context of callbacks execution

#### Returns:

{vow:Promise}

### done ( value, [onFulfilled], [onRejected], [onProgress], [ctx] )

Static equivalent to `promise.done`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}
* [onFulfilled] {Function}<br/>
  Callback that will to be invoked with the value after promise has been fulfilled
* [onRejected] {Function}<br/>
  Callback that will to be invoked with the reason after promise has been rejected
* [onProgress] {Function}<br/>
  Callback that will to be invoked with the value after promise has been notified
* [ctx] {Object}<br/>
  Context of callbacks execution

### isPromise ( value ) → {Boolean}

Checks whether the given `value` is a promise-like object

#### Parameters:

* value {*}

#### Returns:

{Boolean}

### cast ( value ) → {vow:Promise}

Coerces given `value` to a promise, or returns the `value` if it's already a promise.

#### Parameters:

* value {*}

#### Returns:

{vow:Promise}

### valueOf ( value ) → {*}

Static equivalent to `promise.valueOf`.
If given `value` is not an instance of `vow.Promise`, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}

#### Returns:

{*}

### isFulfilled ( value ) → {Boolean}

Static equivalent to `promise.isFulfilled`.
If given `value` is not an instance of `vow.Promise`, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}

#### Returns:

{Boolean}

### isRejected ( value ) → {Boolean}

Static equivalent to `promise.isRejected`.
If given `value` is not an instance of `vow.Promise`, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}

#### Returns:

{Boolean}

### isResolved ( value ) → {Boolean}

Static equivalent to `promise.isResolved`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}

#### Returns:

{Boolean}

### resolve ( value ) → {vow:Promise}

Returns a promise that has already been resolved with the given `value`.
If `value` is a promise, returned promise will be adopted with the state of given promise.

#### Parameters:

* value {*}

#### Returns:

{vow:Promise}

### fulfill ( value ) → {vow:Promise}

Returns a promise that has already been fulfilled with the given `value`.
If `value` is a promise, returned promise will be fulfilled with fulfill/rejection value of given promise.

#### Parameters:

* value {*}

#### Returns:

{vow:Promise}

### reject ( reason ) → {vow:Promise}

Returns a promise that has already been rejected with the given `reason`.
If `reason` is a promise, returned promise will be rejected with fulfill/rejection value of given promise.

#### Parameters:

* reason {*}

#### Returns:

{vow:Promise}

### invoke ( fn, [args] ) → {vow:Promise}

Invokes a given function `fn` with arguments `args`

#### Parameters:

* fn {Function}
* [args] {...*}

#### Returns:

{vow:Promise}

### all ( iterable ) → {vow:Promise}

Returns a promise to be fulfilled only after all the items in `iterable` are fulfilled,
or to be rejected when any of the `iterable` is rejected.

#### Parameters:

* iterable {Array | Object}

#### Returns:

{vow:Promise}

### allResolved ( iterable ) → {vow:Promise}

Returns a promise to be fulfilled only after all the items in `iterable` are resolved.

#### Parameters:

* iterable {Array | Object}

#### Returns:

{vow:Promise}

### any ( iterable ) → {vow:Promise}

Returns a promise to be fulfilled only when any of the items in `iterable` are fulfilled,
or to be rejected when all the items are rejected (with the reason of the first rejected item).

#### Parameters:

* iterable {Array}

#### Returns:

{vow:Promise}

### anyResolved ( iterable ) → {vow:Promise}

Returns a promise to be fulfilled only when any of the items in `iterable` are fulfilled,
or to be rejected when the first item is rejected.

#### Parameters:

* iterable {Array}

#### Returns:

{vow:Promise}

### delay ( value, delay ) → {vow:Promise}

Static equivalent to `promise.delay`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}
* delay {Number}

#### Returns:

{vow:Promise}

### timeout ( value, timeout ) → {vow:Promise}

Static equivalent to `promise.timeout`.
If given `value` is not a promise, then `value` is equivalent to fulfilled promise.

#### Parameters:

* value {*}
* timeout {Number}

#### Returns:

{vow:Promise}

