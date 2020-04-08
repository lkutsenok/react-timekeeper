import { css, jsx } from '@emotion/core'

const CLOCK_HAND_ARM = '#007aff'
const CLOCK_HAND_CIRCLE_BACKGROUND = '#007aff'
const CLOCK_HAND_INTERMEDIATE_CIRCLE_BACKGROUND = '#fff'

export const line = css`
	stroke: var(--hand-line-color, ${CLOCK_HAND_ARM});
`

export const centerCircle = css`
	fill: var(--hand-circle-center, ${CLOCK_HAND_ARM});
`

export const outerCircle = css`
	fill: var(--hand-circle-outer, ${CLOCK_HAND_CIRCLE_BACKGROUND});
`

export const intermediateMinuteCircle = css`
	fill: var(--hand-minute-circle, ${CLOCK_HAND_INTERMEDIATE_CIRCLE_BACKGROUND});
`
