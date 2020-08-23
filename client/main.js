var socket = io();

var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var btnuseer = document.querySelector('#btnuseer');
  var input = document.querySelector('#message');
  var text = btnuseer.style.backgroundColor+" :"+input.value;
  socket.emit('message', text);
  input.value = '';
});

socket.on('message', function(text) {
  if (!text) {
    return;
  }
  var container = document.querySelector('section');
  var newMessage = document.createElement('#newmens');
  newMessage.innerText = text;
  container.appendChild(newMessage);

  var seperator = document.createElement('br');
  container.appendChild(seperator);

  container.scrollTop = container.scrollHeight;
});
