"use strict";
// slice 自动包含reducer 和 action的映射关系，代替action.ts 和reducer.ts
// slice相当于reducer store中分割出来的子模块，和reducer功能相似
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
exports.__esModule = true;
exports.productDetailSlice = exports.getProductDetail = void 0;
/**createAsyncThunk
 * NOTE1:引入createAsyncThunk
 * NOTE2:创建createAsyncThunk
 * NOTE3：slice里处理异步函数getProductDetail自动生成的是三个actions：pending，fullfilled，rejection
 */
//NOTE1:引入createAsyncThunk
var toolkit_1 = require("@reduxjs/toolkit");
var axios_1 = require("axios");
var initialState = {
    loading: true,
    error: null,
    data: null
};
/** NOTE2:创建thunk action 通过 createAsyncThunk。
 * 接受参数：1.命名空间加上crateAsync的名字; 2. async 异步函数：放入主要函数逻辑（API获取），return一个promise
 * 此时，getProductDetail 函数会自行生成pending，fullfilled，rejection这三个action，放到slice里处理
 * 不需要任何控制流的操作，三个action都解决了。
*/
exports.getProductDetail = toolkit_1.createAsyncThunk("productDetail/getProductDetail", //slice name/acion name
function (touristRouteID, thunkAPI) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get("http://123.56.149.216:8080/api/touristRoutes/" + touristRouteId)];
            case 1:
                data = (_a.sent()).data;
                return [2 /*return*/, data]; //data 是一个promise，结果不确定
        }
    });
}); });
exports.productDetailSlice = toolkit_1.createSlice({
    name: 'productDetail',
    initialState: initialState,
    /* Reducer explain
    *1.捆绑action和Reducer，不需要单独定义action.
    *2. reducer是一个对象，不是过程。（原reducer file是一个过程，不处理sideEffect.
    *3.不需要写switch语句
    */
    reducers: {
        /* 第一个action, 后面接她的处理函数，也就是reducer。参数是当前state
        处理API请求开始*/
        fetchStart: function (state) {
            //return { ...state, loading:true  } 原写法
            state.loading = true; //immue框架, 直接改变state，底层原理相同，由框架执行
        },
        fetchSuccess: function (state, action) {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchFail: function (state, action) {
            var ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        }
    },
    //NOTE3：slice里处理异步函数getProductDetail自动生成的是三个actions：pending，fullfilled，rejection
    extraReducers: (_a = {},
        _a[exports.getProductDetail.pending.type] = function (state) {
            //return { ...state, loading:true  } 原写法
            state.loading = true; //immue框架, 直接改变state，底层原理相同，由框架执行
        },
        _a[exports.getProductDetail.fulfilled.type] = function (state, action) {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        _a[exports.getProductDetail.rejected.type] = function (state, action) {
            var ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
        _a)
});
//|||||||||||||||||||extra knowledge:||||||||||||||||||||||||||||
//NOTE1:payloadAction:自定义action的payload类型：原本类型已被定义好为any,现在可以自定义为、
// import {PayloadAction} from '@reduxjs/toolkit';
// fetchSuccess: (state, action： PayloadAction<string|null>) => { //action payload类型自定义/
