import { getListsFromAPI } from '@/services/search'; //@是src
export default {
  nameSpace: 'search',
  //   NOTE:相当于数据库
  state: {
    text: 'dva',
    lists: [],
  },
  //   NOTE：公共同步异步方法的调用
  //   NOTE： 同步
  reducers: {
    getLists(state, action) {
      return {
        ...state,
        // FIXME: 什么是Array(10),payload是自定义的
        lists: Array(10).fill(action.payload),
      };
    },
  },
  //   NOTE：异步 call：执行异步函数 put：接收一个json对象,发出一个 Action，类似于 dispatch
  // FIXME:这个异步函数返回啥
  effects: {
    *getListsAsync({ payload }, { call, put }) {
      // call 第一个参数是请求方法名，第二个是payload
      const res = yield call(getListsFromAPI, payload);
      console.log(res.lists);
      // FIXME:yield 是什么
      yield put({
        type: 'getLists', //调用的同步方法
        payload: res.lists,
      });
    },
  },
};
