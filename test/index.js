import test from 'ava';
import ele from '../src/';

test.beforeEach(t => {
	// Clear any previous tests
	document.body.innerHTML = '';

	// Add out test element
	var myTestElement = document.createElement('div');
	myTestElement.className = 'my_element';

	document.body.appendChild(myTestElement);
});

test('Testing if an element has the newly added class', t => {
	ele('.my_element').addClass('class_added');

	// Add some classes to an element.
	t.is( ele('.my_element').hasClass('class_added'), true );
});

test('Testing using the same intance for multiple changes, add and remove', t => {
	const element = ele('.my_element');

	// Add some classes to an element.
	element.addClass('class_added');
	t.is( element.hasClass('class_added'), true );

	// Remove some classes.
	element.removeClass('class_added');
	t.not( element.hasClass('class_added'), true );

});

test('Testing template strings', t => {
	const element = ele('.my_element');

	const templateString = `
		<div class="my_child"> hello my child </div>
	`;

	// Add some classes to an element.
	element.append(templateString);
	t.not(document.querySelector('.my_child'), undefined );
	t.is(document.querySelector('.my_child').innerHTML, ' hello my child ');

});

test('Testing adding and removing arrays of classes', t => {
	const element = ele('.my_element');

	// Add some classes to an element.
	element.addClass(['class1', 'class2']);
	t.is( element.hasClass('class2'), true );

	// Remove some classes.
	element.removeClass(['class1', 'class2']);
	t.not( element.hasClass('class1'), true );
	t.not( element.hasClass('class2'), true );

});

test('Handle duplicates', t => {
	const element = ele('.my_element');

	// There should be no duplicates
	element.addClass(['class1', 'class2', 'my_element']);
	t.is( element.classes(), 'my_element class1 class2' );

});
