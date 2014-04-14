## i-bem Module

Defined in: common.blocks/i-bem/_elem-instances/i-bem_elem-instances.js

### BEM Class

Aughtments {BEM}

#### Static methods

##### decl ( decl, [props], [staticProps] ) → {Function}  protected

Declares elements and creates an elements class

###### Parameters:

* decl {Object}<br/>
  Element description
* decl.block {String}<br/>
  Block name
* decl.elem {String}<br/>
  Element name
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

##### create ( desc, [params] ) → {BEM}

Factory method for creating an instance of the element named

###### Parameters:

* desc {Object}<br/>
  Description
* [params] {Object}<br/>
  Instance parameters

###### Returns:

{BEM}

##### getName ( [shortName] ) → {String}  protected

Returns the name of the current instance

###### Parameters:

* [shortName] {Boolean}<br/>
  return the short name of the current instance

###### Returns:

{String}

