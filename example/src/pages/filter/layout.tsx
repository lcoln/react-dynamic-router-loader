/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-20 17:58:38
 */
import React, { FC } from "react";
const Index: FC = (props: any) => {
  return <div className="page-layout">
    <h4>示例页面filter</h4>
    <p>示例页面filter里所有模块共用的一些组件 /pages/filter/layout.tsx</p>
    <p>但我被router的filter函数拦截掉了</p>
    {props.children}
  </div>
}

export default Index;