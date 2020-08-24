var player = document.querySelector('#player');
  var playeronline1 = document.querySelector('#playeronline1');
   var playeronline2 = document.querySelector('#playeronline2');




   var socket = io();
   var form = document.querySelector('form');
   var asa = 0;
   var abc = 0;
   var btncolor = document.querySelector('#btncolor');
   var btnck = document.querySelector('#btnck');
   var input = document.querySelector('#message');
   var text = 0;

   var posit = 0;
   var posit2 = 0;
   function ab12() {
     btncolor = document.querySelector('#btncolor');
     abc = 'abc12';
       btncolor.style.backgroundColor = 'red';
   }
   function ab24() {
     abc = 'abc24';
     btncolor.style.backgroundColor = 'blue';
   }
   
   document.addEventListener('keypress', function () {
     btncktrue();
   });
   
   function btncktrue() {
     btnck.checked = true;
     if (btnck.checked == true) {
       starrt();
     }
     input = document.querySelector('#message');
     posit = player.getAttribute('position');
     posit2 = posit["x"]+ " " +posit["y"]+ " " +posit["z"];
     input.value = posit2;
   }
   
   function starrt() {
     input = document.querySelector('#message');
     text = input.value;
     if (abc == 'abc12') {
       console.log(12)
       abc = 'a1b2c';
     }
     if (abc == 'abc24') {
       console.log(24)
       abc = 'a2b4c';
     }
     text = text+ "---" +abc;
     socket.emit('message', text, function () {
       socket.emit('txtabc');
     });
     
     input.value = '';
   
   
   socket.on('message', function(text) {
     if (!text) {
       return;
     }
   
     var container = document.querySelector('section');
     var newMessage = document.createElement('abc');
     newMessage.innerText = text;
     container.appendChild(newMessage);
   
     var seperator = document.createElement('br');
     container.appendChild(seperator);
     });
   }
   
   