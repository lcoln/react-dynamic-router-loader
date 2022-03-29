# @linteng/dynamic-router

一个自动生成约定式路由的webpack预处理器和脚本

## 开始

首先安装 `@linteng/dynamic-router`:

```console
npm install @linteng/@linteng/dynamic-router --save-dev
```

or

```console
yarn add -D @linteng/@linteng/dynamic-router
```

or

```console
pnpm add -D @linteng/@linteng/dynamic-router
```

然后在 `webpack` 配置中增加loader

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.json$/,
        type: 'javascript/auto',
        resourceQuery: /dynamicRouter/,
        use: {
          loader: '@linteng/dynamic-router',
          options: {
            dir: path.resolve(process.cwd(), 'src', 'pages'),
          },
        },
      },
    ],
  },
};
```

给项目工程创建一份router json的配置

**router.json**
- ignore: 忽略该路由的参数生成
- replace: 该路由替换为自定义路由
```json
{
  "ignore": [
    "/welcome"
  ],
  "replace": {
    "/page1": "/page1/:id?",
    "/page2": "/page2/edit/:id?"
  }
}
```
根据router.json 再引入routerHelper来生成最终的react router

**router.tsx**
```js
import { pageRouter } from './router.json?dynamicRouter';
import { routerHelper } from '@linteng/dynamic-router;
import { Router, BrowserRouter, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const config = {
  
  /**
   * router过滤函数
   * @param {*} props   // 挂载在router上的props
   * @param {*} routerPath    // router path
   * @return {*} boolean  // 是否拦截掉路由
   */
  filter(props: any, routerPath: any) {
    if (routerPath === '/filter') {
      return false; // 渲染为error页面
    }
    return true;
  },
  error: {
    404: '/error/404'   // 配置404页面的具体指向路径
  }
};
const DynamicRouter = routerHelper(pageRouter, config);
export default function router() {
  return (
    <Router history={history}>
      <BrowserRouter>
        {DynamicRouter}
      </BrowserRouter>
    </Router>
  );
}
```

<br/>

路由自动重定向
**__config.ts_**
```js
// 说明: 如果遇到路由redirects，则重定向到/error/redirect-page
// 应用场景：可用来作路由鉴权，例如在home页判断是否有登录态来决定是否跳转login
export default {
  redirects: [{ from: "/redirects", to: "/error/redirect-page" }]
};
```
<br/>

页面props参数传递
**__config.ts_**
```js
// 说明: 可以同级目录的index.tsx与layout.tsx的props.pageConfig中获取到传递的参数
// 应用场景：例如需要往页面主体或布局注入一些静态配置时可用
export default {
  someConfig: [{ detail: "blabla" }]
};
```
<br/>


## 目录概述
``` bash
src
├── index.tsx
├── pages
│   ├── components    
│   ├── error
│   │   ├── 404
│   │   │   ├── components
│   │   │   ├── index.tsx
│   │   │   └── layout.tsx
│   ├── index.less
│   ├── index.tsx         // 路由主体页面
│   ├── layout.tsx        // 路由公共布局页面
│   ├── page1
│   │   ├── _config.ts    // 路由props参数设置与redirect设置
│   │   ├── components    // components目录为组件目录，里面的内容不会被生成路由对象
│   │   │   └── page1-comp.tsx
│   │   ├── index.tsx     
│   │   └── layout.tsx    
│   ├── page2
│   │   ├── components
│   │   ├── index.tsx
│   │   ├── layout.tsx
│   │   └── page2-1       // 子级路由
│   │       ├── components
│   │       ├── index.tsx
│   │       └── layout.tsx
├── router
│   ├── config.json       // 路由配置
│   └── index.tsx         // 路由生成入口
```


运行example工程

```console
cd example
pnpm i
pnpm dev
```