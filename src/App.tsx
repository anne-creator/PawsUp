import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from './pages';


function App() {
  return (
    <div className={styles.App}>
      {/* NOTE:  包裹所有的页面*/}
      <BrowserRouter>
        <Route path='/' component={HomePage} />

      </BrowserRouter>
    </div>
  );
}
export default App;
