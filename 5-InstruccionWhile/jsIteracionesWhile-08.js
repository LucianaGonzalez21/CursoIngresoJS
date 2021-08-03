/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// estrategia
	// 1- declaro variables (respuesta/numero/acumulador de positivos/acumulador de negativos)
	// 2- generar un bucle del tipo mientras el usuario quiera (do while con pregunta prompt)
	// cosas que tengo que hacer del bucle
	// 2.1- pedir el número
	// 2.2- analizar el signo del número (0 es positivo) (generar un scope para los positivos y un scope para los negativos)
	// 2.3- sumo los positivos/ multiplico los negativos
	// -----fin bucle-----
	// 3- mostrar los resultados

	let numero;
	let numerosNegativos= 1;
	let numerosPositivos =0;
	let respuesta;
	let flag = 1;		//no está bien el flag

	do {
		numero = parseInt(prompt("Ingrese un número"));
		if (numero >= 0) {
			numerosPositivos += numero;
		} else {
			numerosNegativos *= numero; 
			flag = 0;
		}
		respuesta = prompt("Desea ingresar otro número? si/no").toLowerCase();
	} while (respuesta == "si");
	
	if(flag) {
		numerosNegativos = 0;
	}

	document.getElementById("txtIdSuma").value = numerosPositivos;
	document.getElementById("txtIdProducto").value = numerosNegativos;

}//FIN DE LA FUNCIÓN



