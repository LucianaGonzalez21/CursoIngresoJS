/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

//funcion comenzar
// declarar variables (numero secreto, contador)
// generar el numero secreto entre 1 y 100 (math random)
// pido al usuario un numero en la caja de texto 

// funcion verificar
// verificar que el numero que ingresó el  usuario es el mismo que generé
// si es el mismo, termina el juego y muestro el mensaje
// si no es el mismo, le informo que le falta o se pasó
let numeroRandom;
let minimo = 1;
let maximo = 100;
let contador = 0;

function comenzar()

{
  
  numeroRandom = Math.floor(Math.random() * (maximo - minimo) + minimo);
  console.log(numeroRandom);
  
  
}

function verificar()
{
  let numeroIngresado;
  
  numeroIngresado = parseInt(document.getElementById('txtIdNumero').value);
  
  
	if (numeroIngresado == numeroRandom) {
    alert ("Usted es ganador!!! y en solo " + contador + " intentos!"); 
  } else if (numeroIngresado > numeroRandom) {
    alert ("Se pasó");
  } else {
    alert("Le falta");
  }
  
  contador++;
  document.getElementById("txtIdIntentos").value = contador; 
	
}