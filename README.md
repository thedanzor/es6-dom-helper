ES6 / DOM assisting tool
===================

This is a very simple work in progress NPM ES6 module that provides easier syntax for making regular DOM changes / lookups such as:

* Adding, Checking and Removing classes
* Appending es6 Template strings to the DOM in a none brute-force manner (using appendChild)
* Getting and assigning Ids
* Getting and assigning data attributes
* Finding child elements
* and more...

This is done through the following methods:

* .addClass() - Adds class(es) to an element
* .removeClass() - Removed class(es) from an element
* .hasClass() - Checks if element has a class
* .data - Can return all the dataset, a specific dataset or assign a new data attribute
* .id() - Can return or assign an id
* .classes() - Returns the classes of an element
* .find() - Looks for child element with matching criteria
* .modify() - Expects a callback method, but will pass the theme in the argument of the callback. Giving you freedom to do anything else you may want to do.
* .return() - Returns the standard dom element

note: currently when using this method, you cannot use regular DOM methods on these objects. unless using .find() or .return() as these responses will be regular DOM objects.

WIP
===================

* Handling multiple elements per instance (querySelectorAll)

Examples
===================
## Using the same instance to do multiple things
Just like with regular DOM objects, you can define elements and use the methods on them afterwards.

```
import ele from 'es6-dom-helper';

const element = ele('#my_wrapper');

if (//Something) {
  element.addClass('.case1')
} elseif (//Something else) {
  element.addClass('.case2')
} else {
  element.removeClass('case3');
}

```

## Adding classes

```
import ele from 'es6-dom-helper';

ele('#my_wrapper').addClass('class_name');

```

You can also pass arrays:

```
import ele from 'es6-dom-helper';

ele('#my_wrapper').addClass(['class1', 'class2']);

```

## Removing classes

```
import ele from 'es6-dom-helper';

ele('#my_wrapper').removeClass('class_name');

```

You can also pass arrays:

```
import ele from 'es6-dom-helper';

ele('#my_wrapper').removeClass(['class1', 'class2']);

```


## Checking for class
You do not need to check if the class is there before adding or removing, when adding or removing a class the utility does that for you.
However in a lot cases you want to check that a class exists on an element to check for state.

```
import ele from 'es6-dom-helper';

if ( ele('#my_wrapper').hasClass('active') ) {
  // Do something
};

```

## Adding ES6 template strings

```
import ele from 'es6-dom-helper';

ele('#wrapper').append(`<div class="my_message"> Template String Added </div>`)

```

## Getting or assigning Ids

```
import ele from 'es6-dom-helper';

const wrapper = ele('.my_element');

// Add an id
wrapper.id('my_id');

// Get the id
wrapper.id(); // It will simply return the id or undefined

```

## Getting or assigning Data Attributes

```
import ele from 'es6-dom-helper';

const wrapper = ele('.my_element');

// Get the data attributes
wrapper.data(); // Returns the dataset

// Get a specific data attribute
wrapper.data('state'); // returns the dataset.state or undefined

// Setting a data attribute
wrapper.data('state', 'active'); // Assigns a data attribute of state with the value of active

```

## Finding a child element

```
import ele from 'es6-dom-helper';

const wrapper = ele('.my_element');
const myChild = wrapper.find('.my_child'); // Returns first instance of this class.
const firstDiv = wrapper.find('div'); // Returns first instance of this element.
// etc

```

## .modify() - Playground method for having more native control.

```
import ele from 'es6-dom-helper';

const wrapper = ele('.my_element');
wrapper.modify( (element) => {
  console.log(element) // DOM element of ".my_element"
});
```


Setup & tests:
===================

Please ensure you install all dependencies with `npm i`

Unit tests are implemented with code coverage also. You can run `npm run test` to execute the unit tests.
