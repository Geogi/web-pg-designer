// noinspection JSUnusedLocalSymbols
const os = require("os");
// noinspection JSUnusedLocalSymbols
const path = require("path");

// noinspection JSUnusedLocalSymbols
const {BrowserWindow, app, session} = require('electron');

// noinspection SpellCheckingInspection
app.whenReady().then(() => {
  // Show extensions
  // console.log(BrowserWindow.getDevToolsExtensions());

  // Remove extensions
  // ["React Developer Tools", "Redux DevTools"].map((n) =>
  //   BrowserWindow.removeDevToolsExtension(n));

  // Add React
  // BrowserWindow.addDevToolsExtension(
  //   path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.0.5_0')
  // );

  // Add Redux
  // BrowserWindow.addDevToolsExtension(
  //   path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0')
  // );

  new BrowserWindow({
    height: 480,
    width: 640,
  });
});
