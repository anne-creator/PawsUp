import React from 'react';
import styles from "./App.module.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage, AdoptPage, PetPage } from './pages';
import { Header, Footer } from './components';


function App() {
  return (
    <div className={styles.App}>
      {/* NOTE:  包裹所有的页面*/}
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={HomePage} />
        {/* NOTE：路由发生了变化，两个页面会堆叠显示。所以需要短路处理，给path之前加入 exact  */}
        <Route exact path='/signin' component={SignInPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/detail/:touristRoutedId' component={DetailPage} />
        <Route exact path='/adopt' component={AdoptPage} />
        <Route exact path='/adopt/pet' component={PetPage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

// 使用Route，传递组件时候，react router 会默认传递三个数据history，locaiton，match.
// 
