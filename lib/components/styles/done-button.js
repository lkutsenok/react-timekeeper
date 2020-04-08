"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DONE_BUTTON_BORDER_COLOR = exports.DONE_BUTTON_COLOR = void 0;

var _core = require("@emotion/core");

const DONE_BUTTON_COLOR = '#686868';
exports.DONE_BUTTON_COLOR = DONE_BUTTON_COLOR;
const DONE_BUTTON_BORDER_COLOR = '#CCC';
exports.DONE_BUTTON_BORDER_COLOR = DONE_BUTTON_BORDER_COLOR;
const doneButton =
/*#__PURE__*/
(0, _core.css)("display:block;color:var(--done-text-color,", DONE_BUTTON_COLOR, ");text-transform:uppercase;border-top:var(--done-border-top,1px solid ", DONE_BUTTON_BORDER_COLOR, ");text-align:center;cursor:pointer;padding:16px 0;font-size:var(--done-font-size,13px);letter-spacing:0.5px;line-height:normal;font-weight:var(--done-font-weight,500);" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9kb25lLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLc0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL2RvbmUtYnV0dG9uLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5leHBvcnQgY29uc3QgRE9ORV9CVVRUT05fQ09MT1IgPSAnIzY4Njg2OCdcbmV4cG9ydCBjb25zdCBET05FX0JVVFRPTl9CT1JERVJfQ09MT1IgPSAnI0NDQydcblxuY29uc3QgZG9uZUJ1dHRvbiA9IGNzc2Bcblx0ZGlzcGxheTogYmxvY2s7XG5cdGNvbG9yOiB2YXIoLS1kb25lLXRleHQtY29sb3IsICR7RE9ORV9CVVRUT05fQ09MT1J9KTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Ym9yZGVyLXRvcDogdmFyKC0tZG9uZS1ib3JkZXItdG9wLCAxcHggc29saWQgJHtET05FX0JVVFRPTl9CT1JERVJfQ09MT1J9KTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHBhZGRpbmc6IDE2cHggMDtcblx0Zm9udC1zaXplOiB2YXIoLS1kb25lLWZvbnQtc2l6ZSwgMTNweCk7XG5cdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IHZhcigtLWRvbmUtZm9udC13ZWlnaHQsIDUwMCk7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGRvbmVCdXR0b25cbiJdfQ== */"));
var _default = doneButton;
exports.default = _default;