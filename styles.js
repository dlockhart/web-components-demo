import { css } from 'lit-element/lit-element.js';

export const buttonStyles = css`
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
`;