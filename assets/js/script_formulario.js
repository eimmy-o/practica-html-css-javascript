
/*
window. addEventListener ("DOMContentLoaded", function () {
	/*Se usa constante para que el valor del id no sea modificado*/
	/*document hace referencia al HTML*/
	/*getElementById pide que busque el Elemento dento del HTML que tenga el ID que doy
	como parametro
const Btn3 = document.getElementById("BtnPresioname3");
Btn3.addEventListener ("click", function () {
let Lv_Mensaje_3 = "Este mensaje se muestra al presionar el botón: Presioname3 -
Script Externo - ejcutado por medio del ID del botón";
alert (Lv_Mensaje_3) ;

I

});
*/

window.addEventListener("DOMContentLoaded", function() {
	const name = document.getElementById("fNombre");
	name.addEventListener("click", function() {
		let mensaje = "Prueba aquí primer mensaje";
		alert (mensaje) ;
	});

	const correo = document.getElementById("fCorreo");
	correo.addEventListener("click", function() {
		let mensaje = "Prueba aquí segundo mensaje";
		alert (mensaje) ;
	});

	const pais = document.getElementById("fPais");
	pais.addEventListener("change", function() {
		pais.style.backgroundColor="purple";
	});
});

