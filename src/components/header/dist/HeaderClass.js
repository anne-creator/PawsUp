"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HeaderClass = void 0;
// class component
var react_1 = require("react");
var Header_module_scss_1 = require("./Header.module.scss");
var logo_svg_1 = require("../../assets/logo.svg");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("../../redux/store");
var SubMenu_1 = require("antd/lib/menu/SubMenu");
var react_i18next_1 = require("react-i18next");
var languageActions_1 = require("../../redux/language/languageActions");
// 数据流入
// mapStateToProps: 接受从store传递的state
// return 需要从state中取得的数据
// store 的数据类型（需要再store里定义自己的类型）
// withTranslation i18n的props类型：语言切换用的，暂时用不上。
var mapStateToProps = function (state) {
    return {
        language: state.language,
        languageList: state.languageList
    };
};
// 数据流出：mapDispatchToProps: 
// 参数：store 中的 dispatch 函数
var mapDispatchToProps = function (dispatch) {
    return {
        changeLanguage: function (code) {
            var action = languageActions_1.changeLanguageActionCreator(code);
            dispatch(action);
        },
        addLanguage: function (name, code) {
            var action = languageActions_1.addLanguageActionCreator(name, code);
            dispatch(action);
        }
    };
}; //路由props类型 & hooks 类型定义 & redux-store的类型
var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleStoreChange = function () {
            var storeState = store_1["default"].getState();
            _this.setState({
                language: storeState.language,
                languageList: storeState.languageList
            });
        };
        _this.meunHandler = function (e) {
            var action = {
                type: 'change_language',
                payload: e.key
            };
            store_1["default"].dispatch(action);
        };
        return _this;
    }
    HeaderComponent.prototype.render = function () {
        // NOTE: t is from withTranslation from i18n
        var _a = this.props, history = _a.history, t = _a.t;
        return (react_1["default"].createElement("div", { className: Header_module_scss_1["default"]["app-header"] },
            react_1["default"].createElement("div", { className: Header_module_scss_1["default"].header },
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"]["header__left"] },
                    react_1["default"].createElement("span", { onClick: function () { return history.push('/'); }, className: Header_module_scss_1["default"]["header__logo"] },
                        react_1["default"].createElement("img", { src: logo_svg_1["default"], alt: "logo", className: Header_module_scss_1["default"]["header__logo__img"] }),
                        react_1["default"].createElement("h1", { className: Header_module_scss_1["default"]["header__logo__title"] }, "Paws Up")),
                    react_1["default"].createElement("h4", { className: Header_module_scss_1["default"]["header__how"] }, "How it works")),
                react_1["default"].createElement(antd_1.Menu, { mode: 'horizontal', className: Header_module_scss_1["default"]["header__middle"] },
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "Adopt", title: "Adopt", className: Header_module_scss_1["default"]['item'], onClick: function () { return history.push("/adopt"); } }, "Adopt"),
                    react_1["default"].createElement(SubMenu_1["default"], { key: "Donate", title: "Donate", className: Header_module_scss_1["default"]['nav'] },
                        react_1["default"].createElement(antd_1.Menu.Item, { key: "Food", className: Header_module_scss_1["default"]['item'] }, "Food"),
                        react_1["default"].createElement(antd_1.Menu.Item, { key: "Toys", className: Header_module_scss_1["default"]['item'] }, "Toys"),
                        react_1["default"].createElement(antd_1.Menu.Item, { key: "Supplies", className: Header_module_scss_1["default"]['item'] }, "Supplies")),
                    react_1["default"].createElement(SubMenu_1["default"], { key: "Health-Care", title: "Health Care", className: Header_module_scss_1["default"]['nav'] },
                        react_1["default"].createElement(antd_1.Menu.Item, { key: "Check", className: Header_module_scss_1["default"]['item'] }, "Regular Check"),
                        react_1["default"].createElement(antd_1.Menu.Item, { key: "Neurtered", className: Header_module_scss_1["default"]['item'] }, "Neurtered/Chips"),
                        react_1["default"].createElement(antd_1.Menu.Item, { key: "Grooming", className: Header_module_scss_1["default"]['item'] }, "Grooming"),
                        react_1["default"].createElement(antd_1.Menu.Item, { key: "Medical", className: Header_module_scss_1["default"]['item'] }, "Sick Pets Medical"))),
                react_1["default"].createElement("div", { className: Header_module_scss_1["default"]['header__right'] },
                    react_1["default"].createElement(antd_1.Dropdown.Button, { style: { marginLeft: 15 }, overlay: react_1["default"].createElement(antd_1.Menu, { onClick: this.meunHandler }, this.props.languageList.map(function (l) {
                            return react_1["default"].createElement(antd_1.Menu.Item, { key: l.code }, l.name);
                        })), icon: react_1["default"].createElement(icons_1.GlobalOutlined, null) }, this.props.language === "zh" ? "中文" : "English"),
                    react_1["default"].createElement(antd_1.Button, { type: 'primary', className: Header_module_scss_1["default"]['button__login'], onClick: function () { return history.push("register"); } }, "Sign In"),
                    react_1["default"].createElement(antd_1.Button, { className: Header_module_scss_1["default"]['button__signup'], onClick: function () { return history.push("signIn"); } }, "Register")))));
    };
    return HeaderComponent;
}(react_1["default"].Component));
// NOTE: connect function: connet(mapStateToProps,mapDispatchToProps)(componentItself),连接对象
exports.HeaderClass = react_i18next_1.withTranslation()(react_router_dom_1.withRouter(HeaderComponent)); //两个括号叠加在一起：高阶组件的高阶组件
// export const Header = connet()(withRouter(HeaderComponent));
//NOTE: function component.
// import React from 'react';
// import styles from './Header.module.css'
// import logo from '../../assets/logo.svg';
// import { GlobalOutlined } from "@ant-design/icons";
// import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
// import { useHistory } from 'react-router-dom'
// import { RootState } from '../../redux/store'
// // 从store中链接state数据
// import { useSelector } from 'react-redux';
// export const Header: React.FC = () => {
//   const history = useHistory()
//   const language = useSelector((state) => state.language);
//   return (
//     <div className={styles["app-header"]}>
//       {/* top-header */}
//       <Layout.Header className={styles["main-header"]}>
//         <div className={styles["left-header"]}>
//           <span onClick={() => history.push('/')}>
//             <img src={logo} alt="logo" className={styles["App-logo"]} />
//             <Typography.Title level={3} className={styles.title}>
//               Paws Up
//             </Typography.Title>
//           </span>
//           <Input.Search
//             placeholder={"请输入旅游目的地、主题、或关键字"}
//             className={styles["search-input"]}
//           />
//         </div>
//         <div className={styles['right-header']}>
//           <Dropdown.Button
//             style={{ marginLeft: 15 }}
//             overlay={
//               <Menu>
//                 <Menu.Item>中文</Menu.Item>
//                 <Menu.Item>English</Menu.Item>
//               </Menu>
//             }
//             icon={<GlobalOutlined />}
//           >
//             语言
//           </Dropdown.Button>
//           {/* <Typography.Text>Make lives happier</Typography.Text> */}
//           <Button.Group className={styles["button-group"]}>
//             <Button onClick={() => history.push('register')} className={styles["button-register"]}>Register</Button>
//             <Button onClick={() => history.push('signin')} className={styles["button-login"]} >Login</Button>
//           </Button.Group>
//         </div>
//       </Layout.Header>
//       {/* <Menu mode={"horizontal"} className={styles["main-menu"]}>
//           <Menu.Item key={1}>旅游首页</Menu.Item>
//           <Menu.Item key={2}>周末游</Menu.Item>
//           <Menu.Item key={3}>跟团游</Menu.Item>
//           <Menu.Item key="4"> 自由行 </Menu.Item>
//           <Menu.Item key="5"> 私家团 </Menu.Item>
//           <Menu.Item key="6"> 邮轮 </Menu.Item>
//           <Menu.Item key="7"> 酒店+景点 </Menu.Item>
//           <Menu.Item key="8"> 当地玩乐 </Menu.Item>
//           <Menu.Item key="9"> 主题游 </Menu.Item>
//           <Menu.Item key="10"> 定制游 </Menu.Item>
//           <Menu.Item key="11"> 游学 </Menu.Item>
//           <Menu.Item key="12"> 签证 </Menu.Item>
//           <Menu.Item key="13"> 企业游 </Menu.Item>
//           <Menu.Item key="14"> 高端游 </Menu.Item>
//           <Menu.Item key="15"> 爱玩户外 </Menu.Item>
//           <Menu.Item key="16"> 保险 </Menu.Item>
//         </Menu> */}
//     </div>
//   );
// }
