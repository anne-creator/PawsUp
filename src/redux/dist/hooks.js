"use strict";
// 自定义的useSelector hook,给useSelector加上类型定义，剥离component对state的类型要求，达到组件可以复用的目的。
exports.__esModule = true;
exports.useSelector = void 0;
var react_redux_1 = require("react-redux");
exports.useSelector = react_redux_1.useSelector;
