import i18n from "i18next";
// 引入initReactI18next
import { initReactI18next } from "react-i18next";

// 引入两个json格式的语言包，在 i18n folder 里
import translation_en from "./en.json";
import translation_zh from "./zh.json";

// 把语言包放在resources对象下面
const resources = {
  en: {
    translation: translation_en,
  },
  zh: {
    translation: translation_zh,
  },
};

// 复制i18n插件的剩余example代码
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh",//初始化语言
    // keySeparator: false, // we do not use keys in form messages.welcome
    // header.slogan
    interpolation: {
      escapeValue: false, // react already safes from xss
      // 不会为了防止xss攻击，强行把html转变为字符串
    },
  });

export default i18n;
