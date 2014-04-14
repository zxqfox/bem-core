## i-bem Module

Defined in: common.blocks/i-bem/i-bem.vanilla.js

### BEM Class

Aughtments {events:Emitter}

Base block for creating BEM blocks

#### Instance properties

##### params {Object} (readonly)

Block parameters, taking into account the defaults

#### Instance methods

##### on ( e, [data], fn, [ctx] ) → {this}

Adds an event handler

###### Parameters:

* e {String | Object}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

###### Returns:

{this}

##### un ( [e], [fn], [ctx] ) → {this}

Removes event handler or handlers

###### Parameters:

* [e] {String | Object}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

###### Returns:

{this}

##### emit ( e, [data] ) → {this}  protected

Executes the block's event handlers and live event handlers

###### Parameters:

* e {String}<br/>
  Event name
* [data] {Object}<br/>
  Additional information

###### Returns:

{this}

##### hasMod ( [elem], modName, [modVal] ) → {Boolean}

Checks whether a block or nested element has a modifier

###### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

###### Returns:

{Boolean}

##### getMod ( [elem], modName ) → {String}

Returns the value of the modifier of the block/nested element

###### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

###### Returns:

{String}

Modifier value

##### getMods ( [elem], [...modNames] ) → {Object}

Returns values of modifiers of the block/nested element

###### Parameters:

* [elem] {Object}<br/>
  Nested element
* [...modNames] {String}<br/>
  Modifier names

###### Returns:

{Object}

Hash of modifier values

##### setMod ( [elem], modName, modVal ) → {this}

Sets the modifier for a block/nested element

###### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

###### Returns:

{this}

##### _onSetMod ( modName, modVal, oldModVal, [elem], [elemName] )  protected

Function after successfully changing the modifier of the block/nested element

###### Parameters:

* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value
* oldModVal {String}<br/>
  Old modifier value
* [elem] {Object}<br/>
  Nested element
* [elemName] {String}<br/>
  Element name

##### toggleMod ( [elem], modName, modVal1, [modVal2], [condition] ) → {this}

Sets a modifier for a block/nested element, depending on conditions.
If the condition parameter is passed: when true, modVal1 is set; when false, modVal2 is set.
If the condition parameter is not passed: modVal1 is set if modVal2 was set, or vice versa.

###### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal1 {String}<br/>
  First modifier value
* [modVal2] {String}<br/>
  Second modifier value
* [condition] {Boolean}<br/>
  Condition

###### Returns:

{this}

##### delMod ( [elem], modName ) → {this}  protected

Removes a modifier from a block/nested element

###### Parameters:

* [elem] {Object}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

###### Returns:

{this}

##### getDefaultParams () → {Object}  protected

Returns a block's default parameters

###### Returns:

{Object}

##### nextTick ( fn ) → {this}  protected

Executes given callback on next turn eventloop in block's context

###### Parameters:

* fn {Function}<br/>
  callback

###### Returns:

{this}

#### Static properties

##### blocks {Object}

Storage for block declarations (hash by block name)

#### Static methods

##### decl ( decl, [props], [staticProps] ) → {Function}

Declares blocks and creates a block class

###### Parameters:

* decl {String | Object}<br/>
  Block name (simple syntax) or description
* decl.block | decl.name {String}<br/>
  Block name
* [decl.baseBlock] {String}<br/>
  Name of the parent block
* [decl.baseMix] {Array}<br/>
  Mixed block names
* [decl.modName] {String}<br/>
  Modifier name
* [decl.modVal] {String | Array}<br/>
  Modifier value
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods

###### Returns:

{Function}

##### create ( block, [params] ) → {BEM}

Factory method for creating an instance of the block named

###### Parameters:

* block {String | Object}<br/>
  Block name or description
* [params] {Object}<br/>
  Block parameters

###### Returns:

{BEM}

##### getName () → {String}

Returns the name of the current block

###### Returns:

{String}

##### on ( e, [data], fn, [ctx] ) → {this}

Adds an event handler

###### Parameters:

* e {String | Object}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

###### Returns:

{this}

##### un ( [e], [fn], [ctx] ) → {this}

Removes event handler or handlers

###### Parameters:

* [e] {String | Object}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

###### Returns:

{this}

