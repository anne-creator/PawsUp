import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage } from './pages';


function App() {
  return (
    <div className={styles.App}>
      {/* NOTE:  包裹所有的页面*/}
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
        {/* NOTE：路由发生了变化，两个页面会堆叠显示。所以需要短路处理，给path之前加入 exact  */}
        <Route exact path='/signin' component={SignInPage} />
        <Route exact component={RegisterPage} />

      </BrowserRouter>
    </div>
  );
}
export default App;

// 使用Route，传递组件时候，react router 会默认传递三个数据history，locaiton，match.
// 
