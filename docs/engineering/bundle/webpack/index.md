---
group:
  title: 打包
  path: /engineering/bundle/
---

# [webpack](https://gitmind.cn/app/docs/m1foeg1o)

## 定义

前端项目由图片 + js/ts + 样式文件等一系列**资源**构成，需要通过不同的标签例如 img, script, link 标签等进行手动管理，出现了很多问题，是一大痛点.....

![img.png](./imgs/img.png)

后来出现了 Gulp, rollup, browserify, webpack, vite 等工程化工具，也正是这些工具的出现，才有了【前端工程化】的概念。

什么是 webpack? ![img_1.png](./imgs/img_1.png)

## 使用方法

只需要三步就可以把资源打包成右下角的 bundle；多个资源被合并成一个资源了。 ![img_2.png](./imgs/img_2.png)

### 打包核心流程

![img_3.png](./imgs/img_3.png)

主要就是模块化 + 一致性： ![img_4.png](./imgs/img_4.png)

webpack 的使用主要就复杂在配置这一步，可以很复杂，但大致分为两类：

- 流程类：作用于流程中某个 or 若干个环节，直接影响打包效果的配置项；
- 工具类：主流程之外，提供更多工程化能力的配置项；

常用配置： ![img_5.png](./imgs/img_5.png)

### 流程类

#### 处理 css 文件

通过 Module 处理 css 文件：本来 css 不在 js 体系中，不添加 Loader 是无法解析 css 文件的； ![img_6.png](./imgs/img_6.png)

参考资料：

- [css loader](https://github.com/webpack-contrib/css-loader)
- [Webpack 原理系列七：如何编写 loader](https://mp.weixin.qq.com/s/TPWcB4MfVrTgFtVxsShNFA)
- [style loader](https://webpack.js.org/loaders/style-loader/)

#### 处理 js 文件 -- 接入 babel

babel 是代码转译工具，es5 -> es6 的跨度很大，浏览器不兼容 es6 的新特性，babel 将高版本的代码转译成低版本的代码； ![img_7.png](./imgs/img_7.png)

参考资料：

- [babel-loader](https://webpack.js.org/loaders/babel-loader/)
- [babel 官网](https://babeljs.io/)
- [@babel/preset-env](https://babeljs.io/docs/babel-preset-env)
- [@babel/preset-react](https://babeljs.io/docs/babel-preset-react)
- [@babel/preset-typescript](https://babeljs.io/docs/babel-preset-typescript)

#### 处理 html - plugin

可以直接把 js 转成 html，不需要手动写一个引入该 js 的 html 文件； ![img_8.png](./imgs/img_8.png)

参考资料：

- [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

### 工具类

#### [HMR](https://mp.weixin.qq.com/s/cbYMpuc4hnV9NA4VfqJLvg)

Hot Module Replacement，模块热更新；代码上的改动，浏览器会直接渲染新的； ![img_9.png](./imgs/img_9.png)

#### Tree Shaking

树摇，删除 dead code; 例如删除引入了但是没用到的模块、定义了但是没使用的变量等； ![img_10.png](./imgs/img_10.png)

还有很多工具：

- 缓存
- sourceMap
- 性能监控
- 日志
- 代码压缩
- 分包
- ......

## 理解 loader

- 链式调用为什么 less-loader, css-loader, style-loader 要同时用？ ![img_11.png](./imgs/img_11.png)

（ndb，一个好用的 bebug 工具）

![img_12.png](./imgs/img_12.png)

参考资料：[webpack 原理系列，如何编写 Loader](https://mp.weixin.qq.com/s/TPWcB4MfVrTgFtVxsShNFA)

### 如何编写 loader

![img_13.png](./imgs/img_13.png)

### 常见 loader

![img_14.png](./imgs/img_14.png)

## 理解 plugin

为什么要有插件？提升整个应用/工具的扩展性； ![img_15.png](./imgs/img_15.png) ![img_16.png](./imgs/img_16.png)

**插件精髓：对扩展开放，对修改封闭；**

![img_17.png](./imgs/img_17.png) ![img_18.png](./imgs/img_18.png)

用起来很简单，写起来...... ![img_19.png](./imgs/img_19.png) ![img_20.png](./imgs/img_20.png) ![img_21.png](./imgs/img_21.png)

- loader 与 plugin 有什么区别和共同点？
- 钩子有什么作用？如何监听钩子子函数？

参考文献：

- [webpack 插件架构深度讲解](https://mp.weixin.qq.com/s/tXkGx6Ckt9ucT2o8tNM-8w)
- [[万字总结] 一文吃透 Webpack 核心原理](https://mp.weixin.qq.com/s/SbJNbSVzSPSKBe2YStn2Zw)

## 学习方法

![img_22.png](./imgs/img_22.png)

面试知识点: ![img_23.png](./imgs/img_23.png)

参考资料:

- [Awesome Webpack4+ 优秀学习资源](https://github.com/Tecvan-fe/awesome-webpack-4plus)
- [深入浅出 Webpack](https://webpack.wuhaolin.cn/)
- [Survivejs - Webpack Book](https://survivejs.com/webpack/preface/)
