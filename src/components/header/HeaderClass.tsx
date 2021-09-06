// class component
import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg';
import { GlobalOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import store, { RootState } from '../../redux/store'
import { LanuageState } from '../../redux/language/languageReducer'
import SubMenu from 'antd/lib/menu/SubMenu';
import { connect } from 'react-redux'
import { Dispatch } from "redux";
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/languageActions";

interface state extends LanuageState { }
// 数据流入
// mapStateToProps: 接受从store传递的state
// return 需要从state中取得的数据
// store 的数据类型（需要再store里定义自己的类型）
// withTranslation i18n的props类型：语言切换用的，暂时用不上。
const mapStateToProps = (state: RootState) => {
  return {
    language: state.language,
    languageList: state.languageList,
  }
}
// 数据流出：mapDispatchToProps: 

// 参数：store 中的 dispatch 函数
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = changeLanguageActionCreator(code);
      dispatch(action);
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code);
      dispatch(action);
    },
  }
}//路由props类型 & hooks 类型定义 & redux-store的类型
type PropsType = RouteComponentProps & WithTranslation & ReturnType<typeof mapStateToProps>;
class HeaderComponent extends React.Component<PropsType, state> {

  handleStoreChange = () => {
    const storeState = store.getState();
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList,
    })
  }

  render() {
    // NOTE: t is from withTranslation from i18n
    const { history, t } = this.props;
    return (
      <div className={styles["app-header"]}>
        {/* top-header */}
        <div className={styles.header} >
          <div className={styles["header__left"]}>
            <span onClick={() => history.push('/')} className={styles["header__logo"]}>
              <img src={logo} alt="logo" className={styles["header__logo__img"]} />
              <h1 className={styles["header__logo__title"]}>Paws Up</h1>
            </span>
            <h4 className={styles["header__how"]}>How it works</h4>
          </div>
          <Menu mode='horizontal' className={styles["header__middle"]}>
            {/* FIXME: Menu & SubMenu增加路由跳转 */}
            <Menu.Item key="Adopt" title="Adopt" className={styles['item']} onClick={() => history.push("/adopt")}>
              Adopt
              {/* <Menu.Item key="Cat" className={styles['nav']}   >
                Cat
              </Menu.Item>
              <Menu.Item key="Dog" className={styles['item']}>
                Dog
              </Menu.Item > */}
            </Menu.Item>
            <SubMenu key="Donate" title="Donate" className={styles['nav']}>
              <Menu.Item key="Food" className={styles['item']}>
                Food
              </Menu.Item>
              <Menu.Item key="Toys" className={styles['item']}>
                Toys
              </Menu.Item >
              <Menu.Item key="Supplies" className={styles['item']}>
                Supplies
              </Menu.Item >
            </SubMenu>
            <SubMenu key="Health-Care" title="Health Care" className={styles['nav']}>
              <Menu.Item key="Check" className={styles['item']}>
                Regular Check
              </Menu.Item>
              <Menu.Item key="Neurtered" className={styles['item']}>
                Neurtered/Chips
              </Menu.Item >
              <Menu.Item key="Grooming" className={styles['item']}>
                Grooming
              </Menu.Item >
              <Menu.Item key="Medical" className={styles['item']}>
                Sick Pets Medical
              </Menu.Item >
            </SubMenu>
          </Menu>
          <div className={styles['header__right']}>

            {/* 非项目 */}
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.meunHandler}>
                  {this.props.languageList.map((l: any) => {
                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                  })}
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.props.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>

            <Button type='primary' className={styles['button__login']} onClick={() => history.push("register")}>Sign In</Button>
            <Button className={styles['button__signup']} onClick={() => history.push("signIn")}>Register</Button>
          </div>
        </div>
        {/* <Menu mode={"horizontal"} className={styles["main-menu"]}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key="4"> 自由行 </Menu.Item>
          <Menu.Item key="5"> 私家团 </Menu.Item>
          <Menu.Item key="6"> 邮轮 </Menu.Item>
          <Menu.Item key="7"> 酒店+景点 </Menu.Item>
          <Menu.Item key="8"> 当地玩乐 </Menu.Item>
          <Menu.Item key="9"> 主题游 </Menu.Item>
          <Menu.Item key="10"> 定制游 </Menu.Item>
          <Menu.Item key="11"> 游学 </Menu.Item>
          <Menu.Item key="12"> 签证 </Menu.Item>
          <Menu.Item key="13"> 企业游 </Menu.Item>
          <Menu.Item key="14"> 高端游 </Menu.Item>
          <Menu.Item key="15"> 爱玩户外 </Menu.Item>
          <Menu.Item key="16"> 保险 </Menu.Item>
        </Menu> */}
      </div >
    );
  }
  meunHandler = (e: any) => {
    const action = {
      type: 'change_language',
      payload: e.key,
    }
    store.dispatch(action);
  }

}
// NOTE: connect function: connet(mapStateToProps,mapDispatchToProps)(componentItself),连接对象
export const HeaderClass = withTranslation()(withRouter(HeaderComponent))//两个括号叠加在一起：高阶组件的高阶组件
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