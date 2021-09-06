"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var languageReducer_1 = require("./language/languageReducer");
var store = redux_1.createStore(languageReducer_1["default"]);
exports["default"] = store;
