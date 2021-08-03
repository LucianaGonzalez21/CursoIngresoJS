function mostrar()
{
	/*
	En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. 

------------

	estrategia
	1 -declaro variables
		las que le pido al usuario ---> nombre, nacionalidad, edad, sexo, estadoCivil, temperatura
		para resolver ejercicio
		a) maxTemp, nacionalidadMasTemp, flag
		b) mayoresSolteros (es un contador)
		c) mujeresSolterasViudas (es un contador)
		d) ancianosFiebre (es un contador)
		e) edadCasadas (es un acumulador de edad), promedio, MujeresCasadas (es un contador)

	2- genero un bucle del tipo do while
		pido nombre
		pido nacionalidad
		pido y valido edad: mayor a cero
		pido y valido sexo: f o m
		pido y valido estado civil: soltero, casado, viudo
		pido y valido temperatura corporal: entre 30 y 45

		a) guardo la primer temperatura con la nacionalidad en maxTemp y nacionalidadMasTemp, y comparo cada vez que itere
		b) si tiene mas de 17 años y esta soltero, cuento en el contador mayoresSolteros
		c) si es mujer y esta soltera o viuda, cuento en el contador mujeresSolterasViudas
		d) si tiene mas de 60 años y mas de 38 de temperatura, cuento con el contador ancianosFiebre
		

	3- e) promedio = edadCasadas / mujeresCasadas

	4 - muestro los resultados

	*/


	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let maxTemp;
	let nacionalidadMasTemp;
	let flag = 1;
	let mayoresSolteros = 0;
	let mujeresSolterasViudas = 0;
	let ancianosFiebre = 0;
	let edadCasadas = 0;
	let promedio;
	let mujeresCasadas = 0;
	let seguir;


	do {

		nombre = prompt("Ingrese el nombre: ");

		nacionalidad = prompt("Ingrese la nacionalidad: ");

		edad = parseInt(prompt("Ingrese la edad: "));

		while (isNaN(edad) || edad < 0) {
			edad = parseInt(prompt("Edad inválida. Reingrese la edad: "));
		}

		sexo = prompt("Ingrese el sexo (f/m): ").toLowerCase();

		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt("Sexo inválido. Reingrese sexo (f/m): ").toLocaleLowerCase();
		}

		estadoCivil = prompt("Ingrese el estado civil (casado/soltero/viudo): ").toLowerCase();

		while (estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo") {
			estadoCivil = prompt("Estado civil inválido. Reingrese estado civil (casado, soltero, viudo): ").toLowerCase();
		}

		temperatura = parseFloat(prompt("Ingrese la temperatura:"));

		while (isNaN(temperatura) || temperatura < 30 || temperatura >45) {
		temperatura = parseFloat(prompt("Temperatura inválida. Reingrese temperatura: "));
		}

		if (flag == 1 || temperatura > maxTemp) {
			maxTemp = temperatura;
			nacionalidadMasTemp = nacionalidad;
			flag = 0;
		}

		if (edad > 17 && estadoCivil == "soltero") {
			mayoresSolteros++;
		}

		if (sexo == 'f' && (estadoCivil == "soltero" || estadoCivil == "viudo")) {
			mujeresSolterasViudas++;
		}

		if (edad > 60 && temperatura > 38) {
			ancianosFiebre++;
		}

		if (sexo == 'f' && estadoCivil == "casado") {
			edadCasadas += edad;
			mujeresCasadas++;
		}

		seguir = prompt("Desea ingresar más datos? (si/no)").toLocaleLowerCase();
	} while(seguir == "si");


	if (mujeresCasadas == 0) {
		promedio = "No se registraron mujeres casadas";
	} else { 
		promedio = edadCasadas / mujeresCasadas;
	}

	document.write("a) La nacionalidad de la persona con más temperatura es: " + nacionalidadMasTemp + " y la temperatura es " + maxTemp + "<br>");
	document.write("b) Cantidad de mayores de edad solteros: " + mayoresSolteros + "<br>");
	document.write("c) Cantidad de mujeres solteras o viudas: " + mujeresSolterasViudas + "<br>");
	document.write("d) Cantidad de personas de la tercera edad con mas de 38 grados de temperatura corporal " + ancianosFiebre + "<br>");
	document.write("e) Promedio de edad entre las mujeres casadas: " + promedio + "<br>");

}