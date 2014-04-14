## objects Module

Defined in: common.blocks/objects/objects.vanilla.js

A set of helpers to work with JavaScript objects

### extend ( target, source ) → {Object}

Extends a given target by

#### Parameters:

* target {Object}<br/>
  object to extend
* source {...Object}

#### Returns:

{Object}

### isEmpty ( obj ) → {Boolean}

Check whether a given object is empty (contains no enumerable properties)

#### Parameters:

* obj {Object}

#### Returns:

{Boolean}

### each ( obj, fn, [ctx] )

Generic iterator function over object

#### Parameters:

* obj {Object}<br/>
  object to iterate
* fn {Function}<br/>
  callback
* [ctx] {Object}<br/>
  callbacks's context

