const { app, BrowserWindow } = require('electron')
var path = require('path')
function createWindow () {
    let win = new BrowserWindow({ 
      width: 1080, 
      height: 720,
      icon: path.join(__dirname, 'pics/favicon.png'),
    })
    win.loadFile('index.html')
}
app.on('ready', createWindow)