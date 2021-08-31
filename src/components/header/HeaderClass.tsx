import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg';
import { GlobalOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import store from '../../redux/store'
import { LanuageState } from '../../redux/language/languageReducer'
import SubMenu from 'antd/lib/menu/SubMenu';

interface state extends LanuageState { }

class HeaderComponent extends React.Component<RouteComponentProps, state> {
  constructor(props: RouteComponentProps) {
    super(props);
    const { language, languageList } = store.getState();
    this.state = {
      language: language,
      languageList: languageList,
    }
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange = () => {
    const storeState = store.getState();
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList,
    })
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
          <Menu mode='horizontal' className={styles["header__middle"]}>
            {/* FIXME: Menu & SubMenu增加路由跳转 */}
            <SubMenu key="Adopt" title="Adopt" className={styles['item']}>
              <Menu.Item key="Cat" className={styles['nav']} onClick={() => history.push("adopt")}>
                Cat
              </Menu.Item>
              <Menu.Item key="Dog" className={styles['item']}>
                Dog
              </Menu.Item >
            </SubMenu>
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
                  {this.state.languageList.map((l) => {
                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                  })}
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.state.language === "zh" ? "中文" : "English"}
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

export const Header = withRouter(HeaderComponent)