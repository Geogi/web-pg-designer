import { app, BrowserWindow } from "electron";

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  await win.loadFile("index.html");
};

app
  .whenReady()
  .then(createWindow)
  .catch(e => process.stderr.write(e.toString()));
