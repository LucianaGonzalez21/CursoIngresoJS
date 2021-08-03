function mostrar()
{


	let numero;
	let contadorDivisor = 0;

	numero = parseInt(prompt("Ingrese un número"));

	while(isNaN(numero) || numero <0)  {
		numero = parseInt(prompt("Incorrecto. Ingrese un número válido"));
	}

	for ( let i = 1; i <= numero ; i++) {		//tambien puedo hacer i=2; i < numero
												// tambien se que ya no hay divisores luego de la mitad del numero, o sea i < numero/2
		if (numero % i == 0 ) {
			contadorDivisor++;
			console.log(i);
		}

	}
	
	if (contadorDivisor == 2) {					// contadordivisor == 0 (si no logro dividirse por un numro entre 2 y un numero antess del numero ingresado, es primo)
		alert("Es un numero primo");			
	} else {
		alert("No es un número primo");
	}

	
	console.log("La cantidad de divisores es: " + contadorDivisor);

}//FIN DE LA FUNCIÓN