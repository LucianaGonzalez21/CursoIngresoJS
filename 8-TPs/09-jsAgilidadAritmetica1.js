/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let numeroRandom1;
let numeroRandom2;
let numeroRandomOperacion;
let minimo = 1;
let maximo = 3;
let maximoOperacion = 4;
let operacion;
let numeroUsuario;


function comenzar()
{
    numeroRandom1 = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    numeroRandom2 = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    numeroRandomOperacion = Math.floor(Math.random() * (maximoOperacion - minimo + 1) + minimo);

    switch (numeroRandomOperacion) {
        case 1:
            operacion = numeroRandom1 + numeroRandom2;
            document.getElementById("txtIdOperador").value = "+";
            console.log(operacion);
        break;
        case 2:
            operacion = numeroRandom1 - numeroRandom2;
            document.getElementById("txtIdOperador").value = "-";
            console.log(operacion);
        break;
        case 3:
            operacion = numeroRandom1 * numeroRandom2;
            document.getElementById("txtIdOperador").value = "*";
            console.log(operacion);
        break;
        case 4:
            operacion = numeroRandom1 / numeroRandom2;
            document.getElementById("txtIdOperador").value = "/";
            console.log(operacion);
        break;
    }
	
    document.getElementById("txtIdPrimerNumero").value = numeroRandom1;
    document.getElementById("txtIdSegundoNumero").value = numeroRandom2;
    

}//FIN DE LA FUNCIÓN
function Responder()
{
	
    numeroUsuario = parseInt(document.getElementById("txtIdRespuesta").value);

    if (numeroUsuario == operacion) {
        alert("El resultado es correcto");
    } else {
        alert("El resultado es incorrecto");
    }

    
}//FIN DE LA FUNCIÓN
