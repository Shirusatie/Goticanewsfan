function muestraOculta() {
var idEnlace = this.id;
var arrayEnlace = idEnlace.split('_');
var numParrafo = arrayEnlace[1];
var parrafo = document.getElementById('parrafo_' + numParrafo);

switch(parrafo.style.display) {
case 'block':     
case '':
parrafo.style.display= 'none';
this.innerHTML = 'Leer más...';
break;
case 'none':
parrafo.style.display= 'block';
this.innerHTML = 'Leer menos...';
break;
}
} 
window.onload = function() {
          var enlaces = document.getElementsByTagName('a');
         for (i in enlaces) {
                    enlaces[i].onclick= muestraOculta;
          }
};