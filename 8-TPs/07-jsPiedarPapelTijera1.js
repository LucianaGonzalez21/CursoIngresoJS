/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
// var eleccionMaquina;

let numeroRandom;
let eleccionMaquina;
let minimo = 1;
let maximo = 3;


function comenzar()
{
	
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
        break;
        case "papel":
            alert("perdiste");
        break;
        case "tijera":
            alert("ganaste");
        break;
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    switch (eleccionMaquina) {
        case "piedra":
            alert("ganaste");
        break;
        case "papel":
            alert("empate");
        break;
        case "tijera":
            alert("perdiste");
        break;
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina) {
        case "piedra":
            alert("perdiste");
        break;
        case "papel":
            alert("ganaste");
        break;
        case "tijera":
            alert("empate");
        break;
    }

}//FIN DE LA FUNCIÓN