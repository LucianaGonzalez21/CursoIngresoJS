/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	// numeroUno = parseInt(document.getElementById('txtIdNumeroUno).value); toma la string, la convirte a número y se lo asigna a la variable numeroUno

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert(`La suma es ${suma}`);

}

