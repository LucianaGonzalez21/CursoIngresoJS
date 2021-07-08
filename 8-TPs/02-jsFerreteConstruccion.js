/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    let largo;
    let ancho;
    let perímetro;
    let alambre;
    
    largo = parseInt(document.getElementById('txtIdLargo').value);
    ancho = parseInt(document.getElementById('txtIdAncho').value);

    perímetro = 2 * (largo + ancho);

    alambre = perímetro * 3;

    alert(`Se necesitan comprar ${alambre} metros de alambre`);


}
function Circulo () 
{
	let radio;
    let perímetro;
    let alambre;
    const PI = Math.PI;

    radio = parseInt(document.getElementById('txtIdRadio').value);

    perímetro = 2 * radio * PI;

    alambre = perímetro * 3;

    alert(`Se necesitan comprar ${alambre.toFixed(2)} metros de alambre`)


}
function Materiales () 
{
	let ancho;
    let largo;
    let área;
    let cemento;
    let cal;

    ancho = parseInt(document.getElementById('txtIdAncho').value);
    largo = parseInt(document.getElementById('txtIdLargo').value);

    área = ancho * largo;

    cemento = área * 2;

    cal = área * 3;

    alert(`Para un contrapiso de ${área} m2, necesito comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`);


}