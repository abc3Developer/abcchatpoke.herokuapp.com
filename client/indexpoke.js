var abc0 = 0;
var abc = abc0;
var abc122 = 0;
var player = document.querySelector('#player');
var selecgimnasio = document.querySelector('#selecgimnasio');
var opcionesgim = document.querySelector('#opcionesgim');
var comenzar = document.querySelector('#comenzar');
var atras = document.querySelector('#atras');
var btnsub = document.querySelector('#btnsub');
var btnsub2 = document.querySelector('#btnsub2');
var btnbaj = document.querySelector('#btnbaj');
var btnbaj2 = document.querySelector('#btnbaj2');
var puerta1 = document.querySelector('#puerta1');
var puerta2 = document.querySelector('#puerta2');
var puerta3 = document.querySelector('#puerta3');
var puerta4 = document.querySelector('#puerta4');
var puerta5 = document.querySelector('#puerta5');
var puerta6 = document.querySelector('#puerta6');
var puerta7 = document.querySelector('#puerta7');


AFRAME.registerComponent('puertas-events', {
  init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
      puerta1 = document.querySelector('#puerta1');
      let positionnavity3 = document.createAttribute('position');
      positionnavity3.value = "7.8 1.3 -16.4";
      puerta1.setAttributeNode(positionnavity3);
      let positionnavity4 = document.createAttribute('rotation');
      positionnavity4.value = "0 45 0;";
      puerta1.setAttributeNode(positionnavity4);
      
    })}});





function tierra() {
    selecgimnasio = document.querySelector('#selecgimnasio');
    let positionnavity1 = document.createAttribute('text-geometry');
    positionnavity1.value = "value:TIERRA";
    selecgimnasio.setAttributeNode(positionnavity1);
    let positionnavity5 = document.createAttribute('position');
    positionnavity5.value = "-2 0.8 0.5";
    selecgimnasio.setAttributeNode(positionnavity5);
}
function mar() {
    opcionesgim = document.querySelector('#opcionesgim');
    let positionnavity2 = document.createAttribute('text-geometry');
    positionnavity2.value = "value:MAR";
    opcionesgim.setAttributeNode(positionnavity2);
}
function aire() {
    comenzar = document.querySelector('#comenzar');
    let positionnavity3 = document.createAttribute('text-geometry');
    positionnavity3.value = "value:AIRE";
    comenzar.setAttributeNode(positionnavity3);
}
function tierra2() {
    selecgimnasio = document.querySelector('#selecgimnasio');
    let positionnavity1 = document.createAttribute('text-geometry');
    positionnavity1.value = "value:SELECCIONAR GIMNASIO";
    selecgimnasio.setAttributeNode(positionnavity1);
}
function mar2() {
    opcionesgim = document.querySelector('#opcionesgim');
    let positionnavity2 = document.createAttribute('text-geometry');
    positionnavity2.value = "value:OPCIONES";
    opcionesgim.setAttributeNode(positionnavity2);
}
function aire2() {
    comenzar = document.querySelector('#comenzar');
    let positionnavity3 = document.createAttribute('text-geometry');
    positionnavity3.value = "value:COMENZAR";
    comenzar.setAttributeNode(positionnavity3);
}

function teclado() {
    selecgimnasio = document.querySelector('#selecgimnasio');
    let positionnavity1 = document.createAttribute('text-geometry');
    positionnavity1.value = "value:TECLADO";
    selecgimnasio.setAttributeNode(positionnavity1);
    let positionnavity3 = document.createAttribute('position');
    positionnavity3.value = "-1 0.8 0.5";
    selecgimnasio.setAttributeNode(positionnavity3);
}
function puestodecombate() {
    opcionesgim = document.querySelector('#opcionesgim');
    let positionnavity3 = document.createAttribute('position');
    positionnavity3.value = "-4 -0.4 0.5";
    opcionesgim.setAttributeNode(positionnavity3);
    let positionnavity2 = document.createAttribute('text-geometry');
    positionnavity2.value = "value:PUESTO DE COMBATE";
    opcionesgim.setAttributeNode(positionnavity2);
   
}
function pokemons() {
    comenzar = document.querySelector('#comenzar');
    let positionnavity3 = document.createAttribute('text-geometry');
    positionnavity3.value = "value:POKEMONS";
    comenzar.setAttributeNode(positionnavity3);
}
AFRAME.registerComponent('selecgimnasio-events', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function () {
      if(abc122 == 0){  
        tierra();
        mar();
        aire();}
      })}});

      AFRAME.registerComponent('opcionesgim-events', {
        init: function () {
            var el = this.el;
            el.addEventListener('click', function () {
          if(abc122 == 0){  
            teclado();
            puestodecombate();
            pokemons();}
          })}});
      
      AFRAME.registerComponent('atras-events', {
        init: function () {
            var el = this.el;
            el.addEventListener('click', function () {
            tierra2();
            mar2();
            aire2();
            selecgimnasio = document.querySelector('#selecgimnasio');
            let positionnavity3 = document.createAttribute('position');
            positionnavity3.value = "-4 0.8 0.5";
            selecgimnasio.setAttributeNode(positionnavity3);
            opcionesgim = document.querySelector('#opcionesgim');
            let positionnavity4 = document.createAttribute('position');
            positionnavity4.value = "-1.8 -0.4 0.5";
            opcionesgim.setAttributeNode(positionnavity4);
            
          })}});
      /*
      
      el.addEventListener('mouseleave', function () {
      
        function abc01() {
            abc0++;
            if (abc0 == 0) {
                abc = 'black';
            }
            if (abc0 == 1) {
                abc = 'red';
            }
            if (abc0 == 2) {
                abc = 'yellow';
            }
            if (abc0 == 3) {
                abc = 'green';
            }
          
        }
        abc01();
        el.setAttribute('color', abc);
          console.log("mouseleave");
      });
      el.addEventListener('click', function () {
        el.setAttribute('scale', {x: numAleatorio(1,5), y: numAleatorio(1,3), z: numAleatorio(1,3)});
          console.log("click");
      });

      function numAleatorio(min, max) {
        return Math.round(Math.random() * (max - min) + min);
        }
    }
      */

AFRAME.registerPrimitive('a-ocean', {
    // Attaches the `ocean` component by default.
    // Defaults the ocean to be parallel to the ground.
    defaultComponents: {
      ocean: {},
      rotation: {x: -90, y: 0, z: 0}
    },
  
    // Maps HTML attributes to the `ocean` component's properties.
    mappings: {
      width: 'ocean.width',
      depth: 'ocean.depth',
      density: 'ocean.density',
      color: 'ocean.color',
      opacity: 'ocean.opacity'
    }
});

AFRAME.registerComponent('cesped-events', {
    init: function () {
      var el = this.el;  //
      el.addEventListener('click', function () {
       
        
      })}});



  