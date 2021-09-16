"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.HomePage = void 0;
var react_1 = require("react");
// import { Header, Footer } from '../../components'
var antd_1 = require("antd");
var way1_png_1 = require("../../assets/images/way1.png");
var way2_png_1 = require("../../assets/images/way2.png");
var way3_png_1 = require("../../assets/images/way3.png");
var way4_png_1 = require("../../assets/images/way4.png");
var dogFood_png_1 = require("../../assets/images/dogFood.png");
var HomePage_module_scss_1 = require("./HomePage.module.scss");
var react_i18next_1 = require("react-i18next"); //首字母大写：高阶组件，首字母小写：类型定义
var react_redux_1 = require("react-redux");
var recommendProductsActions_1 = require("../../redux/recommendProducts/recommendProductsActions"); //引入三个action creator
// 不必要
var axios_1 = require("axios");
// import { ProductCollection } from '../../components/productCollection/ProductCollection';
// import { productList1, productList2, productList3 } from './mockups';
// get State from store
var mapStateToProps = function (state) {
    return {
        loading: state.recommendProducts.loading,
        error: state.recommendProducts.error,
        productList: state.recommendProducts.productList
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        // 包装了fetchStart函数，用在jsx里
        fetchStart: function () {
            dispatch(recommendProductsActions_1.fetchRecommendProductStartActionCreator());
        },
        fetchSuccess: function (data) {
            dispatch(recommendProductsActions_1.fetchRecommendProductSuccessActionCreator(data));
        },
        fetchFail: function (error) {
            dispatch(recommendProductsActions_1.fetchRecommendProductFailActionCreator(error));
        }
    };
};
var HomePageComponent = /** @class */ (function (_super) {
    __extends(HomePageComponent, _super);
    function HomePageComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 不必要
    HomePageComponent.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.props.fetchStart();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1["default"].get("http://123.56.149.216:8080/api/productCollections")];
                    case 2:
                        data = (_a.sent()).data;
                        this.props.fetchSuccess(data);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.props.fetchFail(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 不必要结束
    HomePageComponent.prototype.render = function () {
        console.log(this.props);
        // 用了withTranslation之后，自动给props追加一个t函数
        var _a = this.props, t = _a.t, productList = _a.productList, loading = _a.loading, error = _a.error;
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
        return (react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"].App },
            react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['hero'] },
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['center'] },
                    react_1["default"].createElement("h1", { className: HomePage_module_scss_1["default"]['hero__title'] }, "More Than one Way to help"),
                    react_1["default"].createElement("p", { className: HomePage_module_scss_1["default"]['hero__subtitle'] }, "PawsUp is a non-profit charity website that provides pet adoption, pet donation and pet health care services."))),
            react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"].ways },
                react_1["default"].createElement("h2", { className: HomePage_module_scss_1["default"]['ways__title'] }, "Ways to Donate"),
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__cards'] },
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__card'] },
                        react_1["default"].createElement("img", { className: HomePage_module_scss_1["default"]['ways__card__img'], src: way1_png_1["default"] }),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__card__title'] },
                            react_1["default"].createElement("h4", { className: HomePage_module_scss_1["default"]['tittle__text'] }, "Take a furry friend home")),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['ways__card__button'], type: 'primary' }, "Start Now")),
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__card'] },
                        react_1["default"].createElement("img", { className: HomePage_module_scss_1["default"]['ways__card__img'], src: way2_png_1["default"] }),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__card__title'] },
                            react_1["default"].createElement("h4", { className: HomePage_module_scss_1["default"]['tittle__text'] }, "Buy them a gift you selected")),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['ways__card__button'], type: 'primary' }, "Start Now")),
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__card'] },
                        react_1["default"].createElement("img", { className: HomePage_module_scss_1["default"]['ways__card__img'], src: way3_png_1["default"] }),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__card__title'] },
                            react_1["default"].createElement("h4", { className: HomePage_module_scss_1["default"]['tittle__text'] }, "Medical care is in great need"),
                            " "),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['ways__card__button'], type: 'primary' }, "Start Now")),
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__card'] },
                        react_1["default"].createElement("img", { className: HomePage_module_scss_1["default"]['ways__card__img'], src: way4_png_1["default"] }),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['ways__card__title'] },
                            react_1["default"].createElement("h4", { className: HomePage_module_scss_1["default"]['tittle__text'] }, "Buy for your own pet can also help"),
                            " "),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['ways__card__button'], type: 'primary' }, "Start Now")))),
            react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content'] },
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__video'] },
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__video__img'] + " " + HomePage_module_scss_1["default"]['item'] }),
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text'] + " " + HomePage_module_scss_1["default"].item },
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__decor'] }, "New ways of helping animals"),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__heading'] }, "Like watching cute animal viedos?"),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__subheading'] }, " Donate selected products, We will deliver the cute animal video."),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__restriction'] }),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['text__button'] }, "Discover more"))),
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__buy'] },
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text'] + " " + HomePage_module_scss_1["default"].item },
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__decor'] }, "New ways of helping animals "),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__heading'] }, "Aready got a pet? You buy some products, we donate 5% in rescuing."),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__subheading'] }, "Every purchasing of your own pet will donate 5% to help animal recuing."),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__restriction'] }),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['text__button'] }, "Discover more")),
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__buy__img'] + " " + HomePage_module_scss_1["default"].item })),
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__feed'] },
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__feed__img'] + " " + HomePage_module_scss_1["default"].item }),
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text'] + " " + HomePage_module_scss_1["default"].item },
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__heading'] }, "Help to feed the hungry"),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__subheading'] },
                            react_1["default"].createElement("p", null, "Food donations are always the core of caving our furry friends. Your donation is distributed directly to a furry friend in need of a full belly."),
                            react_1["default"].createElement("p", null, "Only $30 can feed a medium size dog for a month with quality food. And guess what, $30 can feed two cats!")),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__restriction'] }),
                        react_1["default"].createElement("img", { className: HomePage_module_scss_1["default"]['text__img'], src: dogFood_png_1["default"] }),
                        react_1["default"].createElement(antd_1.Button, { type: 'primary', className: HomePage_module_scss_1["default"]['button__primary__donate'] }, "Donate $30"),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['button__secondary__donate'] }, "Explore more"))),
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__sick'] },
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text'] + " " + HomePage_module_scss_1["default"].item },
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__decor'] }, "New ways of helping animals "),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__heading'] }, "Aready got a pet? You buy some products, we donate 5% in rescuing."),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__subheading'] }, "Every purchasing of your own pet will donate 5% to help animal recuing."),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__restriction'] }),
                        react_1["default"].createElement(antd_1.Button, { type: 'primary', className: HomePage_module_scss_1["default"]['button__primary__donate'] }, "Donate  $50 "),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['button__secondary__donate'] }, "Expolore More")),
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__sick__img'] + " " + HomePage_module_scss_1["default"].item })),
                react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__senior'] },
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['content__senior__img'] + " " + HomePage_module_scss_1["default"].item }),
                    react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text'] + " " + HomePage_module_scss_1["default"].item },
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__heading'] }, "Keeping Pets in the Arms of Seniors"),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__subheading'] },
                            react_1["default"].createElement("p", null, "\u201C Pets offer more than companionship to many Canadian seniors. They also act as a source of purpose, affection, empathy, and have a\u2026 \u201D")))))));
    };
    return HomePageComponent;
}(react_1["default"].Component));
exports.HomePage = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(react_i18next_1.withTranslation()(HomePageComponent));
