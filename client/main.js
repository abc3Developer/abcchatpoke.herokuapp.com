var socket = io();
  var container = document.querySelector('#section');

var newMessage1 = document.querySelector('#newMessage1');
var newMessage2 = document.querySelector('#newMessage2');

var form = document.querySelector('#form');
var  posit1 = 0;
var  posit2 = 0;
var abcc4 = 0;
var player = document.querySelector('#player');
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
  var playeronline1 = document.querySelector('#playeronline1');
   var playeronline2 = document.querySelector('#playeronline2');
var input = document.querySelector('#message');
var text = 0;
var abcabc1 = 0;
var abcabc2 = 0;

function abconline() {
  player = document.querySelector('#player');

player2 = document.querySelector('#player2');
   playeronline1 = document.querySelector('#playeronline1');
   playeronline2 = document.querySelector('#playeronline2');
   form = document.querySelector('#form');

 document.addEventListener('keydown', function () {

 if (colorbtn.style.backgroundColor == 'red') {
   player.id = 'player1';
   player1 = document.querySelector('#player1');
    posit1 = player1.getAttribute('position');
     abcabc1 = posit1["x"] + " " + posit1["y"] + " " + posit1["z"];
     abcabc = abcabc1;
  }
  if (colorbtn.style.backgroundColor == 'blue') {
    player.id = 'player2';
   player2 = document.querySelector('#player2');
    posit2 = player2.getAttribute('position');
 abcabc2 = posit2["x"] + " " + posit2["y"] + " " + posit2["z"];
 abcabc = abcabc2;
  }
 abcc4 = 1;

 input.value = abcabc;

 form.checked = true;
 if (form.checked == true) {
  colorbtn = document.querySelector('#colorbtn');
   input = document.querySelector('#message');
   text = input.value;
  socket.emit('message', text);
  input.value = '';

 }
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
  }
  if (colorbtn.style.backgroundColor == 'blue') {
     newMessage2.innerText = text;
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

