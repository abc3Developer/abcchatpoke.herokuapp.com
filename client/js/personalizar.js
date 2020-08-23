var colorido0 = "red";
var colorido1 = "yellow";
var colorido2 = "green";
var colorido3 = "orange";
var colorido4 = "white";
function personalizar0() {
    let cuerpo1 = document.querySelector('#cuerpo1');
    let colornew0 = document.createAttribute('color');
       colornew0.value = colorido0;
       cuerpo1.setAttributeNode(colornew0);
       pers0();
}
function pers0() {
    let cuerpo0 = document.querySelector('#cuerpo0');
    let colornew0a = document.createAttribute('color');
    colornew0a.value = colorido0;
    cuerpo0.setAttributeNode(colornew0a);
}
function personalizar1() {
    let cuerpo1 = document.querySelector('#cuerpo1');
    let colornew1 = document.createAttribute('color');
       colornew1.value = colorido1;
       cuerpo1.setAttributeNode(colornew1);
       pers1();
}
function pers1() {
    let cuerpo0 = document.querySelector('#cuerpo0');
    let colornew1a = document.createAttribute('color');
    colornew1a.value = colorido1;
    cuerpo0.setAttributeNode(colornew1a);
}
function personalizar2() {
    let cuerpo1 = document.querySelector('#cuerpo1');
    let colornew2 = document.createAttribute('color');
       colornew2.value = colorido2;
       cuerpo1.setAttributeNode(colornew2);
       pers2();
}
function pers2() {
    let cuerpo0 = document.querySelector('#cuerpo0');
    let colornew2a = document.createAttribute('color');
    colornew2a.value = colorido2;
    cuerpo0.setAttributeNode(colornew2a);
}
function personalizar3() {
    let cuerpo1 = document.querySelector('#cuerpo1');
    let colornew3 = document.createAttribute('color');
       colornew3.value = colorido3;
       cuerpo1.setAttributeNode(colornew3);
       pers3();
}
function pers3() {
    let cuerpo0 = document.querySelector('#cuerpo0');
    let colornew3a = document.createAttribute('color');
    colornew3a.value = colorido3;
    cuerpo0.setAttributeNode(colornew3a);
}
function personalizar4() {
    let cuerpo1 = document.querySelector('#cuerpo1');
    let colornew4 = document.createAttribute('color');
       colornew4.value = colorido4;
       cuerpo1.setAttributeNode(colornew4);
       pers4();
}
function pers4() {
    let cuerpo0 = document.querySelector('#cuerpo0');
    let colornew4a = document.createAttribute('color');
    colornew4a.value = colorido4;
    cuerpo0.setAttributeNode(colornew4a);
}
function personalc() {
    if (event.key == "1") {
        personalizar0();
    }
    if (event.key == "2") {
        personalizar1();
    }
    if (event.key == "3") {
        personalizar2();
    }
    if (event.key == "4") {
        personalizar3();
    }
    if (event.key == "5") {
        personalizar4();
    }
}
function teclasc() {
    window.addEventListener('keypress' ,function () {
      personalc();
      });
};
function personal() {
    if (event.key == "c") {
        teclasc();
    }
    if (event.key == "C") {
        teclasc();
    }
}
function teclac() {
    window.addEventListener('keypress' ,function () {
      personal();
      });
}

