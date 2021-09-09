export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add_language";

// 定义action类型接口
interface ChangeLanguageAction {
    type:typeof CHANGE_LANGUAGE,
    payload:'zh'| 'en'
}
interface AddLanguageAction {
    type:typeof ADD_LANGUAGE,
    payload:{name:string, code:string}
}
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

//action maker: 接受字符串一样的参数 ，语言代码。返回要提取的action对象
export const changeLanguageActionCreator = (languageCode:'zh'|'en'):ChangeLanguageAction => {
    return {
        type: CHANGE_LANGUAGE,
        payload:languageCode
    } 
    
}

export const addLanguageActionCreator = (name: string, code: string):AddLanguageAction => {
    return {
        type:ADD_LANGUAGE,
        payload:{name,code},
    }
}