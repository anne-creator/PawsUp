import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from './pages';


function App() {
  return (
    <div className={styles.App}>
      {/* NOTE:  包裹所有的页面*/}
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
        {/* NOTE：路由发生了变化，两个页面会堆叠显示。所以需要短路处理，给path之前加入 exact  */}
        <Route exact path='/signin' render={() => <h1>登录页面</h1>} />
        <Route render={() => <h1>404: can't find page.</h1>} />
      </BrowserRouter>
    </div>
  );
}
export default App;
