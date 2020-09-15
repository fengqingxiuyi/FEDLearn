# ElectronVueDemo

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

# 使用

1. 进入ElectronVueDemo目录；
2. 执行命令：`ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/" npm install electron`，下载electron；
3. 执行命令：`npm i`，下载其他依赖；
4. 执行命令：`npm run dev`，启动项目。

# FAQ

## 解决下载Electron缓慢的问题

1. 进入项目目录；
2. 执行命令：`ELECTRON_MIRROR="https://cdn.npm.taobao.org/dist/electron/" npm install electron`

## Webpack ReferenceError:process is not defined

出现问题的node版本12.18.1，回退到node版本11.9.0正常
