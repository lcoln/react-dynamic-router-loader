/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-21 18:51:41
 */
import React, { FC } from "react";
import styles from './index.less';
import { Link, withRouter } from 'react-router-dom'
console.log({styles});

const menu = [{
  title: 'menu1',
  childs: [{
    title: 'page1',
    path: 'page1',
    // link: 'page1'
  }, {
    title: 'page2',
    path: 'page2'
  }]
}, {
  title: 'menu2',
  childs: [{
    title: 'page3',
    path: 'page3',
    childs: [{
      title: 'page3-1',
      path: 'page3-1',
    }]
  }]
}, {
  title: 'menu3',
  childs: [{
    title: 'filter',
    path: 'filter',
  }]
}, {
  title: 'menu4',
  childs: [{
    title: 'redirects',
    path: 'redirects',
  }]
}]
const Index: FC = (props: any) => {
  // console.log({props});
  return <section className="page-layout-container">
    <aside className="mod-aside">
      <tree-wc data={JSON.stringify(menu)} color="#b7b7b7"></tree-wc>
    </aside>
    <div className="mod-container">
      <h4>最外层覆盖所有子级页面的公用布局layout /pages/layout.tsx</h4>
      {props.children}
    </div>
  </section>
}
export default withRouter(Index);