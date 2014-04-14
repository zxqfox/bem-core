## events Module

Defined in: common.blocks/events/events.vanilla.js

### Event Class

#### Constructor

##### Event ( type, target )

###### Parameters:

* type {String}
* target {Object}

#### Instance properties

##### type {String}

Type

##### target {String}

Target

##### result {*}

Result

##### data {*}

Data

#### Instance methods

##### preventDefault ()

Prevents default action

##### isDefaultPrevented () → {Boolean}

Returns whether is default action prevented

###### Returns:

{Boolean}

##### stopPropagation ()

Stops propagation

##### isPropagationStopped () → {Boolean}

Returns whether is propagation stopped

###### Returns:

{Boolean}

### Emitter Class

#### Instance methods

##### on ( e, [data], fn, [ctx] ) → {this}

Adds an event handler

###### Parameters:

* e {String}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

###### Returns:

{this}

##### once ( e, [data], fn, [ctx] ) → {this}

Adds a one time handler for the event.
Handler is executed only the next time the event is fired, after which it is removed.

###### Parameters:

* e {String}<br/>
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

* [e] {String}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

###### Returns:

{this}

##### emit ( e, [data] ) → {this}

Fires event handlers

###### Parameters:

* e {String | events:Event}<br/>
  Event
* [data] {Object}<br/>
  Additional data

###### Returns:

{this}

#### Static methods

##### on ( e, [data], fn, [ctx] ) → {this}

Adds an event handler

###### Parameters:

* e {String}<br/>
  Event type
* [data] {Object}<br/>
  Additional data that the handler gets as e.data
* fn {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

###### Returns:

{this}

##### once ( e, [data], fn, [ctx] ) → {this}

Adds a one time handler for the event.
Handler is executed only the next time the event is fired, after which it is removed.

###### Parameters:

* e {String}<br/>
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

* [e] {String}<br/>
  Event type
* [fn] {Function}<br/>
  Handler
* [ctx] {Object}<br/>
  Handler context

###### Returns:

{this}

##### emit ( e, [data] ) → {this}

Fires event handlers

###### Parameters:

* e {String | events:Event}<br/>
  Event
* [data] {Object}<br/>
  Additional data

###### Returns:

{this}

