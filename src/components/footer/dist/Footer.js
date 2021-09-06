"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var Footer_module_scss_1 = require("./Footer.module.scss");
var antd_1 = require("antd");
var logo_svg_1 = require("../../assets/logo.svg");
// use hooks in i18n
var react_i18next_1 = require("react-i18next");
exports.Footer = function () {
    // NOTE: use hooks in function class 
    var t = react_i18next_1.useTranslation().t;
    return (react_1["default"].createElement("footer", { className: Footer_module_scss_1["default"]['footer-container'] },
        react_1["default"].createElement("div", null, t("footer.detail")),
        react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer'] },
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__main'] },
                react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__paws-up'] },
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__paws-up__logo'] },
                        react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "logo", className: Footer_module_scss_1["default"]["footer__paws-up__img"] }),
                        react_1["default"].createElement("h1", { className: Footer_module_scss_1["default"]["footer__paws-up__title"] }, "Paws Up")),
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__paws-up__save-life'] }, "Let\u2019s saves lives together!")),
                react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__nav'] },
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__nav__item'] }, "Adopt"),
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__nav__item'] }, "Donate"),
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__nav__item'] }, "Order"),
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__nav__item'] }, "Profile")),
                react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__info'] },
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__info__item'] }, "Contact"),
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__info__item'] }, "FAQ"),
                    react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__info__item'] }, "Join Us"))),
            react_1["default"].createElement(antd_1.Divider, null),
            react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__copyright'] },
                react_1["default"].createElement("div", { className: Footer_module_scss_1["default"]['footer__copyright__content'] },
                    react_1["default"].createElement("p", { className: Footer_module_scss_1["default"]['footer__copyright__Paws-Up'] }, "Copyright \u00A9 2021 Anne Paws Up. All rights reserved"),
                    react_1["default"].createElement("p", { className: Footer_module_scss_1["default"]['footer__copyright__cookies'] },
                        "We use cookies for better service. \u2002\u2002",
                        react_1["default"].createElement("span", { className: Footer_module_scss_1["default"]['footer__copyright__span'] }, "Accept")))))));
};
