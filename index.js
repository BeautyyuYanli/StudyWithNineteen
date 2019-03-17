const { app, BrowserWindow } = require('electron')
var path = require('path')
function createWindow () {
    let win = new BrowserWindow({ 
      width: 1100, 
      height: 735,
      icon: path.join(__dirname, 'pics/favicon.png'),
      autoHideMenuBar: true,
    })
    win.loadFile('index.html')
}
app.on('ready', createWindow)
