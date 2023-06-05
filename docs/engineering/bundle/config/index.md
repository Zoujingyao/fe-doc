---
group:
  title: 打包
  path: /engineering/bundle/
---

# package.json

内容来源于：[package.json 配置完全解读](https://juejin.cn/post/7161392772665540644#heading-1)

## 描述配置

- version

项目的版本号，开源项目的版本号通常遵循 [semver](semver.org/lang/zh-CN/) 语义化规范，具体规则如下图所示：

![img.png](./imgs/img.png)

- 1 代表主版本号 Major，通常在涉及重大功能更新，产生了破坏性变更时会更新此版本号
- 2 代表次版本号 Minor，在引入了新功能，但未产生破坏性变更，依然向下兼容时会更新此版本号
- 3 代表修订号 Patch，在修复了一些问题，也未产生破坏性变更时会更新此版本号

除了 X.Y.Z 这样的标准版本号，还有 Pre-release 和 Metadata 来描述项目的测试版本，关于 semver 规范更多的内容，可以参考[【一库】semver：语义版本号标准 + npm 的版本控制器 🧲 ](https://juejin.cn/post/7122240572491825160#heading-2)。

name + version 能共同构成一个完全唯一的项目标识符，所以它两是最重要的两个字段。

## 文件配置

- files

在进行 npm 发布时，可以通过 files 指定需要跟随一起发布的内容来控制 npm 包的大小。默认会包括 package.json，license，README 和 main 字段里指定的文件。忽略 node_modules，lockfile 等文件。在此基础上，我们可以指定更多需要一起发布的内容。可以是单独的文件，整个文件夹，或者使用通配符匹配到的文件。

- type

```json
"util": "module"
```

在 node 支持 ES 模块后，要求 ES 模块采用 .mjs 后缀文件名。如果不想修改文件后缀，就可以在 package.json 文件中，指定 type 字段为 module。

- main

指定的是项目的入口文件，在 browser 和 Node 环境中都可以使用

项目发布时，默认会包括 package.json，license，README 和 main 字段里指定的文件。如果不设置 main 字段，那么入口文件就是根目录下的 index.js。

- browser

指定 web 端的项目入口。

- module

指定 ES 模块的入口文件。

当一个项目同时定义了 main，browser 和 module，像 webpack，rollup 等构建工具会感知这些字段，并会根据环境以及不同的模块规范来进行不同的入口文件查找。

```json
"main": "./index.js",
"browser": "./browser/index.js",
"module": "./index.mjs"
```

比如 webpack 构建项目时默认的 target 为 'web'，也就是 Web 构建。它的 resolve.mainFeilds 字段默认为 ['browser', 'module', 'main']。

- exports

配置不同环境对应的模块入口文件，并且当它存在时，它的优先级最高。

```json
"exports": {
  "require": "./index.js",
  "import": "./index.mjs"
 }
}
```

这样的配置在使用 import 'xxx' 和 require('xxx') 时会从不同的入口引入文件，exports 也支持使用 browser 和 node 字段定义 browser 和 Node 环境中的入口。

- workspaces

项目的工作区配置，用于在本地的根目录下管理多个子项目。该字段接收一个数组，数组里可以是文件夹名称或者通配符。通常子项目都会平铺管理在 packages 目录下：

```json
"workspaces": [
  "packages/*"
]
```

## 脚本配置

- scripts

项目的一些内置脚本命令，这些命令可以通过 npm run 执行。

- config

设置 scripts 里的脚本在运行时的参数。

## 依赖配置

- dependencies

项目生产环境下需要用到的依赖。

- devDependencies

项目开发环境需要用到而运行时不需要的依赖，用于辅助开发，通常包括项目工程化工具比如 webpack，vite，eslint 等。

- peerDependencies

同伴依赖，一种特殊的依赖，不会被自动安装，通常用于表示与另一个包的依赖与兼容性关系来警示使用者。

比如 React 组件库 Ant Design，它的 package.json 里 peerDependencies 为：

```json
"peerDependencies": {
  "react": ">=16.9.0",
  "react-dom": ">=16.9.0"
}
```

表示如果你使用 Ant Design，那么你的项目也应该安装 react 和 react-dom，并且版本需要大于等于 16.9.0。

- optionalDependencies

表示依赖是可选的，它不会阻塞主功能的使用，安装或者引入失败也无妨。比如我们使用 colors 这个包来对 console.log 打印的信息进行着色来增强和区分提示，但它并不是必需的，所以可以将其加入到 optionalDependencies，并且在运行时处理引入失败的逻辑。

- peerDependenciesMeta

同伴依赖也可以使用 peerDependenciesMeta 将其指定为可选的。

```json
"peerDependencies": {
  "colors": "^1.4.0"
},
"peerDependenciesMeta": {
  "colors": {
    "optional": true
   }
 }
```

- bundleDependencies

打包依赖。它的值是一个数组，在发布包时，bundleDependencies 里面的依赖都会被一起打包。

需要注意的是，这个字段数组中的值必须是在 dependencies，devDependencies 两个里面声明过的依赖才行。

普通依赖通常从 npm registry 安装，但当你想用一个不在 npm registry 里的包，或者一个被修改过的第三方包时，打包依赖会比普通依赖更好用。

- overrides

重写项目依赖的依赖，及其依赖树下某个依赖的版本号，进行包的替换.

overrides 支持任意深度的嵌套。如果在 yarn 里也想复写依赖版本号，需要使用 resolution 字段，而在 pnpm 里复写版本号需要使用 pnpm.overrides 字段。

## 发布配置

- private

不希望发布到公共 npm 仓库上，可以将 private 设为 true。

- publishConfig

比如在安装依赖时指定了 registry 为 taobao 镜像源，但发布时希望在公网发布，就可以指定 publishConfig.registry。

## 系统配置

和项目关联的系统配置，比如 node 版本或操作系统兼容性之类。这些要求只会起到提示警告的作用，即使用户的环境不符合要求，也不影响安装依赖包。

- engines

一些项目由于兼容性问题会对 node 或者包管理器有特定的版本号要求，比如：

```json
"engines": {
  "node": ">=14 <16",
  "pnpm": ">7"
}
```

要求 node 版本大于等于 14 且小于 16，同时 pnpm 版本号需要大于 7。

- os

指定项目对操作系统的兼容性要求。

```json
"os": ["darwin", "linux"]
```

- cpu

指定项目只能在特定的 CPU 体系上运行。

```json
"cpu": ["x64", "ia32"]
```

## 第三方配置

一些第三方库或应用在进行某些内部处理时会依赖这些字段，使用它们时需要安装对应的第三方库。

- types/typings

指定 TypeScript 的类型定义的入口文件。

```json
"types": "./index.d.ts",
```

- unpkg

让 npm 上所有的文件都开启 CDN 服务。

- lint-staged

lint-staged 是用于对 git 的暂存区的文件进行操作的工具，比如可以在代码提交前执行 lint 校验，类型检查，图片优化等操作。

```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "git add -A"
  ]
}
```

lint-staged 通常配合 husky 这样的 git-hooks 工具一起使用。git-hooks 用来定义一个钩子，这些钩子方法会在 git 工作流程中比如 pre-commit，commit-msg 时触发，可以把 lint-staged 放到这些钩子方法中。
