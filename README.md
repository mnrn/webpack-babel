# Webpack + Babel のテンプレート

webpackとbabelを組み合わせた場合のテンプレートになります。

## 依存関係

package.jsonにある通りです。

```terminal
npm init -y
npm install webpack webpack-cli webpack-merge --save-dev
npm install babel-loader @babel/core @babel/cli @babel/preset-env --save-dev
```

## ディレクトリ構成

```txt
develop-root/
  ├ src/
  │   ├ component/
  │   └ index.js 
  ├ dist/
  │   ├ js/
  │   └ index.html
  ├ babel.config.js
  ├ webpack.common.js
  ├ webpack.dev.js
  └ webpack.prod.js
```

## 使い方

```terminal
# 開発用ビルド
npm run serve

# 本番用ビルド
npm run build
```
