# FEDLearn

前端知识学习

# 目录结构

```
FEDLearn
  |--ElectronVueDemo //Electron使用
  |--WebGLLearn //WebGL学习
  |--WebpackFirst //Webpack入门
  |--.gitignore //Git忽略配置
  |--README.md //工程文档总结
```

# FAQ

## .gitkeep

使git忽略一个文件夹下的所有文件，并保留该文件夹

## gyp: No Xcode or CLT version detected!

1. 执行命令`sudo rm -rf $(xcode-select -print-path)`，用于卸载xcode-select
2. 执行命令`xcode-select --install`，用于安装xcode-select

## npm audit fix

<https://docs.npmjs.com/cli/audit>

检测项目依赖中的漏洞并自动安装需要更新的有漏洞的依赖，而不必再自己进行跟踪和修复。
