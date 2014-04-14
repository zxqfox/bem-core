## i-bem__dom Module

Defined in: common.blocks/i-bem/__dom/_elem-instances/i-bem__dom_elem-instances.js

### BEMDOM Class

Aughtments {BEMDOM}

#### Instance methods

##### getMod ( [elem], modName ) → {String}  protected

Delegates native getMod helper to element's instance

###### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name

###### Returns:

{String}

Modifier value

##### getMods ( [elem], [modName1] ) → {Object}  protected

Delegates native getMods helper to element's instance

###### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* [modName1] {String}<br/>
  ..., modNameN] Modifier names

###### Returns:

{Object}

Hash of modifier values

##### setMod ( [elem], modName, modVal ) → {BEM}  protected

Delegates native setMod helper to element's instances

###### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

###### Returns:

{BEM}

##### block () → {BEMDOM}

Returns and initializes (if necessary) the own block of current element

###### Returns:

{BEMDOM}

##### _filterFindElemResults ( res ) → {jQuery}

Filters results of findElem helper execution in strict mode

###### Parameters:

* res {jQuery}<br/>
  DOM elements

###### Returns:

{jQuery}

DOM elements

##### elemInstance ( elem, [modName], [modVal] ) → {BEMDOM}

Lazy search (caches results) for the first instance of defined element and intializes it (if necessary)

###### Parameters:

* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

###### Returns:

{BEMDOM}

##### elemInstances ( elem, [modName], [modVal] ) → {BEMDOM}

Lazy search (caches results) for instances of defined elements and intializes it (if necessary)

###### Parameters:

* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

###### Returns:

{BEMDOM}

##### findElemInstance ( [ctx=this.domElem], elem, [modName], [modVal], [strictMode=false] ) → {BEMDOM}

Finds the first instance of defined element and intializes it (if necessary)

###### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

###### Returns:

{BEMDOM}

##### findElemInstances ( [ctx=this.domElem], elem, [modName], [modVal], [strictMode=false] ) → {BEMDOM}

Finds instances of defined elements and intializes it (if necessary)

###### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* elem {String | jQuery}<br/>
  Element
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

###### Returns:

{BEMDOM}

##### closestElem ( [ctx=this.domElem], elemName ) → {jQuery}

Finds elements outside the context or current element

###### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

###### Returns:

{jQuery}

DOM elements

##### closestElemInstance ( [ctx=this.domElem], elemName ) → {BEMDOM}

Finds instance of defined element outside the context or current element

###### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

###### Returns:

{BEMDOM}

##### closestElemInstances ( [ctx=this.domElem], elemName ) → {BEMDOM}

Finds instances of defined elements outside the context or current element

###### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  context (current element by default)
* elemName {String}<br/>
  Element name

###### Returns:

{BEMDOM}

#### Static methods

##### decl ( name, [props], [staticProps], [_autoDecl] ) → {Function}  protected

Auto-declarator for elements

###### Parameters:

* name {Object}<br/>
  Instance name
* [props] {Object}<br/>
  Methods
* [staticProps] {Object}<br/>
  Static methods
* [_autoDecl] {Object}<br/>
  Auto-declaration flag

###### Returns:

{Function}

##### liveInitOnBlockEvent ( event, [callback] ) → {this}  protected

Helper for live initialization for an own block's event

###### Parameters:

* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler to be called after successful initialization in the new element's context

###### Returns:

{this}

##### buildClass ( [elem], [modName], [modVal] ) → {String}

Builds a CSS class corresponding to the block/element and modifier

###### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

###### Returns:

{String}

