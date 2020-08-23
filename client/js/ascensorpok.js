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



AFRAME.registerComponent('btnsub-events', {
  init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
        player = document.querySelector('#player');
        let positionnavity3 = document.createAttribute('position');
      positionnavity3.value = "12.7 4.8 -26";
      player.setAttributeNode(positionnavity3);
    })}});
    AFRAME.registerComponent('btnbaj-events', {
      init: function () {
          var el = this.el;
          el.addEventListener('click', function () {
            player = document.querySelector('#player');
            let positionnavity3 = document.createAttribute('position');
            positionnavity3.value = "12.7 2.8 -26";
            player.setAttributeNode(positionnavity3);
        })}});