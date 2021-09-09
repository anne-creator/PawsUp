import {CHANGE_LANGUAGE,ADD_LANGUAGE,LanguageActionTypes} from './languageActions'
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
// NOTE: 记得是匿名函数哦！！！增加actiontypes：1.纠错功能。 2.动态区分传入action的类型 
export default (state = defaultState, action: LanguageActionTypes) => {
    switch(action.type) {
        case CHANGE_LANGUAGE:
            // NOTE: for i18n.once clicked, action was dispatched to here, other than add payload 
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