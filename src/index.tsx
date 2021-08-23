import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'antd/dist/antd.css'
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
