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
    return state;
}