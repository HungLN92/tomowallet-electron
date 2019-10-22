const electron = require('electron');
const ipcRenderer = require('electron').ipcRenderer;

// ===== MAXBET WALLET PRELOAD =====
window.sessionStorage.setItem(
  'privateKey',
  electron.remote.getCurrentWindow().privateKey,
);
// ==============================
