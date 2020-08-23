var socket = io();

var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  colorbtn = document.querySelector('#colorbtn');
  var input = document.querySelector('#message');
  var text = colorbtn.style.backgroundColor+" :"+input.value;
  socket.emit('message', text);
  input.value = '';
});

socket.on('message', function(text) {
  if (!text) {
    return;
  }
  var container = document.querySelector('section');
  var newMessage = document.createElement('p');
  newMessage.innerText = text;
  container.appendChild(newMessage);

  var seperator = document.createElement('br');
  container.appendChild(seperator);

  container.scrollTop = container.scrollHeight;
});
