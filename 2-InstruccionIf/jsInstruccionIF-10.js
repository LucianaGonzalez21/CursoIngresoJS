function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let min;
	let max;

	min = 0;
	max = 10;

	numero = Math.floor((Math.random() * (max - min) ) + min);

	if (numero >= 9) {
		alert('EXCELENTE ' + numero);
	} else if (numero >= 4) {
		alert('APROBO ' + numero);
	} else {
		alert('Vamos, la próxima se puede ' + numero);
	}

}//FIN DE LA FUNCIÓN