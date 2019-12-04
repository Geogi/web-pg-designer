const {BrowserWindow, app} = require("electron");

// noinspection JSUnusedLocalSymbols
const {default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} = require("electron-devtools-installer");

// noinspection SpellCheckingInspection
app.whenReady().then(async () => {
  // Show extensions
  console.log(BrowserWindow.getDevToolsExtensions());

  // Remove extensions
  // BrowserWindow.removeDevToolsExtension("React Developer Tools");
  // BrowserWindow.removeDevToolsExtension("Redux DevTools");

  // Add extensions
  // await installExtension(REACT_DEVELOPER_TOOLS);
  // await installExtension(REDUX_DEVTOOLS);

  new BrowserWindow({
    height: 480,
    width: 640,
  });
});
