
function mostrar()
{
	/*
	Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total 
	*/

	/*
	1- declaro variables
		las que pido al usuario ----> tipo, precio, cantidad, marca, fabricante
		las que necesito para resolver ---> 
		a) precioJabonCaro, acumJabonCaro, fabricanteJabonCaro, flag
		b) acumJabon, acumBarbijo, acumAl, contadorJabon, contadorBarbijo, contadorAl, maxTipoUnidades, promedio
		c) contadorBarbijos (ya la tengo)

	2- genero un bucle for (5)
		pido y valido tipo
		pido y valido precio
		pido y valido cantidad
		pido marca
		pido fabricante

		a) guardo el primer precio del jabon como jabonCaro y comparo los siguientes que ingrese
			del mas caro, acumulo la cantidad y guardo el fabicante
		b) segun el tipo que sea, acumulo la cantidad en su variable
		c) acumulo en el acumBarbijo

	----fin for----

	3- 
	`	b) comparo quien tiene mas unidades en el acum, lo guardo en maxTipounidades, y calculo el promedio como maxTipoUnidades/contador de ese tipo
		
	4- muestro resultados

	*/


	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let preciojabonCaro;
	let acumJabonCaro = 0;
	let fabricanteJabonCaro;
	let flag = 1;
	let acumJabon = 0;
	let acumBarbijo = 0;
	let acumAl = 0;
	let contadorJabon = 0;
	let contadorBarbijo = 0;
	let contadorAl = 0;
	let maxTipoUnidades;
	let promedio;
	let tipoMayorUn;
	
	for (let i = 0; i < 5; i++) {
		tipo = prompt("Ingrese el tipo de producto(barbijo, alcohol, jabon):").toLowerCase();
		
	
		while(tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {
			tipo = prompt("Error. Reingrese el tipo de producto(barbijo, alcohol, jabon):").toLowerCase();
		}

		cantidad = parseInt(prompt("Ingrese la cantidad:"));
		
		while  (isNaN(cantidad) || cantidad >1000 || cantidad <=0) {
			cantidad = parseInt(prompt("Inválido. Reingrese la cantidad (1-1000):"));
		}

		precio = parseInt(prompt("Ingrese el precio (100-300)"));
		
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseInt(prompt("Inválido. Reingrese el precio (100-300)"));
		}

		marca = prompt("Ingrese la marca");
		
		fabricante = prompt("Ingrese el fabricante");


		if (tipo == "alcohol") {
			acumAl += cantidad;
			contadorAl++;
		} else if ( tipo == "jabon") {
			if(flag == 1 || precio > preciojabonCaro) {
				preciojabonCaro = precio;
				acumJabonCaro = cantidad;
				fabricanteJabonCaro = fabricante;
				flag = 0;
			}
			acumJabon += cantidad;
			contadorJabon++;
		} else {
			acumBarbijo += cantidad;
			contadorBarbijo++;
		}
	}

	if (acumJabon > acumBarbijo && acumJabon > acumAl) {
		maxTipoUnidades = acumJabon;

		if (contadorJabon == 0) {
			promedio = "No se registraron jabones";
		} else {
		promedio = maxTipoUnidades / contadorJabon;
		}

		tipoMayorUn = "jabon";
	} else if ( acumAl >= acumJabon && acumAl > acumBarbijo) {
		maxTipoUnidades = acumAl;

		if (contadorAl == 0) {
			promedio ="No se registraron alcoholes";
		} else {
		promedio = maxTipoUnidades / contadorAl;
		}
		
		tipoMayorUn = "alcohol";
	} else {
		maxTipoUnidades = acumBarbijo;

		if (contadorBarbijo == 0) {
			promedio = "No se registraron barbijos";
		} else {
		promedio = maxTipoUnidades / contadorBarbijo;
		}

		tipoMayorUn = "barbijos";
	}

	
	document.write("a) El mas caro de los jabones cuesta: " + preciojabonCaro + " La cantidad de jabones caros es: " + acumJabonCaro + " El fabricante es: " + fabricanteJabonCaro + "<br>");
	document.write("b) El tipo con más unidades es: " + tipoMayorUn + "El promedio por compra es: " + promedio + "<br>");
	document.write("c) La cantidad de barbijos que se compró en total es: " + acumBarbijo + "<br>");
	
}
