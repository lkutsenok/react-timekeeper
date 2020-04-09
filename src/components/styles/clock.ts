import { css } from '@emotion/core'
import { CLOCK_SIZE } from '../../helpers/constants'

const styles = css`
	display: inline-block;
	border-radius: 50%;
	width: ${CLOCK_SIZE}px;
	height: ${CLOCK_SIZE}px;
	background: var(--clock-bg, white);
	position: relative;
	cursor: pointer;
	touch-action: none;
`

export default styles
