ES6 / DOM assisting tool
===================

This is a very simple module that makes it cleaner and easier to perform the more common DOM tasks such as:

* Adding, Checking and Removing classes
* Appending es6 Template strings to the DOM in a none brute-force manner (using appendChild)
* Getting and assigning Ids
* Getting and assigning data attributes
* Finding child elements
* and more...

This is done through the following methods:

* .addClass() - Adds class(es) to an element, supports single or multiple values
* .removeClass() - Removed class(es) from an element, supports single or multiple values
* .checkClass() - Checks if element has a class
* .data - Can return the dataset, a specific dataset or add a new data attribute
* .id() - Can return or assign an id
* .classes() - Returns the classes of an element
* .find() - Looks for child elements with matching criteria
* .findTo() - Allows you to chain other methods after finding elements, such as adding, removing classes, data etc.
* .modify() - Expects a callback method, but will pass the element in the argument of the callback. Giving you freedom to do anything else.
* .return() - Returns the standard DOM element

note: currently when using this utility, you cannot use regular DOM methods on the objects. unless using .find(), .modify() or .return() as these responses will return regular DOM objects.

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
You can also pass it a selector which could be used multiple times in your DOM, if you do it will find all instances of this selector and add the passed css class argument(s) to them.

```
import ele from 'es6-dom-helper';

ele('#my_wrapper').addClass('class_name');

```

You can also pass an array of classes to be added:

```
import ele from 'es6-dom-helper';

ele('#my_wrapper').addClass(['class1', 'class2']);

```

## Removing classes
You can also pass it a selector which could be used multiple times in your DOM, if you do it will find all instances of this selector and remove the passed css class argument(s) to them.

```
import ele from 'es6-dom-helper';

ele('#my_wrapper').removeClass('class_name');

```

You can also pass an array of classes to be removed:

```
import ele from 'es6-dom-helper';

ele('#my_wrapper').removeClass(['class1', 'class2']);

```


## Checking for class
You do not need to check if the class is there before adding or removing, when adding or removing a class the utility does that for you.
However in a lot cases you want to check that a class exists on an element to check for state.

```
import ele from 'es6-dom-helper';

if ( ele('#my_wrapper').checkClass('active') ) {
  // Do something
};

```

## Adding ES6 template strings
If your selector is found multiple times in the DOM, the same template string will be appended in all cases found.

```
import ele from 'es6-dom-helper';

ele('#wrapper').append(`<div class="my_message"> Template String Added </div>`)

```

## Getting or assigning Ids
This will only grab or assign an ID for the first instance of the selector found.

```
import ele from 'es6-dom-helper';

const wrapper = ele('.my_element');

// Add an id
wrapper.id('my_id');

// Get the id
wrapper.id(); // It will simply return the id or undefined

```

## Getting or assigning Data Attributes
This will only grab or assign a data attribute for the first instance of the selector found.

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

## Finding child element(s)
This will return all instances of children with this selector.

```
import ele from 'es6-dom-helper';

const wrapper = ele('.my_element');
const myChild = wrapper.find('.my_child'); // Returns first instance of this class.
const firstDiv = wrapper.find('div'); // Returns first instance of this element.
// etc

```

## Finding child element(s) to modify
This allows you to find child elements to chain another method too, such as adding or removing a class.

```
import ele from 'es6-dom-helper';

const wrapper = ele('.my_element');
wrapper.findTo('.my_child').addClass('.test');
wrapper.findTo('.my_child').removeClass('.test');

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
