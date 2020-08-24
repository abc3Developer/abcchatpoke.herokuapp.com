var socket = io();
  var container = document.querySelector('#section');

var newMessage1 = 0;
var newMessage2 = 0;

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
var asa = 0;

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
     abcabc = posit1["x"] + " " + posit1["y"] + " " + posit1["z"];
input.value = abcabc;
form.checked = true;
 if (form.checked == true) {
  colorbtn = document.querySelector('#colorbtn');
   input = document.querySelector('#message');
   text = input.value;
  socket.emit('message', text);
  input.value = '';

 }
  }

  /** */

  if (colorbtn.style.backgroundColor == 'blue') {
    player.id = 'player2';
   player2 = document.querySelector('#player2');
    posit2 = player2.getAttribute('position');
 abcabc = posit2["x"] + " " + posit2["y"] + " " + posit2["z"];
 input.value = abcabc;

form.checked = true;
 if (form.checked == true) {
  colorbtn = document.querySelector('#colorbtn');
   input = document.querySelector('#message');
   text = input.value;
  socket.emit('message', text);
  input.value = '';

 }
  }
 abcc4 = 1;

 

 
});
 }



socket.on('message', function(text) {
  if (!text) {
    return;
  }
form = document.querySelector('#form');

  if (colorbtn.style.backgroundColor == 'red') {
   container = document.querySelector('#section');
 newMessage1 = document.createElement('p');
 newMessage1.className = 'newMessage1';
  newMessage1.innerText = text;
  container.appendChild(newMessage1);
  }
  if (colorbtn.style.backgroundColor == 'blue') {
      container = document.querySelector('#section');
 newMessage2 = document.createElement('p');
 newMessage2.className = 'newMessage2';
  newMessage2.innerText = text;
  container.appendChild(newMessage2);
  }
  if (abcc4 == 1) {
 if (colorbtn.style.backgroundColor == 'red') {
     newMessage1 = document.querySelectorAll('.newMessage1');
        playeronline1 = document.querySelector('#playeronline1');
  let positionnavity4 = document.createAttribute('position');
  asa = newMessage1["length"];
asa = asa-1;
 positionnavity4.value = newMessage1[asa].textContent;
  playeronline1.setAttributeNode(positionnavity4);
  }
  if (colorbtn.style.backgroundColor == 'blue') {
         newMessage2 = document.querySelectorAll('.newMessage2');
       playeronline2 = document.querySelector('#playeronline2');
  let positionnavity5 = document.createAttribute('position');
  asa = newMessage1["length"];
asa = asa-1;
positionnavity5.value = newMessage2[asa].textContent;
 playeronline2.setAttributeNode(positionnavity5);
  }
    form.checked = false;
  }
});




