import React, { useEffect, useRef } from 'react'
import { useTransition } from 'react-spring'

import ClockHand from './ClockHand'
import { HourNumbers, MinuteNumbers } from './Numbers'
import {
	INITIAL_HOUR_TRANSFORM,
	INITIAL_MINUTE_TRANSFORM,
	MODE,
	INNER_NUMBER_POSITIONING,
	getOuterNumberPosition,
} from '../helpers/constants'
import { isHourMode, isMinuteMode } from '../helpers/utils'
import { ElementRef } from '../helpers/types'
import style from './styles/clock'
import useConfig from '../hooks/config-context'
import useTimekeeperState from '../hooks/state-context'

function exitPosition(mode: MODE): number {
	return isHourMode(mode) ? INITIAL_HOUR_TRANSFORM : INITIAL_MINUTE_TRANSFORM
}

function initialPosition(mode: MODE): number {
	return isMinuteMode(mode) ? INITIAL_HOUR_TRANSFORM : INITIAL_MINUTE_TRANSFORM
}

interface Props {
	clockEl: ElementRef
}

type Transition = {
	item: MODE
	key: string
	props: any
}

export default function ClockWrapper({ clockEl ,}: Props) {
	const firstTime = useRef(true)
	const { hour24Mode } = useConfig()
	const { mode, time } = useTimekeeperState()

	const transitions = useTransition(mode, null, {
		unique: true,
		from: !firstTime.current && {
			opacity: 0,
			translate: initialPosition(mode),
			translateInner: INNER_NUMBER_POSITIONING.exit,
		},
		enter: {
			opacity: 1,
			translate: getOuterNumberPosition(mode),
			translateInner: INNER_NUMBER_POSITIONING.enter,
		},
		leave: {
			opacity: 0,
			translate: exitPosition(mode),
			translateInner: INNER_NUMBER_POSITIONING.exit,
		},
	} as any)

	useEffect(() => {
		// don't show intial animation on first render - ie: {from : ...}
		firstTime.current = false
	}, [])

	return (
		<div className="react-timekeeper__clock" css={style} ref={clockEl}>
			{transitions.map(({ item: currentMode, key, props: anim }: Transition) => {
				// TODO - weird hot reloading issue, remove during compilation
				if (!currentMode) {
					return null
				}
				return isMinuteMode(currentMode) ? (
					<MinuteNumbers activeMinute={time.minute} anim={anim} key={key} />
				) : (
					<HourNumbers
						anim={anim}
						activeHour={time.hour}
						activeMinute={time.minute}
						key={key}
						mode={currentMode as MODE.HOURS_12 | MODE.HOURS_24}
						hour24Mode={hour24Mode}
					/>
				)
			})}

			{/* place svg over and set z-index on numbers to prevent highlighting numbers on drag */}
			<ClockHand time={time} mode={mode} />
		</div>
	)
}
