function portalrojo1() {
    let portal = document.querySelector('#portal');
    let posport = portal.getAttribute('position');
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
   arraqwe = arraqwe0 + " " + arraqwe1 + " " + arraqwe2;
portrojo1();
}
function portrojo1() {
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
   arraqweA = qwe12.split(" ", 3);
   let arraqwe0 = parseInt(arraqweA[0]);
   let arraqwe1 = parseInt(arraqweA[1]);
   let arraqwe2 = parseInt(arraqweA[2]);
   arraqweA = arraqwe0 + " " + arraqwe1 + " " + arraqwe2;
   let positionnavity1 = document.createAttribute('position');
   if (arraqweA == arraqwe) {
    positionnavity1.value = "5000 5123 1000";
    player.setAttributeNode(positionnavity1);
   }
}

function portalazul1() {
    let portal = document.querySelector('#portal');
    let posport = portal.getAttribute('position');
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
   arraqwe = arraqwe0 + " " + arraqwe1 + " " + arraqwe2;
   
portazul1();
}
function portazul1() {
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
   arraqweA = qwe12.split(" ", 3);
   let arraqwe0 = parseInt(arraqweA[0]);
   let arraqwe1 = parseInt(arraqweA[1]);
   let arraqwe2 = parseInt(arraqweA[2]);
   arraqweA = arraqwe0 + " " + arraqwe1 + " " + arraqwe2;
   let positionnavity1 = document.createAttribute('position');
   if (arraqweA == arraqwe) {
    positionnavity1.value = "5000 5123 -1000";
    player.setAttributeNode(positionnavity1);
   }
}


function posinaport() {
    if (event.key == "x") {
        portalrojo1();
        portalazul1();
        }    
    if (event.key == "X") {
        portalrojo1();
        portalazul1();
        }    
}

function posinaportal(){                                   
    window.addEventListener('keypress' ,function () { 
        posinaport();
      });
    };