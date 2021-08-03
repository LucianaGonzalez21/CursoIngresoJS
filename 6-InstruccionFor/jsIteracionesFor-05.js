function mostrar()
{
	let numero;

	
	for (  ;  ;  ) {
		
		numero = parseInt(prompt("Ingrese un número"));
	
		while (isNaN(numero)) {
			numero = parseInt(prompt("Ingrese un número válido"));
		}

		if (numero == 9) {
			break;
		}
	}



}//FIN DE LA FUNCIÓN