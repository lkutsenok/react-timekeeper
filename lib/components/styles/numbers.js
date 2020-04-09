"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbersWrapperStyle = exports.numbersStyle = void 0;

var _core = require("@emotion/core");

var _constants = require("../../helpers/constants");

const CLOCK_NUMBER_COLOR = '#9a9ca1';

function getFontSize(hour24Mode, inner) {
  if (!hour24Mode) {
    return "var(--numbers-font-size-reg, ".concat(_constants.NUMBER_REGULAR_FONT_SIZE, "px)");
  }

  return inner ? "var(--numbers-font-size-inner, ".concat(_constants.HOUR_24_INNER_FONT_SIZE, "px)") : "var(--numbers-font-size-outer, ".concat(_constants.HOUR_24_OUTER_FONT_SIZE, "px)");
}

const numbersStyle = ({
  hour24Mode = false,
  inner = false,
  active = false
}) =>
/*#__PURE__*/
(0, _core.css)("display:inline-block;position:absolute;color:var(--numbers-text-color,", active ? "#fff" : CLOCK_NUMBER_COLOR, ");pointer-events:none;border-radius:99px;width:", _constants.NUMBER_RADIUS_REGULAR, "px;height:", _constants.NUMBER_RADIUS_REGULAR, "px;text-align:center;line-height:", _constants.NUMBER_RADIUS_REGULAR, "px;z-index:5;font-size:", getFontSize(hour24Mode, inner), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9udW1iZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCaUciLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL251bWJlcnMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQge1xuXHROVU1CRVJfUkFESVVTX1JFR1VMQVIsXG5cdE5VTUJFUl9SRUdVTEFSX0ZPTlRfU0laRSxcblx0SE9VUl8yNF9JTk5FUl9GT05UX1NJWkUsXG5cdEhPVVJfMjRfT1VURVJfRk9OVF9TSVpFLFxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbnN0YW50cydcblxuY29uc3QgQ0xPQ0tfTlVNQkVSX0NPTE9SID0gJyM5YTljYTEnXG5cbmZ1bmN0aW9uIGdldEZvbnRTaXplKGhvdXIyNE1vZGU6IGJvb2xlYW4sIGlubmVyOiBib29sZWFuKTogc3RyaW5nIHtcblx0aWYgKCFob3VyMjRNb2RlKSB7XG5cdFx0cmV0dXJuIGB2YXIoLS1udW1iZXJzLWZvbnQtc2l6ZS1yZWcsICR7TlVNQkVSX1JFR1VMQVJfRk9OVF9TSVpFfXB4KWBcblx0fVxuXHRyZXR1cm4gaW5uZXJcblx0XHQ/IGB2YXIoLS1udW1iZXJzLWZvbnQtc2l6ZS1pbm5lciwgJHtIT1VSXzI0X0lOTkVSX0ZPTlRfU0laRX1weClgXG5cdFx0OiBgdmFyKC0tbnVtYmVycy1mb250LXNpemUtb3V0ZXIsICR7SE9VUl8yNF9PVVRFUl9GT05UX1NJWkV9cHgpYFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRob3VyMjRNb2RlPzogYm9vbGVhblxuXHRpbm5lcj86IGJvb2xlYW5cblx0YWN0aXZlPzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgbnVtYmVyc1N0eWxlID0gKHsgaG91cjI0TW9kZSA9IGZhbHNlLCBpbm5lciA9IGZhbHNlLCBhY3RpdmUgPSBmYWxzZSB9OiBQcm9wcykgPT4gY3NzYFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29sb3I6IHZhcigtLW51bWJlcnMtdGV4dC1jb2xvciwgJHthY3RpdmUgPyBcIiNmZmZcIiA6IENMT0NLX05VTUJFUl9DT0xPUn0pO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogOTlweDtcblx0d2lkdGg6ICR7TlVNQkVSX1JBRElVU19SRUdVTEFSfXB4O1xuXHRoZWlnaHQ6ICR7TlVNQkVSX1JBRElVU19SRUdVTEFSfXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiAke05VTUJFUl9SQURJVVNfUkVHVUxBUn1weDtcblx0ei1pbmRleDogNTtcblx0Zm9udC1zaXplOiAke2dldEZvbnRTaXplKGhvdXIyNE1vZGUsIGlubmVyKX07XG5gXG5cbi8vIHotaW5kZXggcmVxdWlyZWQgdG8gYmUgb24gdG9wIG9mIGNsb2NraGFuZFxuZXhwb3J0IGNvbnN0IG51bWJlcnNXcmFwcGVyU3R5bGUgPSBjc3NgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHR6LWluZGV4OiAyO1xuYFxuIl19 */")); // z-index required to be on top of clockhand


exports.numbersStyle = numbersStyle;
const numbersWrapperStyle = process.env.NODE_ENV === "production" ? {
  name: "av1tj5",
  styles: "position:absolute;left:0;top:0;z-index:2;"
} : {
  name: "av1tj5",
  styles: "position:absolute;left:0;top:0;z-index:2;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9udW1iZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDc0MiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL251bWJlcnMudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQge1xuXHROVU1CRVJfUkFESVVTX1JFR1VMQVIsXG5cdE5VTUJFUl9SRUdVTEFSX0ZPTlRfU0laRSxcblx0SE9VUl8yNF9JTk5FUl9GT05UX1NJWkUsXG5cdEhPVVJfMjRfT1VURVJfRk9OVF9TSVpFLFxufSBmcm9tICcuLi8uLi9oZWxwZXJzL2NvbnN0YW50cydcblxuY29uc3QgQ0xPQ0tfTlVNQkVSX0NPTE9SID0gJyM5YTljYTEnXG5cbmZ1bmN0aW9uIGdldEZvbnRTaXplKGhvdXIyNE1vZGU6IGJvb2xlYW4sIGlubmVyOiBib29sZWFuKTogc3RyaW5nIHtcblx0aWYgKCFob3VyMjRNb2RlKSB7XG5cdFx0cmV0dXJuIGB2YXIoLS1udW1iZXJzLWZvbnQtc2l6ZS1yZWcsICR7TlVNQkVSX1JFR1VMQVJfRk9OVF9TSVpFfXB4KWBcblx0fVxuXHRyZXR1cm4gaW5uZXJcblx0XHQ/IGB2YXIoLS1udW1iZXJzLWZvbnQtc2l6ZS1pbm5lciwgJHtIT1VSXzI0X0lOTkVSX0ZPTlRfU0laRX1weClgXG5cdFx0OiBgdmFyKC0tbnVtYmVycy1mb250LXNpemUtb3V0ZXIsICR7SE9VUl8yNF9PVVRFUl9GT05UX1NJWkV9cHgpYFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRob3VyMjRNb2RlPzogYm9vbGVhblxuXHRpbm5lcj86IGJvb2xlYW5cblx0YWN0aXZlPzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgbnVtYmVyc1N0eWxlID0gKHsgaG91cjI0TW9kZSA9IGZhbHNlLCBpbm5lciA9IGZhbHNlLCBhY3RpdmUgPSBmYWxzZSB9OiBQcm9wcykgPT4gY3NzYFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29sb3I6IHZhcigtLW51bWJlcnMtdGV4dC1jb2xvciwgJHthY3RpdmUgPyBcIiNmZmZcIiA6IENMT0NLX05VTUJFUl9DT0xPUn0pO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogOTlweDtcblx0d2lkdGg6ICR7TlVNQkVSX1JBRElVU19SRUdVTEFSfXB4O1xuXHRoZWlnaHQ6ICR7TlVNQkVSX1JBRElVU19SRUdVTEFSfXB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiAke05VTUJFUl9SQURJVVNfUkVHVUxBUn1weDtcblx0ei1pbmRleDogNTtcblx0Zm9udC1zaXplOiAke2dldEZvbnRTaXplKGhvdXIyNE1vZGUsIGlubmVyKX07XG5gXG5cbi8vIHotaW5kZXggcmVxdWlyZWQgdG8gYmUgb24gdG9wIG9mIGNsb2NraGFuZFxuZXhwb3J0IGNvbnN0IG51bWJlcnNXcmFwcGVyU3R5bGUgPSBjc3NgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiAwO1xuXHR6LWluZGV4OiAyO1xuYFxuIl19 */"
};
exports.numbersWrapperStyle = numbersWrapperStyle;