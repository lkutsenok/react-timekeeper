import { css, jsx } from '@emotion/core'

export const DONE_BUTTON_COLOR = '#686868'
export const DONE_BUTTON_BORDER_COLOR = '#CCC'

const doneButton = css`
	display: block;
	color: var(--done-text-color, ${DONE_BUTTON_COLOR});
	text-transform: uppercase;
	border-top: var(--done-border-top, 1px solid ${DONE_BUTTON_BORDER_COLOR});
	text-align: center;
	cursor: pointer;
	padding: 16px 0;
	font-size: var(--done-font-size, 13px);
	letter-spacing: 0.5px;
	line-height: normal;
	font-weight: var(--done-font-weight, 500);
`

export default doneButton
