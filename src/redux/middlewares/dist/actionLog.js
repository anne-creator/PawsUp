"use strict";
exports.__esModule = true;
exports.actionLog = void 0;
exports.actionLog = function (store) { return function (next) { return function (action) {
    console.log("state current", store.getState());
    console.log('fireaction', action);
    next(action); //代替dispatch的作用
    console.log('state changed', store.getState());
}; }; };
