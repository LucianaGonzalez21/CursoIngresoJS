/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave:")

	while (clave != "utn750") {

		clave = prompt ("Clave incorrecta. Ingrese la clave:")

	}
	
	alert("Clave correcta");
	
}//FIN DE LA FUNCIÓN
