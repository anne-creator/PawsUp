import React from 'react';
import logo from './assets/logo.svg';
import styles from "./App.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className={styles.App}>
      <Layout.Footer>
        <Typography.Title level={3} style={{textAlign: 'center'}}>
          版权所有 @ React 旅游网
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
}

export default App;
