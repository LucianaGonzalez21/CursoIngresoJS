function mostrar()
{
	
	/*
	En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

	/*estrategia
	1- declarar estrategias
		las que le pido al usuario ---> nombre, edad, sexo, estado civil, y temperatura
		las que necesito para resolver
		a) maximoTemperatura, flagTemperatura, nombreMaxTemperatura
		b) contadorHombresMayoresViudos (mayor a 18 años)
		c) contadorHombresSolterosViudos
		d) contadorAncianosFiebre, temperatura
		e) promedio, contadorHombresSolteros, edadHombresSolteros
	2- genero un bucle del tipo hasta que el usuario quiera (do while) 
		pido nombre
		pido y valido edad
		pido y valido sexo
		pido y valido estado civil
		pido y valido temperatura corporal

		a) guardo el primer nombre y temperatura como los maximos, y los comparo con los siguientes guardando cuando corresponda
		b) si es mayor de edad y esta viudo, guardo en la variable contadorMayoresViudos
		c) si es hombre soltero o viudo, guardo en la variable contadorHombresSolterosViudos
		d) si tiene mas de 60 y mas de 38 de temperatura, lo guardo en la variable contadorAncianosFiebre
		e) si es hombre y es soltero, acumulo la edad en la variable edadHombresSolteros
	----fin del bucle-----
	3- calculo el promedio de edad entre los hombres solteros
		promedio = edadHombresSolteros / contadorHombresSolteros
		4- muestro los resultados

*/

	let seguir;
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let maximoTemperatura;
	let flagTemperatura = 1;
	let nombreMaxTemperatura;
	let contadorMayoresViudos = 0;
	let contadorHombresSolterosViudos = 0;
	let contadorAncianosFiebre = 0;
	let promedio;
	let edadHombresSolteros = 0;		//es un acumulador de edad
	let contadorHombresSolteros =0;

	do {
		nombre = prompt("Ingrese el nombre");

		edad = parseInt(prompt("Ingrese la edad"));

		while (isNaN(edad) || edad <0 ) {
			edad = parseInt(prompt("No es una edad válida. Reingrese edad"));
		}

		sexo = prompt("Ingrese el sexo (m/f)").toLowerCase();

		while (sexo != 'm' && sexo != 'f') {
			sexo = prompt("Inválido. Reingrese el sexo").toLowerCase();
		}

		estadoCivil = prompt("Ingrese el estado civil (casado/soltero/viudo)").toLowerCase();	

		while ( estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "soltero") {
			estadoCivil = prompt("Inválido. Reingrese estado civil (casado/soltero/viudo)").toLowerCase();
		}	

		temperatura = parseFloat(prompt("Ingrese la temperatura(30-45)"));

		while (isNaN(temperatura) || temperatura > 45 || temperatura <30) {
			temperatura = parseInt(prompt("Inválido. Reingrese la temperatura"));
		}	

		if (flagTemperatura == 1 || temperatura > maximoTemperatura) {
			maximoTemperatura = temperatura;
			nombreMaxTemperatura = nombre;
			flagTemperatura = 0;
		} 

		if ( edad >= 18 && estadoCivil == "viudo") {
			contadorMayoresViudos++;
		}

		if ( sexo == 'm' && (estadoCivil == "soltero" || estadoCivil == "viudo")) {
			contadorHombresSolterosViudos++;
		}

		if ( edad > 60 && temperatura > 38) {
			contadorAncianosFiebre++;
		}

		if ( sexo  == 'm' && estadoCivil == "soltero") {
			edadHombresSolteros += edad;
			contadorHombresSolteros++;
		}

		
		seguir = prompt("Desea ingresar más datos? si/no").toLowerCase();
	} while (seguir == "si");


	promedio = edadHombresSolteros / contadorHombresSolteros;

	document.write("a) La persona con mas temperatura es: " + nombreMaxTemperatura + "<br>");
	document.write("b) La cantidad de mayores de edad viudos es: " + contadorMayoresViudos + "<br>");
	document.write("c) La cantidad de hombres solteros o viudos es: " + contadorHombresSolterosViudos + "<br>");
	document.write("d) La cantidad de personas de la tercera edad con mas de 38 grados de temperatura es: " + contadorAncianosFiebre + "<br>");
	document.write("e) El promedio de edad entre los hombres solteros es de: " + promedio);































	/*
	En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. 
	*/

	/*
	estrategia
	1- declaracion variables 
		lo que le pido al usuario:
		nombre, edad, sexo, estadoCivil, temperatura
		para resolver ejercicio:
		a) nombreMaxTemperatura, maximaTemperatura, flagTemperatura
		b) acumuladorHombresSolteros, acumuladorHombresViudos;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let nombreMaxTemperatura;
	let maxTemperatura;
	let contador=0;
	let contadorAncianosViudos=0;
	let contadorHombresSolteros=0;
	let contadorAncianosFiebre=0;
	let promedioSolteros = 0;
	let acumuladorEdadHombresSolteros = 0;
	let flag =1;
	let promedio = 0;
	let seguir;

	do {
		nombre = prompt("Ingrese su nombre");

		sexo = prompt("Ingrese sexo (m/f)");

		while (sexo != "f" && sexo != "m") {	//&& ??
			sexo = prompt("Inválido. Reingrese sexo");
		}

		estadoCivil = prompt("Ingrese estado civil");

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Inválido. Reingrese estado civil");
		}

		temperatura = parseFloat(prompt("Ingrese temperatura corporal"));		//float porque la temperatura tiene decimales

		while (isNaN(temperatura) || temperatura >  45 || temperatura < 30) {
			temperatura = parseFloat(prompt("Inválido. Reingrese temperatura"));
		}

		edad = parseInt(prompt("Ingrese edad"));

		while (isNaN(edad) || edad < 0) {
			edad = parseInt(prompt("Inválido. Reingrese la edad"));
		}

		if (flag == 1 || temperatura > maxTemperatura) {
			nombreMaxTemperatura = nombre;
			maxTemperatura = temperatura;
			flag = 0;
		}

		if (estadoCivil == "viudo" && edad >= 18) {
			contadorAncianosViudos++;
		}

		if (sexo == "m" && (estadoCivil == "soltero" || estadoCivil ==  "viudo"))	// (sexo == "m" && estadoCivil != "casado")
		{
			contadorHombresSolteros;		//cheuqear variables
		}

		if (edad > 60 && temperatura > 38) {
			contadorAncianosFiebre++;
		}

		if (sexo == "m" && estadoCivil == "soltero") {
			acumuladorEdadHombresSolteros += edad;
			contadorHombresSolteros++;		//chquear variables	
		}

		seguir = prompt("Quiere cargar otro pasajero?").toLowerCase();
	} while (seguir == "si");
	
	document.write("A) La persona con mas temperatura se llama " + nombre + " y tiene " + maxTemperatura + " grados <br>");
	document.write("b) mayores de edad viudos " + contadorAncianosViudos + "<br>" );
	document.write("c) Hombres solteros: " + contadorHombresSolteros + "<br>");
	document.write("d) personas de la tercera edad con fiebre " + contadorAncianosFiebre + "<br>");
	if (contadorHombresSolteros == 0) {
	document.write("e) no hay pasajeros hombres solteros");
	} else {
		promedio = acumuladorEdadHombresSolteros / contadorHombresSolteros;
		document.write("promedio de edad de hombres solteros: " + promedio + "<br>");
	}


*/


}
