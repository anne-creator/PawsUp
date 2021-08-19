import React from 'react';
import logo from './assets/logo.svg';
import styles from "./App.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import {Header, Footer} from './components'
function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
