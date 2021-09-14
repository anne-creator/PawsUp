// slice 自动包含reducer 和 action的映射关系，代替action.ts 和reducer.ts
// slice相当于reducer store中分割出来的子模块，和reducer功能相似

import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from '@reduxjs/toolkit';

interface ProductDetailState {
    loading: boolean;
    error:string | null;
    data:any; //产品细节
}

const initialState : ProductDetailState = {
    loading:true, 
    error: null,
    data:null
}

export const productDetailSlice = createSlice({
    name:'productDetail', //命名空间
    initialState, //强制定义初始化数据
    /* Reducer explain
    *1.捆绑action和Reducer，不需要单独定义action.
    *2. reducer是一个对象，不是过程。（原reducer file是一个过程，不处理sideEffect.
    *3.不需要写switch语句
    */
    reducers: { 
         /* 第一个action, 后面接她的处理函数，也就是reducer。参数是当前state 
         处理API请求开始*/
         fetchStart: (state) =>{ 
            //return { ...state, loading:true  } 原写法
            state.loading= true; //immue框架, 直接改变state，底层原理相同，由框架执行
         },
         fetchSuccess: (state, action) => { //action类型被RTK定义好了，鼠标hover可以看见
            state.data = action.payload; 
            state.loading = false;
            state.error = null;
         },
         fetchFail: (state,action: PayloadAction<string | null>) => { //自行定义action见NOTE1
            const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
         }


    }
})


//|||||||||||||||||||extra knowledge:||||||||||||||||||||||||||||

//NOTE1:payloadAction:自定义action的payload类型：原本类型已被定义好为any,现在可以自定义为、
// import {PayloadAction} from '@reduxjs/toolkit';
// fetchSuccess: (state, action： PayloadAction<string|null>) => { //action payload类型自定义/

