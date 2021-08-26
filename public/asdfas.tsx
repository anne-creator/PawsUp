// import React from 'react';
// import styles from './Header.module.css'
// import logo from '../../assets/logo.svg';
// import { GlobalOutlined } from "@ant-design/icons";
// import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
// import { useHistory } from 'react-router-dom'
// import store from '../../redux/store'

// export const Header: React.FC = () => {

//   const history = useHistory()
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