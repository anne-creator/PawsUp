import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg';
import { GlobalOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import store from '../../redux/store'
import { LanuageState } from '../../redux/languageReducer'
// import { MainButton, SecondaryButton } from '../../components';


interface state extends LanuageState { }

class HeaderComponent extends React.Component<RouteComponentProps, state> {
  constructor(props: RouteComponentProps) {
    super(props);
    const { language, languageList } = store.getState();
    this.state = {
      language: language,
      languageList: languageList,
    }
  }

  render() {
    const { history } = this.props;
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
          <div className={styles['header__right']}>
            {/* <MainButton link='register' content='Log In' />
            <SecondaryButton link='signin' content="Sign Up" /> */}
            <div className={styles['button__log-in']}>Log In</div>
            <div className={styles['button__sign-up']}>Sign Up</div>
          </div>
        </div >
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
}

export const Header = withRouter(HeaderComponent)