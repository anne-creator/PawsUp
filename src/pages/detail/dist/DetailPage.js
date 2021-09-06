"use strict";
exports.__esModule = true;
exports.DetailPage = void 0;
var react_1 = require("react");
exports.DetailPage = function (props) {
    console.log(props.history);
    console.log(props.location);
    console.log(props.match);
    return (react_1["default"].createElement("h1", null,
        "\u8DEF\u7EBFID\uFF1A",
        props.match.params.touristRoutedId));
};
