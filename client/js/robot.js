// ..cambiar color rojo..
var colorc1 = "red";
var colorc2 = "yellow";
var colorc3 = "black";
var colorc4 = "purple";
var colorc5 = "white";
var colorc = colorc1;
function cil0() {
    let cilindro0 = document.querySelector('#cilindro0');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro0.setAttributeNode(color);
    cil1();
    }
    function cil1() {
    let cilindro1 = document.querySelector('#cilindro1');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro1.setAttributeNode(color);
    cil2();
    }
    function cil2() {   
    let cilindro2 = document.querySelector('#cilindro2');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro2.setAttributeNode(color);
    cil3();
    }
    function cil3() {
        let cilindro3 = document.querySelector('#cilindro3');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro3.setAttributeNode(color);
    cil4();
    }
    function cil4() {
        let cilindro4 = document.querySelector('#cilindro4');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro4.setAttributeNode(color);
    cil5();
    }
    function cil5() {
        let cilindro5 = document.querySelector('#cilindro5');
        let color = document.createAttribute('color');
        color.value = colorc;
        cilindro5.setAttributeNode(color);
        cil6();
    }
    function cil6() {
        let cilindro6 = document.querySelector('#cilindro6');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro6.setAttributeNode(color);
    cil7();
    }
    function cil7() {
    let cilindro7 = document.querySelector('#cilindro7');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro7.setAttributeNode(color);
    cil8();
    }
    function cil8() {
        let cilindro8 = document.querySelector('#cilindro8');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro8.setAttributeNode(color);
    cil9();
    }
    function cil9() {
        let cilindro9 = document.querySelector('#cilindro9');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro9.setAttributeNode(color);
    cil10();
    }
    function cil10() {
    let cilindro10 = document.querySelector('#cilindro10');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro10.setAttributeNode(color);
    cil11();
    }
    function cil11() {
        let cilindro11 = document.querySelector('#cilindro11');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro11.setAttributeNode(color);
    cil12();
    }
    function cil12() {
    let cilindro12 = document.querySelector('#cilindro12');
    let color = document.createAttribute('color');
    color.value = colorc;
    cilindro12.setAttributeNode(color);
    }
