const { contextBridge } = require("electron")

const os = require("os")

contextBridge.exposeInMainWorld('electron', {
    homeDir: () => os.homedir(),
    arch: () => os.arch(),
    version: () => os.version()
})