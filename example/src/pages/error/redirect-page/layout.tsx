/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-20 20:09:43
 */
import React, { FC } from "react";
const Index: FC = (props: any) => {
  return <div className="page-layout color-layout">
    <h4>示例页面redirect-page</h4>
    <p>示例页面redirect-page里所有模块共用的一些组件 /pages/redirect-page/layout.tsx</p>
    {props.children}
  </div>
}

export default Index;