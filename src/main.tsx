import {app, BrowserWindow} from "electron";

const createWindow = async () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  await win.loadFile("index.html");
};

app.whenReady()
  .then(createWindow)
  .catch(process.stderr.write);
