/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//estrategia de resolución
	//declaración de variables
	//leer el sueldo 
	//calcular el aumento
	//obtengo el nuevo sueldo
	//muestro el resultado

	let sueldo;
	let aumento;
	let resultado;

	sueldo = parseFloat(document.getElementById('txtIdSueldo').value);

	aumento = sueldo * 0.1;

	resultado = sueldo + aumento;

	document.getElementById('txtIdResultado').value = resultado;

}




