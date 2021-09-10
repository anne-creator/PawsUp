import {createStore,combineReducers} from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer"

const rootReducer = combineReducers({
    language:languageReducer,
    recommendProducts:recommendProductsReducer,
})//combineReducer接受一个对象

const store = createStore(rootReducer);
// NOTE： 定义language的类型
/* explain:ReturnType<typeof store.getState> 反向注入
store.getState returns the current store tree:function getInt(a: string) {
 return parseInt(a);
}
type A = ReturnType<typeof getInt>; // => number
Using typeof, we are able to able to get hold of the type signature of getInt, which in this case would mean (a: string) => number. ReturnType accepts a function and returns the return type that the function would return when being invoked. number in our getInt example.
*/
export type RootState = ReturnType<typeof store.getState>;
export default store
