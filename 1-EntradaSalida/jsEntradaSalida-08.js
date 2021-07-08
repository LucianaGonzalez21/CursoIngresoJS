/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numero1;
	let numero2;
	let resto;

	//declaro las variables
	numero1= document.getElementById('txtIdNumeroDividendo').value;
	numero2 = document.getElementById('txtIdNumeroDivisor').value; 

	//convierto el tipo de valor de str a number
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	//realizo la operación matemática para calcular el resto
	resto = numero1%numero2;

	//muestro el resultado
	alert(`El resto es ${resto}`);



}
