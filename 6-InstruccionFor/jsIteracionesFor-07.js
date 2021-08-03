function mostrar()
{
	let numero;
	let cantidadDivisores =0;

	numero = parseInt(prompt("Ingrese un número"));

	while (isNaN(numero) || numero <0) {
		numero = parseInt(prompt("Ingrese un número válido"));
	}

	for ( let contador = 1; contador <= numero; contador++) {
		if (numero % contador) {
			continue;
		}
		console.log("Divisor " + contador);
		cantidadDivisores++;
	}
	console.log("La cantidad de divisores es: " + cantidadDivisores);


}//FIN DE LA FUNCIÓN