import React from 'react';
import { routerHelper } from '@linteng/dynamic-router';
import { withRouter } from 'react-router-dom';
import { pageRouter } from './config.json?dynamicRouter';
import { installWC } from '@linteng/airui';

const config = {

  /**
   * router过滤函数
   * @param {*} props   // 挂载在router上的props
   * @param {*} routerPath    // router path
   * @return {*} boolean  // 是否拦截掉路由
   */
  filter(props: any, routerPath: any) {
    if (routerPath === '/filter') {
      return false;
    }
    return true;
  },
  error: {
    404: '/error/404'
  }
};
const DynamicRouter = routerHelper(pageRouter, config);

function router(props) {
  installWC([{
    name: 'tree-wc',
    config: {
      mode: 'browser',   // hash
      history: props.history
    }
  }])
  return DynamicRouter
}

export default withRouter(router)