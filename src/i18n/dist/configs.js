"use strict";
exports.__esModule = true;
var i18next_1 = require("i18next");
// 引入initReactI18next
var react_i18next_1 = require("react-i18next");
// 引入两个json格式的语言包，在 i18n folder 里
var en_json_1 = require("./en.json");
var zh_json_1 = require("./zh.json");
// 把语言包放在resources对象下面
var resources = {
    en: {
        translation: en_json_1["default"]
    },
    zh: {
        translation: zh_json_1["default"]
    }
};
// 复制i18n插件的剩余example代码
i18next_1["default"]
    .use(react_i18next_1.initReactI18next) // passes i18n down to react-i18next
    .init({
    resources: resources,
    lng: "zh",
    // keySeparator: false, // we do not use keys in form messages.welcome
    // header.slogan
    interpolation: {
        escapeValue: false
    }
});
exports["default"] = i18next_1["default"];
