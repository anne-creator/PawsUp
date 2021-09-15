"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var languageReducer_1 = require("./language/languageReducer");
var recommendProductsReducer_1 = require("./recommendProducts/recommendProductsReducer");
var actionLog_1 = require("./middlewares/actionLog");
var slice_1 = require("./productDetail/slice"); //NOTE2：引入slice
var toolkit_1 = require("@reduxjs/toolkit"); //支持处理slice和reducer
var rootReducer = toolkit_1.combineReducers({
    language: languageReducer_1["default"],
    recommendProducts: recommendProductsReducer_1["default"],
    productDetail: slice_1.productDetailSlice.reducer
}); //combineReducer接受一个对象
/** NOTE RTK store 创建方式
 * 参数：接受一个对象，里面有reducer，middleware(可不写）,devTools*/
var store = toolkit_1.configureStore({
    reducer: rootReducer,
    // FIXME:看样子是depcreated了。
    middleware: function (getDefaultMiddleware) { return __spreadArrays(getDefaultMiddleware(), [actionLog_1.actionLog]); },
    devTools: true
});
exports["default"] = store;
/* 使用slice：
    1.删除redux中的combineReducers
    2.引入rtk中的combineReducers,支持处理slice和reducer:import { combineReducers } from "@reduxjs/toolkit";
    3.rootReducer中添加slice：productDetail: productDetailSlice.reducer,

    extra knowledge: configureStore可以用来创建store，大部分时候不用。
*/
