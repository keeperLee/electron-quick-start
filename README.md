# 操作步骤

安装 nodemon，监听文件变化执行相关的命令

```
npm install nodemon --save-dev


  "scripts": {
    "start": "nodemon --watch main.js --exec electron ."
  },
```
