import {css, html, LitElement} from 'lit-element/lit-element.js';
import {buttonStyles} from './styles.js';

class ButtonSubtle extends LitElement {

	static get properties() {
		return {
			disabled: {type: Boolean, reflect: true},
			src: {type: String},
			text: {type: String}
		}
	}

	static get styles() {
		return [css`
			:host {
				display: inline-block;
			}
		`, buttonStyles];
	}

	render() {
		return html`
			<button ?disabled="${this.disabled}">
				<img src="${this.src}" alt="">
				<span>${this.text}</span>
			</button>
		`;
	}

	constructor() {
		super();
		this.disabled = false;
	}

	connectedCallback() {
		super.connectedCallback();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		super.attributeChangedCallback(attrName, oldVal, newVal);
	}

	focus() {
		this.shadowRoot.querySelector('button').focus();
	}

}

customElements.define('button-subtle', ButtonSubtle);