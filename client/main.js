var socket = io();
  var container = document.querySelector('#section');

var newMessage1 = document.querySelector('#newMessage1');
var newMessage2 = document.querySelector('#newMessage2');

var form = document.querySelector('#form');
var  posit = 0;
var abcc4 = 0;
var player = document.querySelector('#player');
var playeronline = document.querySelector('#playeronline');
var input = document.querySelector('#message');
var text = 0;
var abcabc = 0;


function abconline() {
  player = document.querySelector('#player');
   playeronline = document.querySelector('#playeronline');
   form = document.querySelector('#form');
  setInterval(() => {
 posit = player.getAttribute('position');
 abcc4 = 1;
 console.log(posit);
 abcabc = posit["x"] + " " + posit["y"] + " " + posit["z"];
console.log(abcabc); 
 input.value = abcabc;
console.log(input.value);
 form.checked = true;
 form.addEventListener('change', function(e) {
  e.preventDefault();
  colorbtn = document.querySelector('#colorbtn');
   input = document.querySelector('#message');
   text = input.value;
  socket.emit('message', text);
  console.log(text);
  input.value = '';

});
 }, 50);
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
    console.log(text);
     console.log(newMessage1.innerText);
  }
  if (colorbtn.style.backgroundColor == 'blue') {
     newMessage2.innerText = text;
      console.log(text);
      console.log(newMessage2.innerText);
  }


  if (abcc4 == 1) {
    abconline2();
  }
  container.scrollTop = container.scrollHeight;
});

function abconline2() {
  playeronline = document.querySelector('#playeronline');
  let positionnavity4 = document.createAttribute('position');
  if (colorbtn.style.backgroundColor == 'red') {
 positionnavity4.value = newMessage1.innerText;
  }
  if (colorbtn.style.backgroundColor == 'blue') {
positionnavity4.value = newMessage2.innerText;
  }

  playeronline.setAttributeNode(positionnavity4);
  form.checked = false;
}





function iniciaronline() {
  if (colorbtn.style.backgroundColor == 'red') {
    for (let index = 0; index < p.length; index++) {
      const element = p[index];
      
    }
  }
  if (colorbtn.style.backgroundColor == 'red') {
    
  }
}