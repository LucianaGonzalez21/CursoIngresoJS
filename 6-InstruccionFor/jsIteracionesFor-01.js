function mostrar()
{
	
	//pedile numeros al usuario hasta que la suma sea igual o mayor 1000
	// mostrar suma y cantidad de numeros que se pidieron

	let numero = 0;
	let contador = 0;
	let acumulador = 0;
	

	while (acumulador < 1000) {
		
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN (numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
		acumulador += numero;
		contador++;
	}

	alert("la suma es " + acumulador + " y se pidieron " + contador + " números");
	




	/* for (let contador = 1; contador < 11; contador++)
	{
		document.write(contador + "<br>");
	} */


}