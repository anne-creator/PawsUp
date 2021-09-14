"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var languageReducer_1 = require("./language/languageReducer");
var recommendProductsReducer_1 = require("./recommendProducts/recommendProductsReducer");
var redux_thunk_1 = require("redux-thunk");
var actionLog_1 = require("./middlewares/actionLog");
var rootReducer = redux_1.combineReducers({
    language: languageReducer_1["default"],
    recommendProducts: recommendProductsReducer_1["default"]
}); //combineReducer接受一个对象
var store = redux_1.createStore(rootReducer, redux_1.applyMiddleware(redux_thunk_1["default"], actionLog_1.actionLog));
exports["default"] = store;
