function mostrar()
{
	
		for (  ;  ;  ) {

			numero = parseInt(prompt("Ingrese un número"));
			
			while (isNaN(numero)) {
				numero = parseInt(prompt("Ingrese un número válido"));
				}

				console.log(numero);
				
			if (numero == 9) {
				break;
			}


		}





	
	// mostrar los numeros pares del 0 al 20
	
	/* for ( let numero = 0; numero <=20; numero++) {

		if (!(numero % 2 == 0)) {
			continue;
		}

		console.log(numero);

	} */



}//FIN DE LA FUNCIÓN