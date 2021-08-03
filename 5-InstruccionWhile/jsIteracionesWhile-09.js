/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	// 1- declarar variables (numero, maximo, minimo, seguir)
	// 2- generar un bucle del tipo mientras el usuario quiera (do while)
	// dentro del bucle:
	// 2.1- pedir un número
	// 2.2- valido el dato (que sea un numero)
	// 2.3- me fijo si es la primera vez
	// 2.3.1- si es la primera vez, asigno el numero a maximo y a minimo
	// 2.3.2- si no es la primera vez, comparo si es un nuevo maximo o un nuevo minimo y de ser asi actualizo la variable maximo o minimo
	// ----fuera del bucle----
	// muestro los resultados

	let numero;
	let minimo;
	let maximo;
	let seguir;
	let flag = 1;

	do {
		numero = parseInt(prompt("Ingrese un número:"));

		while ( isNaN (numero)) {						// si le paso algo que no es numero, me devuelve true
			numero = parseInt(prompt("Ingrese un número válido:")); 	//no olvidar de parsear cuando vuelvo a pedir
		}

		if (flag) {
			maximo = numero;
			minimo = numero;
			flag = 0;			// desactivo la bandera flag = !flag tambien sirve
		} else {
			if (numero > maximo) {
				maximo = numero;
			} else if (numero < minimo) {		//no pierde tiempo preguntando si es menor, si ya es mayor al maximo
				minimo =numero;
			}
		}

		/* 
		if (flag || numero >maximo) {
			maximo = numero;
		}	
		if (flag || numero < minimo) {
			minimo = numero;
			flagg =0;
		}
		*/


		seguir = prompt("Desea ingresar otro número? si/no").toLowerCase();
	} while (seguir == "si");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN