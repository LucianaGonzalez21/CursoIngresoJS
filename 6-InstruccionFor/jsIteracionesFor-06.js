function mostrar()
{
	let contadorPares = 0;

	numero = parseInt(prompt("Ingrese un número"));
	
	while (isNaN(numero) || numero < 0) {			// validar que sea positivo
		numero = parseInt(prompt("Ingrese un número válido"));
	}
	
	for ( let i = 1; i <= numero; i++ ) {	//pide empezar en 1
											// <= numero
											// hacerlo con continue
		
		if (i % 2 ) {		// por que (numero%2) ingresa a los impares?
			continue;							// contador o numero % 2 ??
		}
								
		contadorPares++;
		console.log(" contador " + contadorPares);
		console.log(i);	//revisar
								// pide mostrar cada numero par encontrado y el contador
								

	}





}//FIN DE LA FUNCIÓN