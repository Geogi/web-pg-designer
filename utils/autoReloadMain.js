const {app, BrowserWindow} = require("electron");
const {resolve} = require("path");

require("electron-reload")(resolve(__dirname, "..", "dist"), {
  electron: resolve(__dirname, "..", "node_modules", ".bin", "electron"),
});

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile(resolve(__dirname, "..", "dist", "index.html")).then();
};

const init = () => {
  createWindow();
};

app.on('ready', init);
