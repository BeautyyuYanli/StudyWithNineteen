const { app, BrowserWindow } = require('electron')
function createWindow () {   
  let win = new BrowserWindow({ width: 1080, height: 720 })
  win.loadFile('index.html')
}
app.on('ready', createWindow)