const {app, BrowserWindow} = require('electron')

app.on('ready',()=>{
    const mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true, //允许渲染进程访问node的api
            contextIsolation:false  //electron12后，默认是true，表示不能够访问node的api
        }
    })
    mainWindow.loadFile('./index.html')

    // const secondWindow = new BrowserWindow({
    //     width:50,
    //     height:50,
    //     webPreferences:{
    //         nodeIntegration:true
    //     },
    //     parent: mainWindow  //父窗口关闭，子窗口会跟着关闭
    // })
    // secondWindow.loadFile('./second.html')
})