function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad >= 18) {
		alert('La persona es mayor de edad');
	} else if ( edad >=13 && edad <= 17) {
		alert('Es adolescente');
	} else {
		alert('Es niño');

		/* if (edad >17) {
			alert('Es adulto');
		} else {
			if (edad >= 13) {		ya descarté las edades mayores a 17, entonces no hace falta aclarar que adolescente es hasta 17
				alert('Es adolescente);
			} else {
				alert ('Es niño')
			}

		}
	}
	*/



}//FIN DE LA FUNCIÓN