/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	let numero;
	let contador = 0;
	let acumulador = 0;

	do {
		numero = parseInt(prompt('Ingrese un número'));
		acumulador += numero;
		contador ++;
		pregunta = prompt("Desea ingresar otro número? si/no");
	} while (pregunta == "si" );

	
	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador / contador;
	


















	/* let seguir = 's'; 
	let numero;
	let acumulador = 0;
	let contador = 0;


	while(seguir == 's') {
		
		numero = parseInt(prompt("Ingrese un número"));
		acumulador += numero;

		seguir = prompt("Quiere ingresar otro número?");

		contador++;
	}

	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = acumulador / contador;
	*/

}//FIN DE LA FUNCIÓN