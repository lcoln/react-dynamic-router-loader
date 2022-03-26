/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-20 17:58:24
 */
import React, { FC } from "react";
const Index: FC = (props: any) => {
  return <div className="page-layout">
    <p>我是示例页面filter /pages/filter/index.tsx</p>
    {props.children}
  </div>
}

export default Index;