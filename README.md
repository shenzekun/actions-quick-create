# actions-quick-create README
快速生成 action 模板, 写这个的插件的原因是每次写 action 常量就需要写很多一样后面加SADADADA_REQUEST，_REQUEST_SUCCESS,_REQUEST_FAIL的变量，考虑想提高一些效率，就写了这个插件。

## Features

随便选中文本比如sadadada，command + shift + p 输入 actions-quick-create 会出现：

```javascript
export const SADADADA_REQUEST = 'SADADADA_REQUEST';
export const SADADADA_REQUEST_SUCCESS = 'SADADADA_REQUEST_SUCCESS';
export const SADADADA_REQUEST_FAIL = 'SADADADA_REQUEST_FAIL';
```

## Install

1. 下载项目
2. 打开 vscode，打开扩展模块，点击右上角的三个点，点击从 vsix 安装，打开下载项目里的 vsix 文件即可安装。
