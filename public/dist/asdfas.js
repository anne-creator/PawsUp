"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var Header_module_css_1 = require("./Header.module.css");
var logo_svg_1 = require("../../assets/logo.svg");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
exports.Header = function () {
    var history = react_router_dom_1.useHistory();
    return (react_1["default"].createElement("div", { className: Header_module_css_1["default"]["app-header"] },
        react_1["default"].createElement(antd_1.Layout.Header, { className: Header_module_css_1["default"]["main-header"] },
            react_1["default"].createElement("div", { className: Header_module_css_1["default"]["left-header"] },
                react_1["default"].createElement("span", { onClick: function () { return history.push('/'); } },
                    react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "logo", className: Header_module_css_1["default"]["App-logo"] }),
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3, className: Header_module_css_1["default"].title }, "Paws Up")),
                react_1["default"].createElement(antd_1.Input.Search, { placeholder: "请输入旅游目的地、主题、或关键字", className: Header_module_css_1["default"]["search-input"] })),
            react_1["default"].createElement("div", { className: Header_module_css_1["default"]['right-header'] },
                react_1["default"].createElement(antd_1.Dropdown.Button, { style: { marginLeft: 15 }, overlay: react_1["default"].createElement(antd_1.Menu, null,
                        react_1["default"].createElement(antd_1.Menu.Item, null, "\u4E2D\u6587"),
                        react_1["default"].createElement(antd_1.Menu.Item, null, "English")), icon: react_1["default"].createElement(icons_1.GlobalOutlined, null) }, "\u8BED\u8A00"),
                react_1["default"].createElement(antd_1.Button.Group, { className: Header_module_css_1["default"]["button-group"] },
                    react_1["default"].createElement(antd_1.Button, { onClick: function () { return history.push('register'); }, className: Header_module_css_1["default"]["button-register"] }, "Register"),
                    react_1["default"].createElement(antd_1.Button, { onClick: function () { return history.push('signin'); }, className: Header_module_css_1["default"]["button-login"] }, "Login"))))));
};
