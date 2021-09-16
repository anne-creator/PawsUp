"use strict";
exports.__esModule = true;
exports.SearchPage = void 0;
var SearchPage_module_css_1 = require("./SearchPage.module.css");
var react_1 = require("react");
var components_1 = require("../../components");
var react_router_dom_1 = require("react-router-dom"); //取得url中的keyword
var antd_1 = require("antd");
var slice_1 = require("../../redux/productSearch/slice");
var hooks_1 = require("../../redux/hooks");
var react_redux_1 = require("react-redux");
exports.SearchPage = function () {
    var keywords = react_router_dom_1.useParams().keywords;
    var loading = hooks_1.useSelector(function (state) { return state.productSearch.loading; });
    var error = hooks_1.useSelector(function (s) { return s.productSearch.error; });
    var pagination = hooks_1.useSelector(function (s) { return s.productSearch.pagination; });
    var productList = hooks_1.useSelector(function (s) { return s.productSearch.data; });
    var dispatch = react_redux_1.useDispatch();
    var location = react_router_dom_1.useLocation();
    react_1.useEffect(function () {
        dispatch(slice_1.searchProduct({ nextPage: 1, pageSize: 10, keywords: keywords }));
    }, [location]); //location 表示将会死死的盯住url的变化
    var onPageChange = function (nextPage, pageSize) {
        dispatch(slice_1.searchProduct({ nextPage: nextPage, pageSize: pageSize, keywords: keywords }));
    };
    if (loading) {
        return (react_1["default"].createElement(antd_1.Spin, { size: "large", style: {
                marginTop: 200,
                marginBottom: 200,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%"
            } }));
    }
    if (error) {
        return react_1["default"].createElement("div", null,
            "\u7F51\u7AD9\u51FA\u9519\uFF1A",
            error);
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(components_1.HeaderClass, null),
        react_1["default"].createElement("div", { className: SearchPage_module_css_1["default"]["page-content"] },
            react_1["default"].createElement("div", { className: SearchPage_module_css_1["default"]["product-list-container"] },
                react_1["default"].createElement(components_1.FilterArea, null)),
            react_1["default"].createElement("div", { className: SearchPage_module_css_1["default"]["product-list-container"] },
                react_1["default"].createElement(components_1.ProductList, { data: productList, paging: pagination, onPageChange: onPageChange })),
            react_1["default"].createElement(components_1.Footer, null))));
};
