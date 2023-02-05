/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
// alert(process.versions.node)
const {ipcRenderer} = require('electron')

window.addEventListener('DOMContentLoaded',()=>{
    ipcRenderer.send('message','hello from renderer')
    ipcRenderer.on('reply1',(event,arg)=>{
        document.getElementById('message1').innerHTML = arg;
    })

    ipcRenderer.on('reply2',(event,arg)=>{
        document.getElementById('message2').innerHTML = arg;
    })

    ipcRenderer.on('reply3',(event,arg)=>{
        document.getElementById('message3').innerHTML = arg;
    })
})


