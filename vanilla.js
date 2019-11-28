class ButtonSubtle extends HTMLElement {

	static get template() {
		let tmpl = document.createElement('template');
		tmpl.innerHTML = `
			<style>
				button {
					align-items: center;
					background-color: transparent;
					border-color: transparent;
					border-radius: 6px;
					color: #006FBF;
					display: flex;
					font-family: inherit;
					outline: none;
					padding: 10px 12px;
					font-size: 14px;
				}
				button:hover:not([disabled]),
				button:focus:not([disabled]) {
					background-color: #e3e9f1;
				}
				button:focus {
					box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #006fbf;
				}
				button[disabled] {
					cursor: default;
					opacity: 0.5;
				}
				img {
					margin-right: 5px;
				}
			</style>
			<button><img alt=""><span></span></button>
		`;
		return tmpl;
	}

	// Instance of element is created/upgraded.
	// Useful for initializing state, global event listeners
	// creating shadow DOM
	constructor() {
		super();

		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(ButtonSubtle.template.content.cloneNode(true));

		this._button = this.shadowRoot.querySelector('button');
		this._img = this.shadowRoot.querySelector('img');
		this._text = this.shadowRoot.querySelector('span');
	}

	// Invoked each time element is inserted into the DOM
	connectedCallback() {}

	// Invoked each time element is removed from the DOM
	disconnectedCallback() {}

	// called when an observed attribute has been added
	// removed, updated or replaced
	attributeChangedCallback(attrName, oldVal, newVal) {
		if (attrName === 'text') {
			this._text.innerText = newVal;
			this._button.setAttribute('title', newVal);
		} else if (attrName === 'disabled') {
			this._button.disabled = this.disabled;
		} else if (attrName === 'src') {
			this._img.src = newVal;
		}
	}

	static get observedAttributes() {
		return ['disabled', 'src', 'text'];
	}

	get disabled() {
		return this.hasAttribute('disabled');
	}
	set disabled(val) {
		if (val) {
			this.setAttribute('disabled', '');
		} else {
			this.removeAttribute('disabled');
		}
	}

}

customElements.define('button-subtle', ButtonSubtle);