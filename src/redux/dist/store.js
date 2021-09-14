"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var languageReducer_1 = require("./language/languageReducer");
var recommendProductsReducer_1 = require("./recommendProducts/recommendProductsReducer");
var redux_thunk_1 = require("redux-thunk");
var actionLog_1 = require("./middlewares/actionLog");
var slice_1 = require("./productDetail/slice"); //NOTE2：引入slice
var toolkit_1 = require("@reduxjs/toolkit"); //支持处理slice和reducer
var rootReducer = toolkit_1.combineReducers({
    language: languageReducer_1["default"],
    recommendProducts: recommendProductsReducer_1["default"],
    productDetail: slice_1.productDetailSlice.reducer
}); //combineReducer接受一个对象
var store = redux_1.createStore(rootReducer, redux_1.applyMiddleware(redux_thunk_1["default"], actionLog_1.actionLog));
exports["default"] = store;
/* 使用slice：
    1.删除redux中的combineReducers
    2.引入rtk中的combineReducers,支持处理slice和reducer:import { combineReducers } from "@reduxjs/toolkit";
    3.rootReducer中添加slice：productDetail: productDetailSlice.reducer,

    extra knowledge: configureStore可以用来创建store，大部分时候不用。
*/
