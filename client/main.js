var player = document.querySelector('#player');
  var playeronline1 = document.querySelector('#playeronline1');
  var playeronline2 = document.querySelector('#playeronline2');
var abcls = 0;



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


  var abccs = 0;
  var abccs2 = 0;
  var abccs3 = 0;
var abxx = 0;

   function ab12() {
     btncolor = document.querySelector('#btncolor');
     abc = 'abc12';
       btncolor.style.backgroundColor = 'red';
   }
   function ab24() {
    btncolor = document.querySelector('#btncolor');
     abc = 'abc24';
     btncolor.style.backgroundColor = 'blue';
   }
   
   document.addEventListener('keypress', function () {
     btncktrue();
   });
   
   function btncktrue() {
    btnck = document.querySelector('#btnck');
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
     text = abc+ "---" +text;
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
     if (abc == 'a1b2c') {
      playeronline1 = document.querySelector('#playeronline1');
      abcls = document.querySelectorAll('abc')
      abccs = abcls["lenght"];
      abccs2 = newMessage[abccs-1].textContent;
      abxx = abccs2[0]+abccs2[1]+abccs2[2]+abccs2[3]+abccs2[4];
      if (abxx == 'a1b2c') {
        console.log('bien1')
      }else{
        if (abxx == 'a2b4c') {
          console.log('bien2');
          abccs3 = abccs2.replace('a2b4c---', '');
          positc1();
        }
      }
    function positc1() {
      let positionnavity3 = document.createAttribute('position');
      positionnavity3.value = abccs3;
      playeronline1.setAttributeNode(positionnavity3);
    }
    }
    if (abc == 'a2b4c') {
      playeronline1 = document.querySelector('#playeronline2');
      abcls = document.querySelectorAll('abc')
      abccs = abcls["lenght"];
      abccs2 = newMessage[abccs-1].textContent;
      abxx = abccs2[0]+abccs2[1]+abccs2[2]+abccs2[3]+abccs2[4];
      if (abxx == 'a1b2c') {
        console.log('bien11');
        abccs3 = abccs2.replace('a1b2c---', '');
        positc2();
      }else{
        if (abxx == 'a2b4c') {
          console.log('bien22');
        }
      }
      function positc2() {
        let positionnavity3 = document.createAttribute('position');
        positionnavity3.value = abccs3;
        playeronline2.setAttributeNode(positionnavity3);
      }
    }
     
     });
   }
   
   