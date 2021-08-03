/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroRandom; 
let contadorIntentos = 0;
let numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroRandom = Math.floor(Math.random() * 100);	
	console.log(numeroRandom);

}

function verificar()
{
	numeroIngresado = parseInt(document.getElementById('txtIdNumero').value);

	contadorIntentos++;

	document.getElementById("txtIdIntentos").value = contadorIntentos;

	if (numeroIngresado == numeroRandom) {
		
		switch (contadorIntentos) {
		case 1:
			alert("Usted es un psíquico");
		break;
		case 2:
			alert("excelente percepción");
		break;
		case 3:
			alert("Esto es suerte");
		break;
		case 4:
			alert("Excelente técnica");
		break;
		case 5:
			alert("Usted está en la media");
		break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("Falta técnica");
		break;
		default:
			alert("afortunado en el amor!");
		}
	} else if (numeroIngresado > numeroRandom) {
		alert("Se pasó");
	} else {
		alert ("Le falta");
	}

}