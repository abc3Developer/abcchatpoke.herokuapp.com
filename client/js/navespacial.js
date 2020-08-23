/*
var abcrun = 0;
function abcrunnave() {
 abcrun++;
}
function navepla() {
    let player = document.querySelector('#player');
    let posport = player.getAttribute('position');
    let opsitya = Object.values(posport);
        parseInt(opsitya[1]);
        parseInt(opsitya[2]);
   let qwe = JSON.stringify(opsitya);
  let qwe1 = JSON.stringify(qwe);
   let qwe2 = qwe1.replace(/{/g,'');
   let qwe3 = qwe2.replace(/}/g,'');
   let qwe4 = qwe3.replace(/z/g,'');
   let qwe5 = qwe4.replace(/,/g,' ');
   let qwe6 = qwe5.replace(/:/g,'');
   let qwe7 = qwe6.replace(/x/g,'');
   let qwe8 = qwe7.replace(/y/g,'');
   let qwe9 = qwe8.replace(/"/g,'');
   let qwe11 = qwe9.replace(/]/g,'');
   let qwe12 = qwe11.slice(1);
   arraqwe = qwe12.split(" ", 3);
   let arraqwe0 = parseInt(arraqwe[0]);
   let arraqwe1 = parseInt(arraqwe[1]);
   let arraqwe2 = parseInt(arraqwe[2]);
    let positionnavity4 = document.createAttribute('position');
    arraqwe1 = arraqwe1 + 0.1;
    arraqwe2 = arraqwe2 - 1;
    arraqwe = arraqwe0 + " " + arraqwe1 + " " + arraqwe2;
    positionnavity4.value = arraqwe;
    player.setAttributeNode(positionnavity4);
}
function nave() {
    let player = document.querySelector('#naverun');
    let posport = player.getAttribute('position');
    let opsitya = Object.values(posport);
        parseInt(opsitya[1]);
        parseInt(opsitya[2]);
   let qwe = JSON.stringify(opsitya);
  let qwe1 = JSON.stringify(qwe);
   let qwe2 = qwe1.replace(/{/g,'');
   let qwe3 = qwe2.replace(/}/g,'');
   let qwe4 = qwe3.replace(/z/g,'');
   let qwe5 = qwe4.replace(/,/g,' ');
   let qwe6 = qwe5.replace(/:/g,'');
   let qwe7 = qwe6.replace(/x/g,'');
   let qwe8 = qwe7.replace(/y/g,'');
   let qwe9 = qwe8.replace(/"/g,'');
   let qwe11 = qwe9.replace(/]/g,'');
   let qwe12 = qwe11.slice(1);
   arraqwe = qwe12.split(" ", 3);
   let arraqwe0 = parseInt(arraqwe[0]);
   let arraqwe1 = parseInt(arraqwe[1]);
   let arraqwe2 = parseInt(arraqwe[2]);
    let positionnavity4 = document.createAttribute('position');
    arraqwe1 = arraqwe1 + 0.1;
    abcrunnave();
    arraqwe2 = arraqwe2 + abcrun;
    arraqwe = arraqwe0 + " " + arraqwe1 + " " + arraqwe2;
    positionnavity4.value = arraqwe;
    player.setAttributeNode(positionnavity4);
    navepla();
}
function runnaveopen() {



document.addEventListener('keypress', function () {
  console.log(event.key);
});
}
*/


var boxnaverun = 0;

var papel = document.querySelector('#papel');

var textbox = document.createAttribute('text');

var text="align:center;color:black;value:";

function aber() {
   boxnaverun = document.querySelector('#boxnaverun').getAttribute('static-body');


var data  = JSON.stringify(boxnaverun);
textbox.value = text+data;

player.setAttributeNode(textbox);
}
