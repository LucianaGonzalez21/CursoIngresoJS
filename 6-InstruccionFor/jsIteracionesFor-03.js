function mostrar()
{
	let cantidad;

	cantidad = parseInt(prompt("Ingrese la cantidad de veces que quiere el mensaje: "));
	
	while (isNaN(cantidad)) {
		cantidad = parseInt(prompt("Ingrese un número válido: "));
	}
	
	while (cantidad < 0) {
		cantidad = parseInt(prompt("Ingrese un número positivo: "));
	}

	for ( let contador = 0; contador < cantidad; contador++ ) {
		console.log("Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN