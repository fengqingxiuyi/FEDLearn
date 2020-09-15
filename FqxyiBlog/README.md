# fqxyi blog

## 技术文档

1. [TypeScript 教程](https://ts.xcatliu.com/)
2. [Taro 框架文档](https://nervjs.github.io/taro/docs/spec-for-taro.html)
3. [SCSS 参考手册](http://sass.bootcss.com/docs/sass-reference/)
4. [React 文档](https://react.docschina.org/docs/hello-world.html)
5. [小程序 文档](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html)

## 安装

1. 安装 LTS 版的 node https://nodejs.org/zh-cn/

2. 设置 npm 加速 `npm config set registry https://registry.npm.taobao.org`

3. 安装 taro-cli
    - `sudo chown -R $(whoami) ~/.npm` (macOS)
    - `sudo chown -R $(whoami) /usr/local/lib/node_modules` (macOS)
    - `npm install -g @tarojs/cli`
    
4. clone 项目

5. 进入项目根目录 `npm install`

6. 启动开发环境 `npm run dev:weapp`

7. 在[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)里导入项目

## 开发工具

编辑器推荐用 vscode，用到的插件如下：

-   ESLint
-   Babel JavaScript
-   Beautify css/sass/scss/less
-   EditorConfig
-   Debugger for Chrome

## 项目结构

<pre>
├── config                
│   ├── dev.js          开发配置
│   ├── index.js        基础配置
│   └── prod.js         发布配置
├── src
│   ├── assets          静态资源目录
│   ├── common          公共库(业务耦和)
│   │   ├── index.ts
│   │   └── request.ts
│   ├── components      业务公共组件
│   │   └── loading     
│   ├── config          工程基本配置
│   │   └── index.ts
│   ├── pages           业务页面
│   │   └── home   
│   ├── store           数据状态管理
│   │   └── counter.ts
│   ├── app.scss        全局样式
│   ├── app.tsx         根组件(实例)
│   └── index.html      H5入口页面
├── package.json        项目配置
├── project.config.json 小程序配置
└── tsconfig.json       TypeScript编译配置
</pre>

## 性能优化

1. [小程序性能 文档](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/)
2. 借助`微信开发者工具`和`Chrome`中的`Audits`和`Trace`工具
3. 开发者工具查看网络请求数和延迟

# 未解决问题

```
👽 Taro v3.0.10


⠋ Compiling...(node:2131) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'resource' of undefined
    at Promise (/Users/fqxyi/Desktop/workspace/fed/FEDLearn/FqxyiBlog/node_modules/@tarojs/plugin-sass/index.js:9:16)
    at new Promise (<anonymous>)
    at compileSass (/Users/fqxyi/Desktop/workspace/fed/FEDLearn/FqxyiBlog/node_modules/@tarojs/plugin-sass/index.js:5:10)
    at Kernel.initPlugin (/usr/local/lib/node_modules/@tarojs/cli/node_modules/@tarojs/service/dist/Kernel.js:118:16)
    at Kernel.resolvePlugins (/usr/local/lib/node_modules/@tarojs/cli/node_modules/@tarojs/service/dist/Kernel.js:93:18)
    at Kernel.initPresetsAndPlugins (/usr/local/lib/node_modules/@tarojs/cli/node_modules/@tarojs/service/dist/Kernel.js:81:14)
    at Kernel.<anonymous> (/usr/local/lib/node_modules/@tarojs/cli/node_modules/@tarojs/service/dist/Kernel.js:40:18)
    at Generator.next (<anonymous>)
    at /usr/local/lib/node_modules/@tarojs/cli/node_modules/@tarojs/service/dist/Kernel.js:8:71
    at new Promise (<anonymous>)
(node:2131) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:2131) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
