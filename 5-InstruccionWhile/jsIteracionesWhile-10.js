/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let seguir;
	let acumuladorPositivos = 0;
	let contadorPositivos = 0;
	let acumuladorNegativos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let flagPositivo = 0;
	let flagNegativo = 0;

	do {

		numero = parseInt(prompt("Ingrese un número:"));

		while (isNaN(numero)) {
			numero = parseInt("Ingrese un número válido:");
		} 

		if (numero > 0) {
			acumuladorPositivos += numero;
			contadorPositivos++;
			flagPositivo = 1;
		} else if (numero == 0) {
			contadorCeros++;
		} else {
			acumuladorNegativos += numero;
			contadorNegativos++;
			flagNegativo = 1;
		}

		if (numero % 2 == 0) {
			contadorPares++;
		}

		seguir = prompt("Desea ingresar otro numero? si/no");
	} while (seguir == "si");

	//validar que el dividendo sea distinto de cero
	if (flagNegativo == 1) {			// no es necesario la bandera, porque ya tengo un contador de positivos y negativos. if (contadorPositivos != 0) { promedio}
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	if (flagPositivo == 1) {
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	}

	diferencia = contadorPositivos - contadorNegativos;


	console.log("\n Suma de negativos: " + acumuladorNegativos + "Suma de positivos: " + acumuladorPositivos + "Cantidad de negativos: " ${contadorNegativos}. \n Cantidad de positivos: ${contadorPositivos}. \n Cantidad de ceros: ${contadorCeros}. \n Cantidad de números pares: ${contadorPares}. \n Promedio positivos: ${promedioPositivos}. \n Promedio negativos: ${promedioNegativos}. \n Diferencia entre positivos y negativos: ${diferencia}");






































	/*
	//declarar contadores y variables 
	let numero;	
	let respuesta;
	let acumuladorPositivos = 0;
	let contadorPositivos = 0;
	let promedioPositivos;
	let contadorCero =0;
	let acumuladorNegativos =0;
	let contadorNegativos=0;
	let promedioNegativos;
	let diferencia;
	let contadorPares = 0;


	do {
		
		//pido el número
	numero = parseInt(prompt("Ingrese un número"));
	
		//analizo el signo
	if (numero > 0 ) {
		acumuladorPositivos += numero;
		contadorPositivos++;
	} else if ( numero == 0) {
		contadorCero++;
	} else {
		acumuladorNegativos += numero;
		contadorNegativos++;
	}
	
		//analizar si el numero es par y contarlo

	if (numero % 2 == 0) {		// el operador aritmetico tiene mas prioridad que el relacional, por lo tanto primero % y despues ==
		contadorPares++;
	}

		//pregunto si quiere ingresar otro numero
	respuesta = prompt("Desea ingresar otro número? si/no").toLowerCase();
	
	} while (respuesta == "si");

	//calculo promedios y diferencias
	promedioPositivos= acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	diferencia = acumuladorPositivos - acumuladorNegativos;


	//muestro el resultado
	alert(`Suma de negativos: ${acumuladorNegativos}. Suma de positivos: ${acumuladorPositivos}. Cantidad de negativos: ${contadorNegativos}. Cantidad de positivos: ${contadorPositivos}. Cantidad de ceros: ${contadorCero}. Cantidad de números pares: ${contadorPares}. Promedio positivos: ${promedioPositivos}. Promedio negativos: ${promedioNegativos}. Diferencia entre positivos y negativos: ${diferencia}`);
	

	*/
}//FIN DE LA FUNCIÓN