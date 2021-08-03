/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = prompt("Ingrese un número del 0 al 9");

	while ( !(numero >= 0 && numero <=9)) {

		numero = prompt("Incorrecto. Ingrese un número del 0  al 9");
	}
	
	document.getElementById("txtIdNumero").value= numero;
	
}//FIN DE LA FUNCIÓN