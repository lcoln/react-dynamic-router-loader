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

然后再 `webpack` 配置中增加loader. For example:

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

给项目工程创建一份router json的配置. For example:

**router.json**
```json
{
  // ignore create react router object
  "ignore": [
    "/welcome"
  ],
  // replace the url from [key] to [value]
  "replace": {
    "/application/resource": "/application/resource/:id?",
    "/application/app-list/edit": "/application/app-list/edit/:id?"
  }
}
```
根据router json 再引入router对象生成的依赖来生成最终的react router. For example:

**router.tsx**
```js
import { pageRouter } from './router.json?dynamicRouter';
import { routerHelper } from '@linteng/dynamic-router/react-router-helper;
import { Router, BrowserRouter, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const config = {
  /**
   * router filter 
   * @param {*} props   // props mounted on the router
   * @param {*} routerPath    // router path
   * @return {*} boolean  // whether to interrupt router render
   */
  filter(props: any, routerPath: any) {
    if (routerPath === '/filter') {
      return false;
    }
    return true;  // render error page
  },
  error: {
    404: '/error/404'   // which page render 404
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

路由自动重定向. For example:

**_config.ts_**
```js
// 🌰说明: 如果遇到路由redirects，则重定向到/error/redirect-page
// 应用场景：可用来作路由鉴权，例如在home页判断是否有登录态来决定是否跳转login
export default {
  redirects: [{ from: "/redirects", to: "/error/redirect-page" }]
};
```

路由参数传递. For example:
**_config.ts_**
```js
// 🌰说明: 可以同级目录的index.tsx与layout.tsx的props.pageConfig中获取到传递的参数
// 应用场景：例如需要往页面主体或布局注入一些静态配置时可用
export default {
  someConfig: [{ detail: "blabla" }]
};
```

参考example，大致的page目录结构:
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
│   ├── index.tsx
│   ├── layout.tsx
│   ├── page1
│   │   ├── _config.ts
│   │   ├── components
│   │   │   └── page1-comp.tsx
│   │   ├── index.tsx
│   │   └── layout.tsx
│   ├── page2
│   │   ├── components
│   │   ├── index.tsx
│   │   ├── layout.tsx
│   │   └── page2-1
│   │       ├── components
│   │       ├── index.tsx
│   │       └── layout.tsx
├── router
│   ├── config.json
│   └── index.tsx