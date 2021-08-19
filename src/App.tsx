import React from 'react';
import logo from './assets/logo.svg';
import styles from "./App.module.css";
import {Header, Footer,Carousel, SideMenu} from './components'
import {Row, Col} from "antd";
function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles['page-content']}>
        <Row style={{marginTop: 20}}>
          {/* NOTE：多重菜单 */}
          <Col span={6} style={{background:"red"}}><SideMenu /></Col>
          <Col span={18} style={{backgroundColor:'blue'}}><Carousel/></Col>
        </Row>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
