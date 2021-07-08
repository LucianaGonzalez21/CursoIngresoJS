/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFahrenheit;
    let temperaturaCentigrados;

    temperaturaFahrenheit = parseFloat(document.getElementById('txtIdTemperatura').value);

    temperaturaCentigrados = (temperaturaFahrenheit - 32) * 5/9;

    alert(`${temperaturaFahrenheit} grados Fahrenheit son ${temperaturaCentigrados.toFixed(2)} grados centígrados`);

}

function CentigradosFahrenheit () 
{
	let temperaturaFahrenheit;
    let temperaturaCentigrados;

    temperaturaCentigrados = parseFloat(document.getElementById('txtIdTemperatura').value);

    temperaturaFahrenheit = (temperaturaCentigrados * 9/5) + 32;

    alert(`${temperaturaCentigrados} grados centígrados son ${temperaturaFahrenheit.toFixed(2)} grados Fahrenheit`);
}
