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
      "Hello TomoWallet, it's" + new Date().toLocaleTimeString() + '.',
    );
  });
}
