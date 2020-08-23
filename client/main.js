var socket = io();
  var container = document.querySelector('#section');

var newMessage1 = document.querySelector('#newMessage1');
var newMessage2 = document.querySelector('#newMessage2');

var form = document.querySelector('#form');
var  posit = 0;
var abcc4 = 0;
var player = document.querySelector('#player');
  var playeronline1 = document.querySelector('#playeronline1');
   var playeronline2 = document.querySelector('#playeronline2');
var input = document.querySelector('#message');
var text = 0;
var abcabc = 0;

function abconline() {
  player = document.querySelector('#player');
   playeronline1 = document.querySelector('#playeronline1');
   playeronline2 = document.querySelector('#playeronline2');
   form = document.querySelector('#form');
 document.addEventListener('keypress', function () {
 setInterval(() => {
 posit = player.getAttribute('position');
 abcc4 = 1;
 
 abcabc = posit["x"] + " " + posit["y"] + " " + posit["z"];

 input.value = abcabc;
 form.checked = true;
 if (form.checked == true) {
  colorbtn = document.querySelector('#colorbtn');
   input = document.querySelector('#message');
   text = input.value;
  socket.emit('message', text);
  input.value = '';

 }
 }, 500);
});
 }



socket.on('message', function(text) {
  if (!text) {
    return;
  }
  newMessage1 = document.querySelector('#newMessage1');
newMessage2 = document.querySelector('#newMessage2');
form = document.querySelector('#form');

  if (colorbtn.style.backgroundColor == 'red') {
   newMessage1.innerText = text;
     console.log(newMessage1.innerText);
  }
  if (colorbtn.style.backgroundColor == 'blue') {
     newMessage2.innerText = text;
      console.log(newMessage2.innerText);
  }


  if (abcc4 == 1) {
    abconline2();
  }
  container.scrollTop = container.scrollHeight;
});

function abconline2() {
   playeronline1 = document.querySelector('#playeronline1');
   playeronline2 = document.querySelector('#playeronline2');
  let positionnavity4 = document.createAttribute('position');
  if (colorbtn.style.backgroundColor == 'red') {
 positionnavity4.value = newMessage1.innerText;
  playeronline1.setAttributeNode(positionnavity4);
  }
  if (colorbtn.style.backgroundColor == 'blue') {
positionnavity4.value = newMessage2.innerText;
 playeronline2.setAttributeNode(positionnavity4);
  }

 
  form.checked = false;
}

