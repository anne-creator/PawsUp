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
exports.__esModule = true;
exports.HomePage = void 0;
var react_1 = require("react");
// import { Header, Footer } from '../../components'
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var way1_png_1 = require("../../assets/images/way1.png");
var way2_png_1 = require("../../assets/images/way2.png");
var way3_png_1 = require("../../assets/images/way3.png");
var way4_png_1 = require("../../assets/images/way4.png");
var dogFood_png_1 = require("../../assets/images/dogFood.png");
// import { Row, Col, Typography } from "antd";
// import { productList1, productList2, productList3 } from './mockups'
// import sideImage from '../../assets/images/sider_2019_12-09.png';
// import sideImage2 from '../../assets/images/sider_2019_02-04.png';
// import sideImage3 from './../../assets/images/sider_2019_02-04-2.png';
var HomePage_module_scss_1 = require("./HomePage.module.scss");
var react_i18next_1 = require("react-i18next"); //首字母大写：高阶组件，首字母小写：类型定义
var HomePageComponent = /** @class */ (function (_super) {
    __extends(HomePageComponent, _super);
    function HomePageComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePageComponent.prototype.render = function () {
        // 用了withTranslation之后，自动给props追加一个t函数
        var t = this.props.t;
        var seniorHref = 'https://petsmartcharities.ca/our-stories/community-impact/keeping-pets-in-the-arms-of-seniors-who-love-them';
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
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__decor'] }, "New ways of helping animals "),
                        react_1["default"].createElement("div", { className: HomePage_module_scss_1["default"]['text__heading'] }, "Like watching cute animal viedos? "),
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
                            react_1["default"].createElement("p", null, "\u201C Pets offer more than companionship to many Canadian seniors. They also act as a source of purpose, affection, empathy, and have a\u2026 \u201D")),
                        react_1["default"].createElement(antd_1.Button, { className: HomePage_module_scss_1["default"]['button__senior'], type: 'primary', shape: 'round', href: seniorHref },
                            "Read More ",
                            react_1["default"].createElement(icons_1.ArrowRightOutlined, null)))))));
    };
    return HomePageComponent;
}(react_1["default"].Component));
exports.HomePage = react_i18next_1.withTranslation()(HomePageComponent);
