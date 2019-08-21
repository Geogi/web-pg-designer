import {app, BrowserWindow} from "electron";

const createWindow = () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html").then();
};

const init = () => {
  createWindow();
};

app.on("ready", init);
