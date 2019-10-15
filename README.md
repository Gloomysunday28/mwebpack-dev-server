# mwebpack-dev-server
## 基于mwebpack构建的node服务器

## 安装
```javascript
  npm i @kvinc/acorn-webpack-dev-server -g
```

## 使用
```javascript
  mwebpack-dev-server --config xxx
```

## mwebpack.config.js
```javascript
  module.exports = {
    entry: xxx,
    output: {
      path: path.resolve(__dirname, './dist/js'),
      filename: '[name].[hash].js'
    },
    resolveLoaders: './webpack/loaders'
  }
```

## 插件
如果你想直接打包出html, 那么在根目录下创建一个模板index.html, 并且仿照[MwebpackHTMlPlugin](https://github.com/Gloomysunday28/mwebpack-dev-server/blob/master/plugins/HTMLWebpackPlugin.js), 最后在mwebpack.config.js里使用

```javascript
  ...,
  plugins: [
    new MwebpackHTMlPlugin()
  ]
  ...
```