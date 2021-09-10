"use strict";
exports.__esModule = true;
exports.fetchRecommendProductFailActionCreator = exports.fetchRecommendProductSuccessActionCreator = exports.fetchRecommendProductStartActionCreator = exports.FETCH_RECOMMEND_PRODUCTS_FAIL = exports.FETCH_RECOMMEND_PRODUCTS_SUCCESS = exports.FETCH_RECOMMEND_PRODUCTS_START = void 0;
// 定义action名字
exports.FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
exports.FETCH_RECOMMEND_PRODUCTS_SUCCESS = "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
exports.FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推荐信息api调用失败
// 定义是action creator
exports.fetchRecommendProductStartActionCreator = function () {
    return {
        type: exports.FETCH_RECOMMEND_PRODUCTS_START
    };
};
exports.fetchRecommendProductSuccessActionCreator = function (data) {
    return {
        type: exports.FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    };
};
exports.fetchRecommendProductFailActionCreator = function (error) {
    return {
        type: exports.FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error
    };
};