function tecy() {
    if (event.key == "y") {
        teclay1();
    }
    if (event.key == "Y") {
        teclay1();
    }
}
function tecy2() {
    if (event.key == "1") {
        colorc = colorc1;
        cil0();
    }
    if (event.key == "2") {
        colorc = colorc2;
        cil0();
    }
    if (event.key == "3") {
        colorc = colorc3;
        cil0();
    }
    if (event.key == "4") {
        colorc = colorc4;
        cil0();
    }
    if (event.key == "5") {
        colorc = colorc5;
        cil0();
    }
}
function teclay() {
    window.addEventListener('keypress' ,function () {
        tecy();
      });
};
function teclay1() {
    window.addEventListener('keypress' ,function () {
    tecy2();
      });
};
// ..cambiar color rojo fin
// ..mover robot cruz
function mvrbot8q() {
    positimoverr0q = "-23 0 -48.5";
    positimoverr1q = "-23 0.5 -48.5";
    positimoverr2q = "-23 0.25 -48.5";
    positimoverr3q = "-23 0.75 -48.5";
    positimoverr4q = "-23 1 -48.5";
    positimoverr5q = "-23 1.75 -48.5";
    positimoverr6q = "-23 2.75 -48.5";
    positimoverr7q = "-23 3.5 -48.5";
    positimoverr8q = "-24 3.5 -48.5";
    positimoverr9q = "-25.75 3.5 -48.5";
    positimoverr10q = "-26.75 3.5 -48.5";
    positimoverr11q = "-26.75 3 -48.5";
    positimoverr12q = "-26.75 2.5 -48.5";
}
function mvrbot5q() {
    positimoverr0q = "-23 0 -2.5";
    positimoverr1q = "-23 0.5 -2.5";
    positimoverr2q = "-23 0.25 -2.5";
    positimoverr3q = "-23 0.75 -2.5";
    positimoverr4q = "-23 1 -2.5";
    positimoverr5q = "-23 1.75 -2.5";
    positimoverr6q = "-23 2.75 -2.5";
    positimoverr7q = "-23 3.5 -2.5";
    positimoverr8q = "-24 3.5 -2.5";
    positimoverr9q = "-25.75 3.5 -2.5";
    positimoverr10q = "-26.75 3.5 -2.5";
    positimoverr11q = "-26.75 3 -2.5";
    positimoverr12q = "-26.75 2.5 -2.5";    
}
function mvrbot6q() {
    positimoverr0q = "3 0 -2.5";
    positimoverr1q = "3 0.5 -2.5";
    positimoverr2q = "3 0.25 -2.5";
    positimoverr3q = "3 0.75 -2.5";
    positimoverr4q = "3 1 -2.5";
    positimoverr5q = "3 1.75 -2.5";
    positimoverr6q = "3 2.75 -2.5";
    positimoverr7q = "3 3.5 -2.5";
    positimoverr8q = "4 3.5 -2.5";
    positimoverr9q = "5.75 3.5 -2.5";
    positimoverr10q = "6.75 3.5 -2.5";
    positimoverr11q = "6.75 3 -2.5";
    positimoverr12q = "6.75 2.5 -2.5";
}
function mvrbot2q() {
    positimoverr0q = "-23 0 12";
    positimoverr1q = "-23 0.5 12";
    positimoverr2q = "-23 0.25 12";
    positimoverr3q = "-23 0.75 12";
    positimoverr4q = "-23 1 12";
    positimoverr5q = "-23 1.75 12";
    positimoverr6q = "-23 2.75 12";
    positimoverr7q = "-23 3.5 12";
    positimoverr8q = "-24 3.5 12";
    positimoverr9q = "-25.75 3.5 12";
    positimoverr10q = "-26.75 3.5 12";
    positimoverr11q = "-26.75 3 12";
    positimoverr12q = "-26.75 2.5 12";
}
function inclinara() {
    positimoverr0q = "-23 0 -2.5";
    positimoverr1q = "-23 0.5 -2.5";
    positimoverr2q = "-23 0.25 -2.5";
    positimoverr3q = "-23 0.75 -2.5";
    positimoverr4q = "-23 1 -2.5";
    positimoverr5q = "-22.85 1.75 -2.5";
    positimoverr6q = "-22.7 2.75 -2.5";
    positimoverr7q = "-22.65 3.5 -2.5";
    positimoverr8q = "-23.7 3.7 -2.5";
    positimoverr9q = "-25.25 4 -2.5";
    positimoverr10q = "-26.25 4.15 -2.5";
    positimoverr11q = "-26.25 3.65 -2.5";
    positimoverr12q = "-26.25 3.25 -2.5";
}
/*-------------------------------------------------------*/
function movermin0() {
    let mover0q = document.querySelector('#mover0');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr0q;
    mover0q.setAttributeNode(position);
    mover0q.setAttributeNode(dur);
}
function movermin1() {
    let mover1q = document.querySelector('#mover1');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr1q;
    mover1q.setAttributeNode(position);
    mover1q.setAttributeNode(dur);
}
function movermin2() {
    let mover2q = document.querySelector('#mover2');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr2q;
    mover2q.setAttributeNode(position);
    mover2q.setAttributeNode(dur);
}
function movermin3() {
    let mover3q = document.querySelector('#mover3');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr3q;
    mover3q.setAttributeNode(position);
    mover3q.setAttributeNode(dur);
}
function movermin4() {
    let mover4q = document.querySelector('#mover4');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr4q;
    mover4q.setAttributeNode(position);
    mover4q.setAttributeNode(dur);
}
function movermin5() {
    let mover5q = document.querySelector('#mover5');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr5q;
    mover5q.setAttributeNode(position);
    mover5q.setAttributeNode(dur);
}
function movermin6() {
    let mover6q = document.querySelector('#mover6');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr6q;
    mover6q.setAttributeNode(position);
    mover6q.setAttributeNode(dur);
}
function movermin7() {
    let mover7q = document.querySelector('#mover7');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr7q;
    mover7q.setAttributeNode(position);
    mover7q.setAttributeNode(dur);
}
function movermin8() {
    let mover8q = document.querySelector('#mover8');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr8q;
    mover8q.setAttributeNode(position);
    mover8q.setAttributeNode(dur);
}
function movermin9() {
    let mover9q = document.querySelector('#mover9');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr9q;
    mover9q.setAttributeNode(position);
    mover9q.setAttributeNode(dur);
}
function movermin10() {
    let mover10q = document.querySelector('#mover10');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr10q;
    mover10q.setAttributeNode(position);
    mover10q.setAttributeNode(dur);
}
function movermin11() {
    let mover11q = document.querySelector('#mover11');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr11q;
    mover11q.setAttributeNode(position);
    mover11q.setAttributeNode(dur);
}
function movermin12() {
    let mover12q = document.querySelector('#mover12');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "10000";
    position.value = positimoverr12q;
    mover12q.setAttributeNode(position);
    mover12q.setAttributeNode(dur);
}

