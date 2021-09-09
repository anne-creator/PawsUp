"use strict";
exports.__esModule = true;
exports.addLanguageActionCreator = exports.changeLanguageActionCreator = exports.ADD_LANGUAGE = exports.CHANGE_LANGUAGE = void 0;
exports.CHANGE_LANGUAGE = "change_language";
exports.ADD_LANGUAGE = "add_language";
//action maker: 接受字符串一样的参数 ，语言代码。返回要提取的action对象
exports.changeLanguageActionCreator = function (languageCode) {
    return {
        type: exports.CHANGE_LANGUAGE,
        payload: languageCode
    };
};
exports.addLanguageActionCreator = function (name, code) {
    return {
        type: exports.ADD_LANGUAGE,
        payload: { name: name, code: code }
    };
};
