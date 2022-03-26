/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:07:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-20 19:50:32
 */
import React, { FC } from "react";
const Index: FC = (props: any) => {
  return <div className="page-layout">
    <p>我是最外层的主体page /pages/index.tsx</p>
    {props.children}
  </div>
}

export default Index;