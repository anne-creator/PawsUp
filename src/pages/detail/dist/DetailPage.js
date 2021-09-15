"use strict";
exports.__esModule = true;
exports.DetailPage = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var components_1 = require("../../components");
var antd_2 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var RangePicker = antd_2.DatePicker.RangePicker;
var mockup_1 = require("./mockup");
// NOTE1 for use slice in detail page
var slice_1 = require("../../redux/productDetail/slice");
var hooks_1 = require("../../redux/hooks"); //连接 产品详情的数据
var react_redux_1 = require("react-redux");
/** connect rtk in detail page
 *      1.NOTE1:import productDetailSlice,useSelector, useDispatch
 *      2.NOTE2:extract data from store: useSelector
 *      3.NOTE3:取得dispatch函数
 *      4.NOTE4：useEffect 中分别发送三个action。action从slice中来，RTK自动生成了actionCreator
 */
//NOTE2: extract data from store: useSelector
var loading = hooks_1.useSelector(function (state) { return state.productDetail.loading; });
var error = hooks_1.useSelector(function (state) { return state.productDetail.error; });
var product = hooks_1.useSelector(function (state) { return state.productDetail.data; });
// NOTE3: get dispatch funciton from useDispatch
var dispatch = react_redux_1.useDispatch();
exports.DetailPage = function (props) {
    // console.log(props.history)
    // console.log(props.location)
    // console.log(props.match)
    var touristRoutedId = react_router_dom_1.useParams().touristRoutedId;
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(null), product = _b[0], setProduct = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        dispatch(slice_1.getProductDetail(touristRoutedId)); //NOTE 使用异步thunk
    }, []);
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
        react_1["default"].createElement("div", { className: styles["page-content"] },
            react_1["default"].createElement("div", { className: styles["product-intro-container"] },
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 13 },
                        react_1["default"].createElement(components_1.ProductIntro, { title: product.title, shortDescription: product.description, price: product.originalPrice, coupons: product.coupons, points: product.points, discount: product.price, rating: product.rating, pictures: product.touristRoutePictures.map(function (p) { return p.url; }) })),
                    react_1["default"].createElement(antd_1.Col, { span: 11 },
                        react_1["default"].createElement(RangePicker, { open: true, style: { marginTop: 20 } })))),
            react_1["default"].createElement(antd_1.Anchor, { className: styles["product-detail-anchor"] },
                react_1["default"].createElement(antd_1.Menu, { mode: "horizontal" },
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "1" },
                        react_1["default"].createElement(antd_1.Anchor.Link, { href: "#feature", title: "\u4EA7\u54C1\u7279\u8272" })),
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "3" },
                        react_1["default"].createElement(antd_1.Anchor.Link, { href: "#fees", title: "\u8D39\u7528" })),
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "4" },
                        react_1["default"].createElement(antd_1.Anchor.Link, { href: "#notes", title: "\u9884\u8BA2\u987B\u77E5" })),
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "5" },
                        react_1["default"].createElement(antd_1.Anchor.Link, { href: "#comments", title: "\u7528\u6237\u8BC4\u4EF7" })))),
            react_1["default"].createElement("div", { id: "feature", className: styles["product-detail-container"] },
                react_1["default"].createElement(antd_1.Divider, { orientation: "center" },
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3 }, "\u4EA7\u54C1\u7279\u8272")),
                react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: product.features }, style: { margin: 50 } })),
            react_1["default"].createElement("div", { id: "fees", className: styles["product-detail-container"] },
                react_1["default"].createElement(antd_1.Divider, { orientation: "center" },
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3 }, "\u8D39\u7528")),
                react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: product.fees }, style: { margin: 50 } })),
            react_1["default"].createElement("div", { id: "notes", className: styles["product-detail-container"] },
                react_1["default"].createElement(antd_1.Divider, { orientation: "center" },
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3 }, "\u9884\u5B9A\u987B\u77E5")),
                react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: product.notes }, style: { margin: 50 } })),
            react_1["default"].createElement("div", { id: "comments", className: styles["product-detail-container"] },
                react_1["default"].createElement(antd_1.Divider, { orientation: "center" },
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3 }, "\u7528\u6237\u8BC4\u4EF7")),
                react_1["default"].createElement("div", { style: { margin: 40 } },
                    react_1["default"].createElement(components_1.ProductComments, { data: mockup_1.commentMockData })))),
        react_1["default"].createElement(components_1.Footer, null)));
};