/*-------------------------------------------------------------------------------------------------------*/
function movermin0m() {
    let mover0q = document.querySelector('#mover0');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    position.value = positimoverr0q;
    mover0q.setAttributeNode(position);
    mover0q.setAttributeNode(dur);
}
function movermin1m() {
    let mover1q = document.querySelector('#mover1');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr1q;
    mover1q.setAttributeNode(position);
    mover1q.setAttributeNode(dur);
}
function movermin2m() {
    let mover2q = document.querySelector('#mover2');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr2q;
    mover2q.setAttributeNode(position);
    mover2q.setAttributeNode(dur);
}
function movermin3m() {
    let mover3q = document.querySelector('#mover3');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr3q;
    mover3q.setAttributeNode(position);
    mover3q.setAttributeNode(dur);
}
function movermin4m() {
    let mover4q = document.querySelector('#mover4');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr4q;
    mover4q.setAttributeNode(position);
    mover4q.setAttributeNode(dur);
}
function movermin5m() {
    let mover5q = document.querySelector('#mover5');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr5q;
    mover5q.setAttributeNode(position);
    mover5q.setAttributeNode(dur);
}
function movermin6m() {
    let mover6q = document.querySelector('#mover6');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr6q;
    mover6q.setAttributeNode(position);
    mover6q.setAttributeNode(dur);
}
function movermin7m() {
    let mover7q = document.querySelector('#mover7');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr7q;
    mover7q.setAttributeNode(position);
    mover7q.setAttributeNode(dur);
}
function movermin8m() {
    let mover8q = document.querySelector('#mover8');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr8q;
    mover8q.setAttributeNode(position);
    mover8q.setAttributeNode(dur);
}
function movermin9m() {
    let mover9q = document.querySelector('#mover9');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr9q;
    mover9q.setAttributeNode(position);
    mover9q.setAttributeNode(dur);
}
function movermin10m() {
    let mover10q = document.querySelector('#mover10');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr10q;
    mover10q.setAttributeNode(position);
    mover10q.setAttributeNode(dur);
}
function movermin11m() {
    let mover11q = document.querySelector('#mover11');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr11q;
    mover11q.setAttributeNode(position);
    mover11q.setAttributeNode(dur);
}
function movermin12m() {
    let mover12q = document.querySelector('#mover12');
    let position = document.createAttribute('to');
    let dur = document.createAttribute('dur');
    dur.value = "0";
    position.value = positimoverr12q;
    mover12q.setAttributeNode(position);
    mover12q.setAttributeNode(dur);
}
// -
function movermaxtos() {
    movermin0m();
    movermin1m();
    movermin2m();
    movermin3m();
    movermin4m();
    movermin5m();
    movermin6m();
    movermin7m();
    movermin8m();
    movermin9m();
    movermin10m();
    movermin11m();
    movermin12m();
    levantartecla5x();
}
function movermintos() {
    movermin0();
    movermin1();
    movermin2();
    movermin3();
    movermin4();
    movermin5();
    movermin6();
    movermin7();
    movermin8();
    movermin9();
    movermin10();
    movermin11();
    movermin12();
}
// --
function tecfnmx() {
    if (event.key == "2") {
        mvrbot2q();
        movermaxtos();
    }
    if (event.key == "5") {
        mvrbot5q();
        movermaxtos();
    }
    if (event.key == "6") {
        mvrbot6q();
        movermaxtos();
    }
    if (event.key == "8") {
        mvrbot8q();
        movermaxtos();
    }
}
function teclafinmax() {
    window.addEventListener('keypress' ,function () {
        tecfnmx();
      });
};
// --
function tecfnmn() {
    if (event.key == "2") {
        mvrbot2q();
        movermintos();
        levantartecla5x();
    }
    if (event.key == "4") {
        mvrbot4q();
        movermintos();
        levantartecla5x();
    }
    if (event.key == "5") {
        mvrbot5q();
        movermintos();
        levantartecla5x();
    }
    if (event.key == "6") {
        mvrbot6q();
        movermintos();
        levantartecla5x();
    }
    if (event.key == "8") {
        mvrbot8q();
        movermintos();
        levantartecla5x();
    }
}
function teclafinmin() {
    window.addEventListener('keypress' ,function () {
        tecfnmn();
      });
};
/*--*/
function lev5stop() {
    let mover0 = document.querySelector('#mover0');
    let mover1 = document.querySelector('#mover1');
    let mover2 = document.querySelector('#mover2');
    let mover3 = document.querySelector('#mover3');
    let mover4 = document.querySelector('#mover4');
    let mover5 = document.querySelector('#mover5');
    let mover6 = document.querySelector('#mover6');
    let mover7 = document.querySelector('#mover7');
    let mover8 = document.querySelector('#mover8');
    let mover9 = document.querySelector('#mover9');
    let mover10 = document.querySelector('#mover10');
    let mover11 = document.querySelector('#mover11');
    let mover12 = document.querySelector('#mover12');
    mover0.parentNode.removeChild(mover0); 
    mover1.parentNode.removeChild(mover1); 
    mover2.parentNode.removeChild(mover2); 
    mover3.parentNode.removeChild(mover3); 
    mover4.parentNode.removeChild(mover4); 
    mover5.parentNode.removeChild(mover5); 
    mover6.parentNode.removeChild(mover6); 
    mover7.parentNode.removeChild(mover7); 
    mover8.parentNode.removeChild(mover8); 
    mover9.parentNode.removeChild(mover9); 
    mover10.parentNode.removeChild(mover10); 
    mover11.parentNode.removeChild(mover11); 
    mover12.parentNode.removeChild(mover12); 
    fun50();
}
/*--*/
   function fun50() {
    let cilindro0 = document.querySelector('#cilindro0');
        let positi5a = cilindro0.getAttribute('position');
        let opsitya = Object.values(positi5a);
        let opsity3a = parseInt(opsitya[1]);
        let opsity4a = parseInt(opsitya[2]);
        opsitya[1] = 0;
        opsitya[2] = opsity4a;
    let position = document.createAttribute('position');
       let qwea = JSON.stringify(opsitya);
      let qwe1a = JSON.stringify(qwea);
       let qwe2a = qwe1a.replace(/{/g,'');
       let qwe3a = qwe2a.replace(/}/g,'');
       let qwe4a = qwe3a.replace(/z/g,'');
       let qwe5a = qwe4a.replace(/,/g,' ');
       let qwe6a = qwe5a.replace(/:/g,'');
       let qwe7a = qwe6a.replace(/x/g,'');
       let qwe8a = qwe7a.replace(/y/g,'');
       let qwe9a = qwe8a.replace(/"/g,'');
       let qwe10a = qwe9a.replace(/]/g,'');
      let qwe11a = qwe10a.slice(1);
       position.value = qwe11a;
       cilindro0.setAttributeNode(position);
        fun51();
   }
   function fun51() {
    let cilindro1 = document.querySelector('#cilindro1');
    let positi5a = cilindro1.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
    opsitya[1] = 0.5;
    opsitya[2] = opsity4a;
let position = document.createAttribute('position');
   let qweb = JSON.stringify(opsitya);
  let qwe1b = JSON.stringify(qweb);
   let qwe2b = qwe1b.replace(/{/g,'');
   let qwe3b = qwe2b.replace(/}/g,'');
   let qwe4b = qwe3b.replace(/z/g,'');
   let qwe5b = qwe4b.replace(/,/g,' ');
   let qwe6b = qwe5b.replace(/:/g,'');
   let qwe7b = qwe6b.replace(/x/g,'');
   let qwe8b = qwe7b.replace(/y/g,'');
   let qwe9b = qwe8b.replace(/"/g,'');
   let qwe10b = qwe9b.replace(/]/g,'');
  let qwe11b = qwe10b.slice(1);
   position.value = qwe11b;
        cilindro1.setAttributeNode(position);
        fun52();
    }
   function fun52() {
    let cilindro2 = document.querySelector('#cilindro2');
    let positi5a = cilindro2.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
    opsitya[1] = 0.25;
    opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro2.setAttributeNode(position);
        fun53();
   }
   function fun53() {
    let cilindro3 = document.querySelector('#cilindro3');
    let positi5a = cilindro3.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
    opsitya[1] = 0.75;
    opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro3.setAttributeNode(position);
        fun54();
   }
   function fun54() {
    let cilindro4 = document.querySelector('#cilindro4');
    let positi5a = cilindro4.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
        opsitya[1] = 1;
        opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro4.setAttributeNode(position);
        fun55();
   }
   function fun55() {
    let cilindro5 = document.querySelector('#cilindro5');
    let positi5a = cilindro5.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
        opsitya[0] = opsitya[0] + 0.15;
        opsitya[1] = 1.75;
        opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro5.setAttributeNode(position);
        fun56();
   }
   function fun56() {
    let cilindro6 = document.querySelector('#cilindro6');
    let positi5a = cilindro6.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
        opsitya[0] = opsitya[0] + 0.3;
        opsitya[1] = 2.75;
        opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro6.setAttributeNode(position);
        fun57();
   }
   function fun57() {
    let cilindro7 = document.querySelector('#cilindro7');
    let positi5a = cilindro7.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
    opsitya[0] = opsitya[0] + 0.35;
    opsitya[1] = 3.5;
    opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro7.setAttributeNode(position);
        fun58();
   }
   function fun58() {
    let cilindro8 = document.querySelector('#cilindro8');
    let positi5a = cilindro8.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
        opsitya[0] = opsitya[0] + 0.3;
        opsitya[1] = 3.7;
        opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro8.setAttributeNode(position);
        fun59();
   }
   function fun59() {
    let cilindro9 = document.querySelector('#cilindro9');
    let positi5a = cilindro9.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
        opsitya[0] = opsitya[0] + 0.5;
        opsitya[1] = 4;
        opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro9.setAttributeNode(position);
        fun510();
   }
   function fun510() {
    let cilindro10 = document.querySelector('#cilindro10');
    let positi5a = cilindro10.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
        opsitya[0] = opsitya[0] + 0.5;
        opsitya[1] = 4.15;
        opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro10.setAttributeNode(position);
        fun511();
   }
   function fun511() {
    let cilindro11 = document.querySelector('#cilindro11');
    let positi5a = cilindro10.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity2a = parseInt(opsitya[0]);
    let opsity4a = parseInt(opsitya[2]);
        opsitya[1] = 3.65;
        opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro11.setAttributeNode(position);
        fun512();
   }
   function fun512() {
    let cilindro12 = document.querySelector('#cilindro12');
    let positi5a = cilindro12.getAttribute('position');
    let opsitya = Object.values(positi5a);
    let opsity3a = parseInt(opsitya[1]);
    let opsity4a = parseInt(opsitya[2]);
    opsitya[0] = opsitya[0] + 0.5;
       opsitya[1] = 3.25;
        opsitya[2] = opsity4a;
let position = document.createAttribute('position');
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
   let qwe10 = qwe9.replace(/]/g,'');
  let qwe11 = qwe10.slice(1);
   position.value = qwe11;
        cilindro12.setAttributeNode(position);
   }
//--
function levant5x() {
        if (event.key == "0") {
            lev5stop();
        }
    }
function levantartecla5x(){                                   
    window.addEventListener('keypress' ,function () { 
        levant5x();
      });
    };
/*--*/
    function tec123() {
      if (event.key == "9") {
          teclafinmax();
      }
      if (event.key == "1") {
        teclafinmin();        
    }
    if (event.key == "-") {
        inclinara();
        movermaxtos();
    }
     }
function tecla51() {
    window.addEventListener('keypress' ,function () {
        tec123();
      });
};
function tec5() {
    if (event.key == "5") {
        tecla51();
    }
}
function tecla5() {
    window.addEventListener('keypress' ,function () {
        tec5();
      });
};
// ..mover robot cruz fin
// var procesoID;
// function tiempo() {
//     console.clear();
// }
// procesoID = setInterval(tiempo, 60000);