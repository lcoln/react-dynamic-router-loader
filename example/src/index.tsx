import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter, HashRouter } from 'react-router-dom';
import DynamicRouter from './router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// // 将App组件标签渲染到index页面的div上
ReactDOM.render(
  <Router history={history}>
    <BrowserRouter>
      <DynamicRouter />
    </BrowserRouter>
  </Router>,
  document.getElementById('root'),
);