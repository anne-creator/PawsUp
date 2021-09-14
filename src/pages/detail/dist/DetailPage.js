"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DetailPage = void 0;
var react_1 = require("react");
var DetailPage_module_scss_1 = require("DetailPage.module.scss");
var axios_1 = require("axios");
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
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // setLoading(true);rtk前
                        // NOTE4：useEffect 中分别发送三个action
                        dispatch(slice_1.productDetailSlice.actions.fetchStart()); //ANCHOR: 一定要加小括号
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1["default"].get("http://123.56.149.216:8080/api/touristRoutes/" + touristRouteId)];
                    case 2:
                        data = (_a.sent()).data;
                        dispatch(slice_1.productDetailSlice.actions.fetchSuccess(data)); //API 返回后的数据
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        dispatch(slice_1.productDetailSlice.actions.fetchFail(error_1.message)); //ANCHER:from API,must add message
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchData();
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
        react_1["default"].createElement("div", { className: DetailPage_module_scss_1["default"]["page-content"] },
            react_1["default"].createElement("div", { className: DetailPage_module_scss_1["default"]["product-intro-container"] },
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 13 },
                        react_1["default"].createElement(components_1.ProductIntro, { title: product.title, shortDescription: product.description, price: product.originalPrice, coupons: product.coupons, points: product.points, discount: product.price, rating: product.rating, pictures: product.touristRoutePictures.map(function (p) { return p.url; }) })),
                    react_1["default"].createElement(antd_1.Col, { span: 11 },
                        react_1["default"].createElement(RangePicker, { open: true, style: { marginTop: 20 } })))),
            react_1["default"].createElement(antd_1.Anchor, { className: DetailPage_module_scss_1["default"]["product-detail-anchor"] },
                react_1["default"].createElement(antd_1.Menu, { mode: "horizontal" },
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "1" },
                        react_1["default"].createElement(antd_1.Anchor.Link, { href: "#feature", title: "\u4EA7\u54C1\u7279\u8272" })),
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "3" },
                        react_1["default"].createElement(antd_1.Anchor.Link, { href: "#fees", title: "\u8D39\u7528" })),
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "4" },
                        react_1["default"].createElement(antd_1.Anchor.Link, { href: "#notes", title: "\u9884\u8BA2\u987B\u77E5" })),
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "5" },
                        react_1["default"].createElement(antd_1.Anchor.Link, { href: "#comments", title: "\u7528\u6237\u8BC4\u4EF7" })))),
            react_1["default"].createElement("div", { id: "feature", className: DetailPage_module_scss_1["default"]["product-detail-container"] },
                react_1["default"].createElement(antd_1.Divider, { orientation: "center" },
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3 }, "\u4EA7\u54C1\u7279\u8272")),
                react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: product.features }, style: { margin: 50 } })),
            react_1["default"].createElement("div", { id: "fees", className: DetailPage_module_scss_1["default"]["product-detail-container"] },
                react_1["default"].createElement(antd_1.Divider, { orientation: "center" },
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3 }, "\u8D39\u7528")),
                react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: product.fees }, style: { margin: 50 } })),
            react_1["default"].createElement("div", { id: "notes", className: DetailPage_module_scss_1["default"]["product-detail-container"] },
                react_1["default"].createElement(antd_1.Divider, { orientation: "center" },
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3 }, "\u9884\u5B9A\u987B\u77E5")),
                react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: product.notes }, style: { margin: 50 } })),
            react_1["default"].createElement("div", { id: "comments", className: DetailPage_module_scss_1["default"]["product-detail-container"] },
                react_1["default"].createElement(antd_1.Divider, { orientation: "center" },
                    react_1["default"].createElement(antd_1.Typography.Title, { level: 3 }, "\u7528\u6237\u8BC4\u4EF7")),
                react_1["default"].createElement("div", { style: { margin: 40 } },
                    react_1["default"].createElement(components_1.ProductComments, { data: mockup_1.commentMockData })))),
        react_1["default"].createElement(components_1.Footer, null)));
};
