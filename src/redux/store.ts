import {createStore,applyMiddleware} from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer"
import thunk from 'redux-thunk';
import {actionLog} from "./middlewares/actionLog"
import { productDetailSlice } from './productDetail/slice'; //NOTE2：引入slice
import { combineReducers,configureStore } from "@reduxjs/toolkit"; //支持处理slice和reducer

const rootReducer = combineReducers({
    language:languageReducer,
    recommendProducts:recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
})//combineReducer接受一个对象

const store = createStore(rootReducer ,applyMiddleware(thunk, actionLog));
// NOTE： 定义language的类型
/* explain:ReturnType<typeof store.getState> 反向注入
store.getState returns the current store tree:function getInt(a: string) {
 return parseInt(a);
}
type A = ReturnType<typeof getInt>; // => number
Using typeof, we are able to able to get hold of the type signature of getInt, which in this case would mean (a: string) => number. ReturnType accepts a function and returns the return type that the function would return when being invoked. number in our getInt example.
*/
export type RootState = ReturnType<typeof store.getState>;

export default store;

/* 使用slice：
    1.删除redux中的combineReducers
    2.引入rtk中的combineReducers,支持处理slice和reducer:import { combineReducers } from "@reduxjs/toolkit";
    3.rootReducer中添加slice：productDetail: productDetailSlice.reducer,

    extra knowledge: configureStore可以用来创建store，大部分时候不用。
*/

 