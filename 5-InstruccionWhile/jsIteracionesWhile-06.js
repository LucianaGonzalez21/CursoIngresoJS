function mostrar()
{
	/*let suma;
	let promedio;
	let numero;
	let acumulador;
	let i = 0;*/

	let num1;
	let num2;
	let num3;
	let num4;
	let num5;
	let promedio;
	let suma;
	
	 num1 = parseInt(prompt('Ingrese un numero'));
	 num2 = parseInt(prompt('Ingrese un numero'));
	 num3 = parseInt(prompt('Ingrese un numero'));
	 num4 = parseInt(prompt('Ingrese un numero'));
	 num5 = parseInt(prompt('Ingrese un numero'));

	suma = num1 + num2 + num3 + num4 + num5;

	promedio = suma / 5;

	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdPromedio').value = promedio;













	

	
	/* numero1 = parseInt(prompt('Ingrese un numero'));
	numero2 = parseInt(prompt('Ingrese un numero'));
	numero3 = parseInt(prompt('Ingrese un numero'));
	numero4 = parseInt(prompt('Ingrese un numero'));
	numero5 = parseInt(prompt('Ingrese un numero')); 
	suma = numero1 + numero2 + numero3 + numero4 + numero5;
	*/

	/*
	acumulador = 0;

	while( i < 5) {
		 
		numero = parseInt(prompt('Ingrese un numero'));

		acumulador = acumulador + numero;				//voy guardando en el acumulador para no reemplazar el valor de numero. no se pisa lo que tiene, sino que agrego mas

		i++;
	}

	
	document.getElementById('txtIdSuma').value = acumulador;	// si no inicializo la variable acumulador, me devuelve NaN porque undefined + number = Nan

	document.getElementById('txtIdPromedio').value = acumulador/5;

	*/

}//FIN DE LA FUNCIÓN