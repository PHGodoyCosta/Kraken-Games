const { app, BrowserWindow, protocol } = require('electron')
const url = require('url')
const path = require('path')

function createMainWindow() {
    const window = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, "preload.js")
        }
    })

    const startUrl = url.format({
        pathname: path.join(__dirname, "./app/build/index.html"),
        protocol: 'file'
    })

    console.log(`\n\n${startUrl}\n\n`)

    window.loadURL(startUrl)

    window.webContents.openDevTools()
}



app.whenReady().then(createMainWindow)