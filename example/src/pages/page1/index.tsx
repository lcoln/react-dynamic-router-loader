/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-20 23:01:35
 */
import React, { FC } from "react";
import Page1Comp from './components/page1-comp';

const Index: FC = (props: any) => {
  return <div className="page-layout color-index">
    <p>我是示例页面page1 /pages/page1/index.tsx</p>
    <p>page的config, 挂载在props.pageConfig中：{JSON.stringify(props.pageConfig)} /pages/page1/_config.ts</p>
    <Page1Comp />
    {props.children}
  </div>
}

export default Index;