/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let suma;
	
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	suma = numeroUno + numeroDos;

	alert(`La suma es ${suma}`);
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resta;
	
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	resta = numeroUno - numeroDos;

	alert('La resta es ' + resta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let producto;
	
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	producto = numeroUno * numeroDos;

	alert(`El producto es ${producto}`);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let división;
	
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	división = numeroUno / numeroDos;

	alert(`El cociente es ${división}`);
}
