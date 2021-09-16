"use strict";
exports.__esModule = true;
var react_1 = require("react");
var App_module_scss_1 = require("./App.module.scss");
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("./pages");
var components_1 = require("./components");
function App() {
    return (react_1["default"].createElement("div", { className: App_module_scss_1["default"].App },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(components_1.HeaderClass, null),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/', component: pages_1.HomePage }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/signin', component: pages_1.SignInPage }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/register', component: pages_1.RegisterPage }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/detail/:touristRoutedId', component: pages_1.DetailPage }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/adopt', component: pages_1.AdoptPage }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/adopt/pet/:petId', component: pages_1.PetPage }),
            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/search/keywords?', component: pages_1.SearchPage }),
            react_1["default"].createElement(components_1.Footer, null))));
}
exports["default"] = App;
// 使用Route，传递组件时候，react router 会默认传递三个数据history，locaiton，match.
// 
