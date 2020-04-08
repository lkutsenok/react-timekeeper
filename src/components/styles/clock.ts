import { css } from '@emotion/core'
import { CLOCK_SIZE } from '../../helpers/constants'

const styles = css`
	display: inline-block;
	border-radius: 50%;
	background: var(--clock-bg, white);
	width: ${CLOCK_SIZE}px;
	height: ${CLOCK_SIZE}px;
	position: relative;
	cursor: pointer;
	touch-action: none;
`

export default styles
