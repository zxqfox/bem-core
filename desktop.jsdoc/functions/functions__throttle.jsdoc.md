## functions__throttle Module

Defined in: common.blocks/functions/__throttle/functions__throttle.vanilla.js

### *function* ( fn, timeout, [invokeAsap=true], [ctx] ) → {Function}

Throttle given function

#### Parameters:

* fn {Function}<br/>
  function to throttle
* timeout {Number}<br/>
  throttle interval
* [invokeAsap=true] {Boolean}<br/>
  invoke before first interval
* [ctx] {Object}<br/>
  context of function invocation

#### Returns:

{Function}

throttled function

