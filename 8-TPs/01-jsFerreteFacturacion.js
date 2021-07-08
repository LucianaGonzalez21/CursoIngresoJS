/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = parseInt(document.getElementById('txtIdPrecioUno').value);
    precio2 = parseInt(document.getElementById('txtIdPrecioDos').value);
    precio3 = parseInt(document.getElementById('txtIdPrecioTres').value);

    suma = precio1 + precio2 + precio3;

    alert(`La suma es ${suma}`);
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;

    precio1 = parseInt(document.getElementById('txtIdPrecioUno').value);
    precio2 = parseInt(document.getElementById('txtIdPrecioDos').value);
    precio3 = parseInt(document.getElementById('txtIdPrecioTres').value);

    promedio = (precio1 + precio2 + precio3)/3;

    alert(`El promedio es ${promedio}`);
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let IVA;
    let resultado;

    precio1 = parseInt(document.getElementById('txtIdPrecioUno').value);
    precio2 = parseInt(document.getElementById('txtIdPrecioDos').value);
    precio3 = parseInt(document.getElementById('txtIdPrecioTres').value);

    IVA = (precio1 + precio2 + precio3) * 0.21

    resultado = (precio1 + precio2 + precio3) + IVA;

    alert(`El Precio Final es ${resultado}`);

	
}