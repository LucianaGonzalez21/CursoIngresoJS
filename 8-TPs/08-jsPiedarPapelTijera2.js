

//declarar variables (eleccion de la maquina 1piedra 2papel 3tijera, genero un numero random, contadores ganados perdidos empatados, )
// genero un numero random


let numeroRandom;
let eleccionMaquina;
let contadorGanados = 0;
let contadorPerdidos = 0;
let contadorEmpatados = 0;
let maximo = 3;
let minimo = 1;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	numeroRandom = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
		console.log(numeroRandom);

		switch (numeroRandom) {
			case 1:
				eleccionMaquina = "piedra";
				console.log(eleccionMaquina);
			break;
			case 2:
				eleccionMaquina = "papel";
				console.log(eleccionMaquina);
			break;
			case 3:
				eleccionMaquina = "tijera";
				console.log(eleccionMaquina);
			break;
		}


}//FIN DE LA FUNCIÓN
function piedra()
{
		switch (eleccionMaquina) {
			case "piedra":
				alert("empate");
				contadorEmpatados++;
				document.getElementById("txtIdEmpatadas").value = contadorEmpatados;
			break;
			case "papel":
				alert("perdiste");
				contadorPerdidos++;
				document.getElementById("txtIdPerdidas").value = contadorPerdidos;
			break;
			case "tijera":
				alert("ganaste");
				contadorGanados++;
				document.getElementById("txtIdGanadas").value = contadorGanados;
			break;
		}

		
}//FIN DE LA FUNCIÓN
function papel()
{
		switch (eleccionMaquina) {
			case "piedra":
				contadorGanados++;
				document.getElementById("txtIdGanadas").value = contadorGanados;
				alert("ganaste");
			break;
			case "papel":
				contadorEmpatados++;
				document.getElementById("txtIdEmpatadas").value = contadorEmpatados;
				alert("empate");
			break;
			case "tijera":
				contadorPerdidos++;
				document.getElementById("txtIdPerdidas").value = contadorPerdidos;
				alert("perdiste");
			break;
		}
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina) {
		case "piedra":
			alert("perdiste");
			contadorPerdidos++;
			document.getElementById("txtIdPerdidas").value = contadorPerdidos;
		break;
		case "papel":
			alert("ganaste");
			contadorGanados++;
			document.getElementById("txtIdGanadas").value = contadorGanados;
		break;
		case "tijera":
			alert("empate");
			contadorEmpatados++;
			document.getElementById("txtIdEmpatadas").value = contadorEmpatados;
		break;
	}
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdPerdidas").value = contadorPerdidos;
	document.getElementById("txtIdGanadas").value = contadorGanados;
	document.getElementById("txtIdEmpatadas").value = contadorEmpatados;
}