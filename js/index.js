
'use strict';

function log(data) {
  var time = new Date().toLocaleTimeString();
  var text = '[' + time + '] ';
  if (typeof(data) === 'string') {
    text += data;
  } else if(data.log) {
    text += data.log;
  } else {
    text = JSON.stringify(data);
  }
  document.getElementById('message').textContent += (text + '\n');
}

window.onload = function() {
  var parent;
  window.onmessage = function(evt) {
    if (evt.data === 'ping') {
      parent = evt.source;
      parent.postMessage('pong', '*');
    }
    log(evt.data);
  };
};

