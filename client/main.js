var socket = io();
var form = document.querySelector('form');
var useer = document.querySelector('#useer');



form.addEventListener('submit', function(e) {
  e.preventDefault();
  var input = document.querySelector('#message');
  var text = input.value;
  socket.emit('message', text);
  input.value = '';
  socket.username = useer.value;
  socket.color = user.value;
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
