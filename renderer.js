const ipcRenderer = require('electron').ipcRenderer;

const logo = document.getElementsByClassName('nuxt-link-active')[0];

if (logo) {
  ipcRenderer.on('reply', function(evt, message) {
    console.log('TomoWallet replied: ', message);
  });

  logo.removeAttribute('href');
  logo.addEventListener('click', function(event) {
    event.preventDefault();
    ipcRenderer.send(
      'message',
      "Hello TomoWallet, it's " + new Date().toLocaleTimeString() + '.',
    );
  });
}

// ==== MAXBET =====
// document.getElementsByClassName('account-login')[0].click();
// setTimeout(function() {
//   document.getElementsByClassName('login-item')[1].click();
// }, 100);
// setTimeout(function() {
//   document.getElementsByTagName('textarea')[0].value =
//     'a11060f64bebb7fceed87940682952d8e17fd1143ac1df05c67215d19269a12a';
// }, 200);
// =================
