var procesoID;
function tiempo() {
    console.clear();
}
procesoID = setInterval(tiempo, 60000);

function solity() {
    let sol = document.querySelector('#sol');
let posisol = document.createAttribute('position');
posisol.value = "0 -10000 0";
sol.setAttributeNode(posisol);
}

var procesoID2;
function tiemponoche() {
    let dia = document.querySelector('#dia');
    let coldia = document.createAttribute('material');
    coldia.value = "color:rgba(54, 138, 207, 0.883);opacity:0";
    dia.setAttributeNode(coldia);
    console.log('noche');
    solity();
}
procesoID2 = setInterval(tiemponoche, 3600000);


var procesoID3;
function tiempodia() {
    let dia = document.querySelector('#dia');
    let coldia = document.createAttribute('material');
    coldia.value = "color:rgba(54, 138, 207, 0.883);opacity:1";
    dia.setAttributeNode(coldia);
    console.log('dia');
}
procesoID3 = setInterval(tiempodia, 1800000);




