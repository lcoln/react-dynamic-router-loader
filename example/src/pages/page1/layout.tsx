/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-20 23:01:38
 */
import React, { FC } from "react";
const Index: FC = (props: any) => {
  return <div className="page-layout color-layout">
    <h4>示例页面page1</h4>
    <p>示例页面page1里所有模块共用的一些组件 /pages/page1/layout.tsx</p>
    <p>page的config, 挂载在props.pageConfig中：{JSON.stringify(props.pageConfig)} /pages/page1/_config.ts</p>
    {props.children}
  </div>
}

export default Index;