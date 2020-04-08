"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinuteNumbers = exports.HourNumbers = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _reactSpring = require("react-spring");

var _constants = require("../helpers/constants");

var _math = require("../helpers/math");

var _numbers = require("./styles/numbers");

/*
	can memoize components since `anim` object doesn't actually change
*/
function hours({
  anim,
  mode,
  hour24Mode,
  activeHour
}) {
  const opacity = anim.opacity,
        translateOuter = anim.translate,
        translateInner = anim.translateInner;
  const _CLOCK_VALUES$mode = _constants.CLOCK_VALUES[mode],
        numbersOuter = _CLOCK_VALUES$mode.numbers,
        numbersInner = _CLOCK_VALUES$mode.numbersInner;
  return (0, _core.jsx)(_reactSpring.animated.div, {
    style: {
      opacity: opacity
    },
    css: _numbers.numbersWrapperStyle,
    className: "react-timekeeper__clock-hours"
  }, numbersOuter.map((val, i) => {
    return (0, _core.jsx)(_reactSpring.animated.span, {
      css: (0, _numbers.numbersStyle)({
        hour24Mode,
        active: parseInt(val) === activeHour
      }),
      key: val,
      style: {
        transform: translateOuter.interpolate(v => (0, _math.transform)(i + 1, v))
      }
    }, val);
  }), hour24Mode && numbersInner.map((val, i) => {
    return (0, _core.jsx)(_reactSpring.animated.span, {
      css: (0, _numbers.numbersStyle)({
        hour24Mode,
        inner: true,
        active: parseInt(val) === activeHour
      }),
      key: val,
      style: {
        transform: translateInner.interpolate(v => (0, _math.transform)(i + 1, v))
      }
    }, val);
  }));
}

const HourNumbers = hours;
exports.HourNumbers = HourNumbers;

function minutes({
  anim,
  activeMinute
}) {
  const opacity = anim.opacity,
        translate = anim.translate;
  return (0, _core.jsx)(_reactSpring.animated.div, {
    style: {
      opacity: opacity
    },
    css: _numbers.numbersWrapperStyle,
    className: "react-timekeeper__clock-minutes"
  }, _constants.MINUTES.map((val, i) => {
    return (0, _core.jsx)(_reactSpring.animated.span, {
      css: (0, _numbers.numbersStyle)({
        active: parseInt(val) === activeMinute
      }),
      key: val,
      style: {
        transform: translate.interpolate(v => (0, _math.transform)(i + 1, v))
      }
    }, val);
  }));
}

const MinuteNumbers = minutes;
exports.MinuteNumbers = MinuteNumbers;