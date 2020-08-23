
function nave1b() {
    let nave2a = document.querySelector('#nave2a')
    let navp = nave2a.getAttribute('position');
    let opsitya2 = Object.values(navp);
        parseInt(opsitya2[1]);
        parseInt(opsitya2[2]);
   let qweb = JSON.stringify(opsitya2);
  let qwe1b = JSON.stringify(qweb);
   let qwe2b = qwe1b.replace(/{/g,'');
   let qwe3b = qwe2b.replace(/}/g,'');
   let qwe4b = qwe3b.replace(/z/g,'');
   let qwe5b = qwe4b.replace(/,/g,' ');
   let qwe6b = qwe5b.replace(/:/g,'');
   let qwe7b = qwe6b.replace(/x/g,'');
   let qwe8b = qwe7b.replace(/y/g,'');
   let qwe9b = qwe8b.replace(/"/g,'');
   let qwe11b = qwe9b.replace(/]/g,'');
   let qwe12b = qwe11b.slice(1);
   arraqweb = qwe12b.split(" ", 3);
   var arraqwe0b = parseInt(arraqweb[0]);
   var arraqwe1b = parseInt(arraqweb[1]);
   var arraqwe2b = parseInt(arraqweb[2]);

    let navplayer = player.getAttribute('position');
    let opsitya = Object.values(navplayer);
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

   let sumnavs0 = 0;
   let sumnavs1 = 0;
   let sumnavs2 = 0;
   let position1 = document.createAttribute('position');

   if (arraqwe0 == arraqwe0b) {
    sumnavs0 = 12;
    console.log('0');
}
if (arraqwe1 == arraqwe1b) {
    sumnavs1 = 12;
    console.log('1');
}
if (arraqwe2 == arraqwe2b) {
    sumnavs2 = 12;
    console.log('2');
}
let sumnav = sumnavs0 + sumnavs1 + sumnavs2;
if (sumnav == 36) {
    console.log('bien');
    arraqwe1 = arraqwe1 + 5.5; 
    

arraqwe = arraqwe0 + " " + arraqwe1 + " " + arraqwe2;
let replaarraqwe = arraqwe.replace(/,/g,' ');
console.log(arraqwe);
console.log(replaarraqwe);
position1.value = arraqwe;
        nave.setAttributeNode(position1);
        nave2b();
}
else{
    console.log('mal');
}
}
function nave2b() {
    let navp = player.getAttribute('position');
    let opsitya2 = Object.values(navp);
        parseInt(opsitya2[1]);
        parseInt(opsitya2[2]);
   let qweb = JSON.stringify(opsitya2);
  let qwe1b = JSON.stringify(qweb);
   let qwe2b = qwe1b.replace(/{/g,'');
   let qwe3b = qwe2b.replace(/}/g,'');
   let qwe4b = qwe3b.replace(/z/g,'');
   let qwe5b = qwe4b.replace(/,/g,' ');
   let qwe6b = qwe5b.replace(/:/g,'');
   let qwe7b = qwe6b.replace(/x/g,'');
   let qwe8b = qwe7b.replace(/y/g,'');
   let qwe9b = qwe8b.replace(/"/g,'');
   let qwe11b = qwe9b.replace(/]/g,'');
   let qwe12b = qwe11b.slice(1);
   arraqweb = qwe12b.split(" ", 3);
   var arraqwe0b = parseInt(arraqweb[0]);
   var arraqwe1b = parseInt(arraqweb[1]);
   var arraqwe2b = parseInt(arraqweb[2]);

    let navplayer = player.getAttribute('position');
    let opsitya = Object.values(navplayer);
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

   let sumnavs0 = 0;
   let sumnavs1 = 0;
   let sumnavs2 = 0;
   let position1 = document.createAttribute('position');

   if (arraqwe0 == arraqwe0b) {
    sumnavs0 = 12;
    console.log('0');
}
if (arraqwe1 == arraqwe1b) {
    sumnavs1 = 12;
    console.log('1');
}
if (arraqwe2 == arraqwe2b) {
    sumnavs2 = 12;
    console.log('2');
}
let sumnav = sumnavs0 + sumnavs1 + sumnavs2;
if (sumnav == 36) {
    console.log('bien');
    arraqwe1 = arraqwe1 + 4.5; 
    

arraqwe = arraqwe0 + " " + arraqwe1 + " " + arraqwe2;
let arraqwena1 = arraqwe1;
let arraqwe11 = arraqwe1 + 2;
let replaarraqwe = arraqwe.replace(/,/g,' ');
let positionnavity1 = document.createAttribute('position');
console.log(arraqwe);
console.log(replaarraqwe);
position1.value = arraqwe = arraqwe0 + " " + arraqwe11 + " " + arraqwe2;
        player.setAttributeNode(position1);
        arraqwe = arraqwe0 + " " + arraqwena1 + " " + arraqwe2;
        positionnavity1.value = arraqwe;
        navity2.setAttributeNode(positionnavity1);
}
else{
    console.log('mal');
}
}



function nav1b() {
    if (event.key == "x") {
        nave1b();
        }    
    if (event.key == "X") {
        nave1b();
        }    
}

function posinavf2(){                                   
    window.addEventListener('keypress' ,function () { 
       nav1b();
      });
    };