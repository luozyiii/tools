# tools

rollup 构建的常用工具函数库

### 开始

- 安装依赖

```javascript
yarn add rollup -D

yarn add rollup-plugin-node-resolve -D
yarn add rollup-plugin-commonjs -D
yarn add rollup-plugin-json -D

yarn add @babel/node -D
yarn add @babel/core -D
yarn add @babel/preset-env

yarn add rollup-plugin-babel -D

yarn add rollup-plugin-terser -D
```

### 项目中使用了 async/await， 报错 regeneratorRuntime is not defined

- 报错原因
  这个报错表面上是由于 async function 语法被 babel 转译之后的代码使用了 regeneratorRuntime 这个变量，但是这个变量在最终的代码里未定义造成的报错。

- 方案
  正确的做法是使用按需加载，将 useBuiltIns 改为 "usage"，babel 就可以按需加载 polyfill，并且不需要手动引入 @babel/polyfill

```javascript

// .babelrc 配置更新  useBuiltIns 按需引入 polyfill
"presets": [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "usage",
      "debug": true
    }
  ]
]
```
