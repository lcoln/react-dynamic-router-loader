# react-dynamic-router-loader

一个自动生成约定式路由的webpack预处理器和脚本

## 开始

首先安装 `react-dynamic-router-loader`:

```console
npm install @linteng/react-dynamic-router-loader --save-dev
```

or

```console
yarn add -D @linteng/react-dynamic-router-loader
```

or

```console
pnpm add -D @linteng/react-dynamic-router-loader
```

然后在 `webpack` 配置中增加loader
🌰

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
          loader: '@linteng/dynamic-router/react-loader',
          options: {
            pagesPath: path.resolve(process.cwd(), 'src', 'pages'),
          },
        },
      },
    ],
  },
};
```

给项目工程创建一份router json的配置
🌰

**router.json**
```json
// ignore create react router object
// replace the url from [key] to [value]
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
🌰

**router.tsx**
```js
import { pageRouter } from './router.json?dynamicRouter';
import { routerHelper } from '@linteng/dynamic-router/react-router-helper;
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
🌰
**_config.ts_**
```js
// 说明: 如果遇到路由redirects，则重定向到/error/redirect-page
// 应用场景：可用来作路由鉴权，例如在home页判断是否有登录态来决定是否跳转login
export default {
  redirects: [{ from: "/redirects", to: "/error/redirect-page" }]
};
```
<br/>

路由参数传递
🌰
**_config.ts_**
```js
// 说明: 可以同级目录的index.tsx与layout.tsx的props.pageConfig中获取到传递的参数
// 应用场景：例如需要往页面主体或布局注入一些静态配置时可用
export default {
  someConfig: [{ detail: "blabla" }]
};
```
<br/>

运行🌰example工程

```console
cd example
pnpm i
pnpm dev
```