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
exports.__esModule = true;
// 处理action：引入recommendProductsAction
var recommendProductsActions_1 = require("./recommendProductsActions");
var defaultState = {
    loading: true,
    error: null,
    productList: []
};
// 匿名函数，接受store里的旧state和action
exports["default"] = (function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case recommendProductsActions_1.FETCH_RECOMMEND_PRODUCTS_START:
            return __assign(__assign({}, state), { loading: true });
        case recommendProductsActions_1.FETCH_RECOMMEND_PRODUCTS_SUCCESS:
            return __assign(__assign({}, state), { loading: false, productList: action.payload });
        case recommendProductsActions_1.FETCH_RECOMMEND_PRODUCTS_FAIL:
            return __assign(__assign({}, state), { loading: false, error: action.payload });
        default:
    }
    return state;
});
