/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
 let numeroUsuario;
 let operacion;
 let temporizador;


function comenzar()
{

    let numero1;
    let numero2;
    let numeroOperadorRandom;
    let minimo = 1;
    let maximo = 10;
    let maximoOperador = 4;

    numero1 = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    numero2 = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    numeroOperadorRandom = Math.floor(Math.random () * (maximoOperador - minimo + 1) + minimo);

    console.log(numero1);
    console.log(numero2);

    document.getElementById("txtIdPrimerNumero").value = numero1;
    document.getElementById("txtIDSegundoNumero").value = numero2;

    switch (numeroOperadorRandom) {
        case 1:
            operacion = numero1 + numero2;
            document.getElementById("txtIdOperador").value = "+";
            console.log(operacion);
        break;
        case 2:
            operacion = numero1 - numero2;
            document.getElementById("txtIdOperador").value = "-";
            console.log(operacion);
        break;
        case 3:
            operacion = numero1 * numero2;
            document.getElementById("txtIdOperador").value = "*";
            console.log(operacion);
        break;
        case 4:
            operacion = numero1 / numero2;
            document.getElementById("txtIdOperador").value = "/";
            console.log(operacion);
        break;
        
        
    }
	
    temporizador = window.setTimeout(Responder(), 4000);
}//FIN DE LA FUNCIÓN


function Responder()
{
    numeroUsuario = document.getElementById("txtIdRespuesta").value;
	if ( numeroUsuario == operacion) {
        alert("Respuesta correcta");
    } else {
        alert ("Respuesta incorrecta");
    }


}//FIN DE LA FUNCIÓN
