'use strict';
// Exporting the module
export default function (selector) {
	const Constructor = function (selector) {
		this.element = document.querySelectorAll(selector);
		this._temp_element = false;
		this.isArray = false;

		if (this.element.length > 1) {
			this.isArray = true;
		}

		return this;
	};

	Constructor.prototype = {
		reset: function() {
			if (this._temp_element !== false) {
				this.element = this._temp_element;
				this._temp_element = false;
			}
		},
		checkClass: function (className, element) {
			const elementHasClass = element || this.element[0];
			// If no element or class name is parsed, we return (do nothing)
			if (!elementHasClass || !className) {
				return false;
			}

			const classArray = elementHasClass.className.split(' ');
			const checkClass = classArray.indexOf(className);

			if (checkClass >= 0) {
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
				this.element.forEach( element => {
					if (this.checkClass(cssClass, element)) {
						return;
					}

					element.className += ' ' + cssClass;
				});
				this.reset();
			};

			// Depending on the type we want to do this different.
			if (typeof data === 'string' && !this.isArray) {
				handleClass(data);
			} else {
				data.forEach( cssClass => {
					handleClass(cssClass);
				});
			}
		},
		removeClass: function (data) {
			// ensure atleast one element exists.
			if (!this.element || !data) {
				return;
			}

			// Mechanism for removing the class.
			const handleClass = cssClass => {
				this.element.forEach( element => {
					if (this.checkClass(cssClass, element)) {
						const classArray = element.className.split(' ');
						const removeClass = classArray.indexOf(cssClass);

						if (removeClass >= 0) {
							classArray.splice(removeClass, 1);
							element.className = classArray.join(' ');
						}
					}
				});
				this.reset();
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

			if (this.isArray) {
				this.elements.forEach( element => {
					element.appendChild(wrapper.children[0]);
				});
			} else {
				this.element[0].appendChild(wrapper.children[0]);
			}

			this.reset();
		},
		classes: function () {
			return this.element[0].className;
		},
		id: function (id) {
			if (!id) {
				return this.element[0].id;
			}

			this.element[0].id = id;
			this.reset();
		},
		data: function (name, value) {
			if (!name) {
				return this.element[0].dataset;
			}

			if (!value) {
				return this.element[0].dataset[name];
			}

			this.element[0].dataset[name] = value;
			this.reset();
		},
		find: function (selector) {
			if (!this.isArray) {
				return this.element[0].querySelectorAll(selector);
			}

			let myElementsArray = [];

			this.elements.forEach( element => {
				const found = element.querySelectorAll(selector);

				if (found) {
					found.forEach( foundEle => {
						myElementsArray.push(foundEle);
					});
				}
			})

			return myElementsArray;
		},
		findTo: function (selector) {
			this._temp_element = this.element;
			this.element = this.find(selector);

			return this;
		},
		modify: function (callback) {
			callback(this.element);
			this.reset();
		},
		return: function() {
			this.reset();
			return this.element;
		}
	}

	return new Constructor(selector);
};
