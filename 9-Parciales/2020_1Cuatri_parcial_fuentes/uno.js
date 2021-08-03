/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra 	//cuantas compras de cada tipo
c) Cuántas unidades de jabones hay en total 


-----------
esttrategia de resolucion
1 - declarar variables(tipo , cantidad, precio, marca, fabricante). en cada iteracion pido estos datos (cada iteracion es un prodcto)
estas las pido al usuario;
leyendo las consignas, creo las siguientes variables:
punto a) precioMinimoAlcohol, cantidadAlcoholBarato, fabricanteAlcoholBarato, flagAlcohol (para saber si se ingrsaron alcogoles o no)
punto b) contadorBarbijos ,contadorAlcohol, contadorJabon, maximoUnidades, acumuladorBarbijos, acumuladorJabon, acumuladorAlcohol, promedio
punto c) acumuladorJabones

2- generar un bucle que se repita 5 veces (for, porque se cuantas veces se repite)
	cosas que hacer cinco veces (dentro del bucle):
	datos del producto
		pido tipo y valido en el momento (no reclamarle al final)
		pido precio y valido
		pido cantidad y valido
		pido marca y valido que no este vacio
		pido fabricante y valido que no este vacio
	para el punto a, me fijo si el producto es de tipo alcohol y si es asi, la primer vez que ingresa alcohol guardo el precio en precioBarato y las siguientes veces que ingrese un alcohol, lo comparo con el precio del alcohol barato
	tambien guardo cantidad y fabricante
	para el punto b, me fijo de que tipo es el producto y actualizo acumulador y contador de ese tipo
	para el punto c, ya lo hice en el b

3- cosas para hacer despues del for,
	para el punto a, no necesito hacer calculos
	para el punto b, me tengo que fijar cual es el mayor acumulador y sacar el promedio para ese tipo
	para el punto c, no necesito hacer calculos

4 - muestro los resultados

*/



function mostrar()
{
	let tipo;
	let cantidad;
	let precio;
	let marca;
	let fabricante;
	let precioMinimoAlcohol;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let flagAlcohol = 1;
	let contadorBarbijo=0;
	let contadorAlcohol=0;
	let contadorJabon=0;
	let maximoUnidades;
	let acumuladorBarbijo=0;
	let acumuladorJabon=0;
	let acumuladorAlcohol=0;
	let promedio;

	for (let i = 0; i < 5 ; i++) {

		tipo = prompt("Ingrese el tipo (barbijo/alcohol/jabón)").toLowerCase();

		while ( !(tipo == "jabón" || tipo == "alcohol" || tipo == "barbijo")) {			//tipo != barbijo && tipo != alcohol && tipo != jabon
			tipo = prompt("Error. Ingrese un tipo válido (barbijo/alcohol/jabón").toLowerCase();	//OJO validacion es con while
		}

		precio = parseInt(prompt("Ingrese el precio (entre 100 y 300)"));

		while (isNaN (precio) || precio > 300 || precio < 100) {		// !(precio >= 100 && precio <=300)
			precio = parseInt(prompt("Error. Ingrese un precio entre 100 y 300"));		// OJO con los && y los ||
		} 

		cantidad = parseInt(prompt("Ingrese la cantidad (entre 1 y 1000)"));

		while ( isNaN(cantidad) || cantidad <= 0 || cantidad >1000) {		
			cantidad = parseInt(prompt("Error. Ingrese la cantidad (entre 1 y 1000"));
		}	

		marca = prompt("Ingrese la marca");

		while (marca.length == 0) {			//largo de la cadena igual a cero . otra manera es (marca == "")
			marca = prompt("No válido. Ingrese marca")
		}

		fabricante = prompt("Ingrese fabricante");

		while (fabricante.length == 0) {
			fabricante =  prompt("No válido. Ingrese fabricante");
		}
		

		if ( tipo == "alcohol"){
			if (flagAlcohol == 1 || precio < precioMinimoAlcohol) {			//si es igual a 1, es la primera vez que entro
				precioMinimoAlcohol = precio;
				fabricanteAlcoholBarato = fabricante;
				cantidadAlcoholBarato = cantidad;
				flag = 0;									// solo voy a volver a ingresar cuando el alcohol sea mas barato que el precio que tengo guardado
			}
			contadorAlcohol++;
			acumuladorAlcohol += cantidad;

		} 	else if (tipo == "barbijo") {
			
			contadorBarbijo++;
			acumuladorBarbijo += cantidad;

		} 	else {
			
			acumuladorJabon += cantidad;
			contadorJabon++;

		}

	} // fin del for


	if (acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo) {
		maximoUnidades = "Jabon";
		promedio = acumuladorJabon / contadorJabon;
	} else if (acumuladorAlcohol >= acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo) {
		maximoUnidades = "Alcohol";
		promedio = acumuladorAlcohol / contadorAlcohol;
	} else {
		maximoUnidades = "Barbijo";
		promedio = acumuladorBarbijo / contadorBarbijo;
	}		// no tengo que hacer validacion, poruqe para entrar a alguna condicion. tuve que haber comprado


	if (flag == 1) {
		document.write("a) no se registraron alcoholes");
	} else {
		document.write("a) Precio alcohol barato " + precioMinimoAlcohol + " fabricante: " + fabricanteAlcoholBarato + " cantidad " + cantidadAlcoholBarato + "<br>" );
	}
	document.write("b) Tipo con mas unidades " + maximoUnidades + " promedio " + promedio.toFixed(2) + "<br>");		// tofixed = cantidad de decimales
	document.write("c) Cantidad de jabones " + acumuladorJabon + "<br>");
}
