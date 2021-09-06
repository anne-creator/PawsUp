import {CHANGE_LANGUAGE,ADD_LANGUAGE} from './languageActions'
import i18n from 'i18next';
export interface LanuageState {
    language: "en" | "zh";
    languageList: { name: string; code: string }[];
}
const defaultState:LanuageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" },
  ],
}
// NOTE: 记得是匿名函数哦！！！
export default (state=defaultState, action:any) => {
    switch(action.type) {
        case CHANGE_LANGUAGE:
            // NOTE: for i18n 
            i18n.changeLanguage(action.payload);// 这样处理是不标准的，有副作用.因为所有的RedUC而都必须是纯函数
            return {
                ...state,language: action.payload
            }
        case ADD_LANGUAGE:
            return {
                ...state,
                languageList:[...state.languageList,action.payload],
            }
    }
    return state;
}