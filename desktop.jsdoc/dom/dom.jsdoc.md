## dom Module

Defined in: common.blocks/dom/dom.js

some DOM utils

### contains ( ctx, domElem ) → {Boolean}

Checks whether a DOM elem is in a context

#### Parameters:

* ctx {jQuery}<br/>
  DOM elem where check is being performed
* domElem {jQuery}<br/>
  DOM elem to check

#### Returns:

{Boolean}

### getFocused () → {jQuery}

Returns current focused DOM elem in document

#### Returns:

{jQuery}

### containsFocus ( domElem ) → {Boolean}

Checks whether a DOM element contains focus

#### Parameters:

* domElem {jQuery}

#### Returns:

{Boolean}

### isFocusable ( domElem ) → {Boolean}

Checks whether a browser currently can set focus on DOM elem

#### Parameters:

* domElem {jQuery}

#### Returns:

{Boolean}

### isEditable ( domElem ) → {Boolean}

Checks whether a domElem is intended to edit text

#### Parameters:

* domElem {jQuery}

#### Returns:

{Boolean}

