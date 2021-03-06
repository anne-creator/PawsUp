import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

// 定义action名字
export const FETCH_RECOMMEND_PRODUCTS_START = 
    "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 
    "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推荐信息api调用失败

export type RecommendProductAction =
  | FetchRecommendProductStartAction
  | FetchRecommendProductSuccessAction
  | FetchRecommendProductFailAction; 

// 定义action接口    
interface FetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: any,
}

interface FetchRecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: any
}

// 定义是action creator
export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
    return {
      type: FETCH_RECOMMEND_PRODUCTS_START,
    };
  };
  
  export const fetchRecommendProductSuccessActionCreator = (data:any) : FetchRecommendProductSuccessAction => {
      return {
          type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
          payload: data
      }
  }
  
  export const fetchRecommendProductFailActionCreator = (error:any):FetchRecommendProductFailAction => {
      return {
          type: FETCH_RECOMMEND_PRODUCTS_FAIL,
          payload: error
      }
  }

// thunk 可以返回一个函数
// 在一个thunk action中可以完成一些列连续的action操作
// 并且可以处理异步逻辑
// 业务逻辑可以从ui层面挪到这里，代码分层会更清晰
export const giveMeDataActionCreator = (): ThunkAction<void,
RootState,
unknown,
RecommendProductAction> => async (dispatch,getState) => {
    try {
        const { data } = await axios.get(
          "http://123.56.149.216:8080/api/productCollections"
        );
        dispatch(fetchRecommendProductSuccessActionCreator(data));
      } catch (error) {
        dispatch(fetchRecommendProductFailActionCreator(error.message));
      }
}