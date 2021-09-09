"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var languageActions_1 = require("./languageActions");
var i18next_1 = require("i18next");
var defaultState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" },
    ]
};
// NOTE: 记得是匿名函数哦！！！增加actiontypes：1.纠错功能。 2.动态区分传入action的类型 
exports["default"] = (function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case languageActions_1.CHANGE_LANGUAGE:
            // NOTE: for i18n.once clicked, action was dispatched to here, other than add payload 
            i18next_1["default"].changeLanguage(action.payload); // 这样处理是不标准的，有副作用.因为所有的RedUC而都必须是纯函数
            return __assign(__assign({}, state), { language: action.payload });
        case languageActions_1.ADD_LANGUAGE:
            return __assign(__assign({}, state), { languageList: __spreadArrays(state.languageList, [action.payload]) });
    }
    return state;
});
