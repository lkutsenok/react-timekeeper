import { css, jsx, keyframes } from '@emotion/core'

const TIME_DEFAULT_COLOR = '#9a9ca1'
const TIME_SELECTED_COLOR = '#007aff'

export const wrapper = (is24hr: boolean) => css`
	background: var(--top-bg, white);
	padding: 14px 16px;
	border-radius: 3px 3px 0 0;
	position: relative;

	${is24hr &&
		`
		display: flex;
		justify-content: center;
	`}
`

export const hourWrapper = (is24hr: boolean) => css`
	text-align: right;
	position: relative;
	display: inline-block;
	${!is24hr && 'margin-left: 20px;'}
`

export const minuteWrapper = (is24hr: boolean) => css`
	position: relative;
	display: inline-block;
`

export const colon = css`
	color: var(--top-colon-color, ${TIME_DEFAULT_COLOR});
	font-weight: 500;
	display: inline-block;
	font-size: 200px;
	vertical-align: 2px;
	margin: 0 5px;
	line-height: normal;
`

const popInOut = keyframes`
	from { transform: scale(1); }
	30% { transform: scale(0.88); }
	60% { transform: scale(1.05); }
	to { transform: scale(1); }
`

const timeSelected = css`
	color: var(--top-selected-color, ${TIME_SELECTED_COLOR});
	animation: ${popInOut} 0.6s ease-out;
`

export const time = (isActive: boolean) => css`
	color: var(--top-text-color, ${TIME_DEFAULT_COLOR});
	display: inline-block;
	font-size: 200px;
	cursor: pointer;
	user-select: none;
	line-height: normal;
	${isActive && timeSelected}
`

export const meridiem = css`
	color: var(--top-meridiem-color, ${TIME_DEFAULT_COLOR});
	display: inline-block;
	font-size: 13px;
	text-transform: uppercase;
	margin-left: 2px;
	padding: 10px 8px;
	vertical-align: 1px;
`
