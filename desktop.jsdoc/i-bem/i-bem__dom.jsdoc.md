## i-bem__dom Module

Defined in: common.blocks/i-bem/__dom/i-bem__dom.js

### BEMDOM Class

Base block for creating BEM blocks that have DOM representation

#### Instance properties

##### domElem {jQuery} (readonly)

DOM elements of block

#### Instance methods

##### findBlocksInside ( [elem], block ) → {BEMDOM}

Finds blocks inside the current block or its elements (including context)

###### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

###### Returns:

{BEMDOM}

##### findBlockInside ( [elem], block ) → {BEMDOM}

Finds the first block inside the current block or its elements (including context)

###### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

###### Returns:

{BEMDOM}

##### findBlocksOutside ( [elem], block ) → {BEMDOM}

Finds blocks outside the current block or its elements (including context)

###### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

###### Returns:

{BEMDOM}

##### findBlockOutside ( [elem], block ) → {BEMDOM}

Finds the first block outside the current block or its elements (including context)

###### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

###### Returns:

{BEMDOM}

##### findBlocksOn ( [elem], block ) → {BEMDOM}

Finds blocks on DOM elements of the current block or its elements

###### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

###### Returns:

{BEMDOM}

##### findBlockOn ( [elem], block ) → {BEMDOM}

Finds the first block on DOM elements of the current block or its elements

###### Parameters:

* [elem] {String | jQuery}<br/>
  Block element
* block {String | Object}<br/>
  Name or description (block,modName,modVal) of the block to find

###### Returns:

{BEMDOM}

##### bindToDomElem ( domElem, event, fn ) → {this}  protected

Adds an event handler for any DOM element

###### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event will be listened for
* event {String | Object}<br/>
  Event name or event object
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

###### Returns:

{this}

##### bindToDoc ( event, fn ) → {this}  protected

Adds an event handler to the document

###### Parameters:

* event {String}<br/>
  Event name
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

###### Returns:

{this}

##### bindToWin ( event, fn ) → {this}  protected

Adds an event handler to the window

###### Parameters:

* event {String}<br/>
  Event name
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

###### Returns:

{this}

##### bindTo ( [elem], event, fn ) → {this}  protected

Adds an event handler to the block's main DOM elements or its nested elements

###### Parameters:

* [elem] {jQuery | String}<br/>
  Element
* event {String}<br/>
  Event name
* fn {Function}<br/>
  Handler function, which will be executed in the block's context

###### Returns:

{this}

##### unbindFromDomElem ( domElem, event, [fn] ) → {this}  protected

Removes event handlers from any DOM element

###### Parameters:

* domElem {jQuery}<br/>
  DOM element where the event was being listened for
* event {String}<br/>
  Event name
* [fn] {Function}<br/>
  Handler function

###### Returns:

{this}

##### unbindFromDoc ( event, [fn] ) → {this}  protected

Removes event handler from document

###### Parameters:

* event {String}<br/>
  Event name
* [fn] {Function}<br/>
  Handler function

###### Returns:

{this}

##### unbindFromWin ( event, [fn] ) → {this}  protected

Removes event handler from window

###### Parameters:

* event {String}<br/>
  Event name
* [fn] {Function}<br/>
  Handler function

###### Returns:

{this}

##### unbindFrom ( [elem], event, [fn] ) → {this}  protected

Removes event handlers from the block's main DOM elements or its nested elements

###### Parameters:

* [elem] {jQuery | String}<br/>
  Nested element
* event {String}<br/>
  Event name
* [fn] {Function}<br/>
  Handler function

###### Returns:

{this}

##### setMod ( [elem], modName, modVal ) → {this}

Sets a modifier for a block/nested element

###### Parameters:

* [elem] {jQuery}<br/>
  Nested element
* modName {String}<br/>
  Modifier name
* modVal {String}<br/>
  Modifier value

###### Returns:

{this}

##### findElem ( [ctx=this.domElem], names, [modName], [modVal], [strictMode=false] ) → {jQuery}

Finds elements nested in a block

###### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where search is being performed
* names {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value
* [strictMode=false] {Boolean}

###### Returns:

{jQuery}

DOM elements

##### _filterFindElemResults ( res ) → {jQuery}

Filters results of findElem helper execution in strict mode

###### Parameters:

* res {jQuery}<br/>
  DOM elements

###### Returns:

{jQuery}

DOM elements

##### elem ( names, [modName], [modVal] ) → {jQuery}

Lazy search for elements nested in a block (caches results)

###### Parameters:

* names {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

###### Returns:

{jQuery}

DOM elements

##### closestElem ( ctx, elemName ) → {jQuery}

Finds elements outside the context

###### Parameters:

* ctx {jQuery}<br/>
  context
* elemName {String}<br/>
  Element name

###### Returns:

{jQuery}

DOM elements

##### dropElemCache ( [names], [modName], [modVal] ) → {this}  protected

Clearing the cache for elements

###### Parameters:

* [names] {String}<br/>
  Nested element name (or names separated by spaces)
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

###### Returns:

{this}

##### elemParams ( elem ) → {Object}

Retrieves parameters of a block element

###### Parameters:

* elem {String | jQuery}<br/>
  Element

###### Returns:

{Object}

Parameters

##### elemify ( elem, elemName ) → {jQuery}

Elemify given element

###### Parameters:

* elem {jQuery}<br/>
  Element
* elemName {String}<br/>
  Name

###### Returns:

{jQuery}

##### containsDomElem ( [ctx=this.domElem], domElem ) → {Boolean}  protected

Checks whether a DOM element is in a block

###### Parameters:

* [ctx=this.domElem] {jQuery}<br/>
  Element where check is being performed
* domElem {jQuery}<br/>
  DOM element

###### Returns:

{Boolean}

##### buildSelector ( [elem], [modName], [modVal] ) → {String}

Builds a CSS selector corresponding to a block/element and modifier

###### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

###### Returns:

{String}

#### Static properties

##### scope {jQuery}

Scope, will be set on onDomReady to `<body>`

##### doc {jQuery}

Document shortcut

##### win {jQuery}

Window shortcut

#### Static methods

##### init ( [ctx=scope] ) → {jQuery}

Initializes blocks on a fragment of the DOM tree

###### Parameters:

* [ctx=scope] {jQuery | String}<br/>
  Root DOM node

###### Returns:

{jQuery}

ctx Initialization context

##### destruct ( ctx, [excludeSelf=false] )

Destroys blocks on a fragment of the DOM tree

###### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* [excludeSelf=false] {Boolean}<br/>
  Exclude the main domElem

##### update ( ctx, content ) → {jQuery}

Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones

###### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  New content

###### Returns:

{jQuery}

Updated root DOM node

##### replace ( ctx, content ) → {jQuery}

Changes a fragment of the DOM tree including the context and initializes blocks.

###### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

###### Returns:

{jQuery}

New content

##### append ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the end of the context and initializes blocks

###### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

###### Returns:

{jQuery}

New content

##### prepend ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree at the beginning of the context and initializes blocks

###### Parameters:

* ctx {jQuery}<br/>
  Root DOM node
* content {jQuery | String}<br/>
  Content to be added

###### Returns:

{jQuery}

New content

##### before ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree before the context and initializes blocks

###### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

###### Returns:

{jQuery}

New content

##### after ( ctx, content ) → {jQuery}

Adds a fragment of the DOM tree after the context and initializes blocks

###### Parameters:

* ctx {jQuery}<br/>
  Contextual DOM node
* content {jQuery | String}<br/>
  Content to be added

###### Returns:

{jQuery}

New content

##### liveInitOnEvent ( [elemName], event, [callback] )  protected

Helper for live initialization for an event on DOM elements of a block or its elements

###### Parameters:

* [elemName] {String}<br/>
  Element name or names (separated by spaces)
* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler to call after successful initialization

##### liveBindTo ( [to], event, [callback] )  protected

Helper for subscribing to live events on DOM elements of a block or its elements

###### Parameters:

* [to] {String | Object}<br/>
  Description (object with modName, modVal, elem) or name of the element or elements (space-separated)
* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler

##### liveUnbindFrom ( [elem], event, [callback] )  protected

Helper for unsubscribing from live events on DOM elements of a block or its elements

###### Parameters:

* [elem] {String}<br/>
  Name of the element or elements (space-separated)
* event {String}<br/>
  Event name
* [callback] {Function}<br/>
  Handler

##### liveInitOnBlockEvent ( event, blockName, callback )  protected

Helper for live initialization for a different block's event on the current block's DOM element

###### Parameters:

* event {String}<br/>
  Event name
* blockName {String}<br/>
  Name of the block that should trigger a reaction when initialized
* callback {Function}<br/>
  Handler to be called after successful initialization in the new block's context

##### liveInitOnBlockInsideEvent ( event, blockName, [callback] )  protected

Helper for live initialization for a different block's event inside the current block

###### Parameters:

* event {String}<br/>
  Event name
* blockName {String}<br/>
  Name of the block that should trigger a reaction when initialized
* [callback] {Function}<br/>
  Handler to be called after successful initialization in the new block's context

##### on ( [ctx], e, [data], fn, [fnCtx] )

Adds a live event handler to a block, based on a specified element where the event will be listened for

###### Parameters:

* [ctx] {jQuery}<br/>
  The element in which the event will be listened for
* e {String}<br/>
  Event name
* [data] {Object}<br/>
  Additional information that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [fnCtx] {Object}<br/>
  Handler's context

##### un ( [ctx], e, [fn], [fnCtx] )

Removes the live event handler from a block, based on a specified element where the event was being listened for

###### Parameters:

* [ctx] {jQuery}<br/>
  The element in which the event was being listened for
* e {String}<br/>
  Event name
* [fn] {Function}<br/>
  Handler
* [fnCtx] {Object}<br/>
  Handler context

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

##### buildSelector ( [elem], [modName], [modVal] ) → {String}

Builds a CSS selector corresponding to the block/element and modifier

###### Parameters:

* [elem] {String}<br/>
  Element name
* [modName] {String}<br/>
  Modifier name
* [modVal] {String}<br/>
  Modifier value

###### Returns:

{String}

