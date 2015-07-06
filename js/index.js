
'use strict';

window.onload = function() {
  var parent;
  window.onmessage = function(evt) {
    if (evt.data === 'ping') {
      parent = evt.source;
      parent.postMessage('pong', '*');
    }
    document.getElementById('message').textContent += evt.data + '\n';
  };
};

