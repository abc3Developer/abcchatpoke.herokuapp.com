
function abcnaverun() {
let posnaveabc = document.querySelector('#posnaveabc');
let att = document.createAttribute('attribute');
let to = document.createAttribute('to');
let dur = document.createAttribute('dur');
att.value = "position";
to.value = "80 0.2 -50";
posnaveabc.setAttributeNode(att);
posnaveabc.setAttributeNode(to);
dur.value = "100000";
posnaveabc.setAttributeNode(dur);
}


// naveabc
function salt() {
    let playerabc = document.querySelector('#player');
    let saltar = document.querySelector('#saltar');
       let ids = document.createAttribute('id');
    //    let attrs = document.createAttribute('attribute');
       let tos = document.createAttribute('to');
      playerabc.appendChild(saltar);
      ids.value = "saltar";
      saltar.setAttributeNode(ids);
      tos.value = "0 3 0";
      saltar.setAttributeNode(tos);
      attrs.value = "position";
      saltar.setAttributeNode(attrs);
  }
  function satl() {
      if (event.key == "b") {
          salt();
      }
      if (event.key == "B") {
          salt();
      }
  }
  function saltarr() {
      window.addEventListener('keypress' ,function () {
      satl();
        });
  }
//   ..saltar fin
/**
const funcionInit = () => {
if (!"geolocation" in navigator) {
return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
}

const $latitud = document.querySelector("#latitud"),
$longitud = document.querySelector("#longitud");


const onUbicacionConcedida = ubicacion => {
console.log("Tengo la ubicación: ", ubicacion);
const coordenadas = ubicacion.coords;
$latitud.innerText = coordenadas.latitude;
$longitud.innerText = coordenadas.longitude;
}
const onErrorDeUbicacion = err => {

$latitud.innerText = "Error obteniendo ubicación: " + err.message;
$longitud.innerText = "Error obteniendo ubicación: " + err.message;
console.log("Error obteniendo ubicación: ", err);
}

const opcionesDeSolicitud = {
enableHighAccuracy: true, // Alta precisión
maximumAge: 0, // No queremos caché
timeout: 5000 // Esperar solo 5 segundos
};

$latitud.innerText = "Cargando...";
$longitud.innerText = "Cargando...";
navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);

};
document.addEventListener("DOMContentLoaded", funcionInit);

var procesoID;
function tiempo() {
}
procesoID = setInterval(tiempo, 10000);

 */