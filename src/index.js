'use strict';
// Exporting the module
export default function (selector) {
	const newDom = function (selector) {
		return new Constructor(elems);
	};

	const Constructor = function (selector) {
		this.element = document.querySelector(selector);

		return this;
	};

	Constructor.prototype = {
		hasClass: function (className) {
			// If no element or class name is parsed, we return (do nothing)
			if (!this.element) {
				return false;
			}

			const classArray = this.element.className.split(' ');
			const hasClass = classArray.indexOf(className);

			if (hasClass >= 0) {
				return true;
			}

			return false;
		},
		addClass: function (data) {
			// ensure atleast one element exists.
			if (!this.element || !data) {
				return;
			}

			// Mechanism for adding the class.
			const handleClass = cssClass => {
				if (this.hasClass(cssClass)) {
					return;
				}

				this.element.className += ' ' + cssClass;
			};

			// Depending on the type we want to do this different.
			if (typeof data === 'string') {
				handleClass(data);
			} else {
				data.forEach( cssClass => {
					handleClass(cssClass);
				})
			}
		},
		removeClass: function (data) {
			// ensure atleast one element exists.
			if (!this.element || !data) {
				return;
			}

			// Mechanism for removing the class.
			const handleClass = cssClass => {
				if (this.hasClass(cssClass)) {
					const classArray = this.element.className.split(' ');
					const removeClass = classArray.indexOf(cssClass);

					if (removeClass >= 0) {
						classArray.splice(removeClass, 1);
						this.element.className = classArray.join(' ');
					}
				}
			}

			// Depending on the type we want to do this different.
			if (typeof data === 'string') {
				handleClass(data);
			} else {
				data.forEach( cssClass => {
					handleClass(cssClass);
				})
			}
		},
		append: function (templateString) {
			const wrapper = document.createElement('div');
			wrapper.innerHTML = templateString;

			this.element.appendChild(wrapper.children[0]);
		},
		classes: function () {
			return this.element.className;
		},
		id: function (id) {
			if (!id) {
				return this.element.id;
			}

			this.element.id = id;
		},
		data: function (name, value) {
			if (!name) {
				return this.element.dataset;
			}

			if (!value) {
				return this.element.dataset[name];
			}

			this.element.dataset[name] = value;
		},
		find: function (element) {
			return this.element.querySelector(element);
		},
		modify: function (callback) {
			callback(this.element);
		},
		return: function() {
			return this.element;
		}
	}

	return new Constructor(selector);
};
