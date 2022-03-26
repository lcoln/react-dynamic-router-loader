/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-20 18:33:00
 */
import React, { FC } from "react";
const Index: FC = (props: any) => {
  return <div className="page-layout color-layout">
    <h4>示例页面page2</h4>
    <p>示例页面page2里所有模块共用的一些组件 /pages/page2/layout.tsx</p>
    {props.children}
  </div>
}

export default Index;