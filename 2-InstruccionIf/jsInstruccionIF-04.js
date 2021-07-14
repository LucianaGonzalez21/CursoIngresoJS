function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if ( edad >= 13 && edad <=18) {
		alert ('La persona es adolescente');
	}


}//FIN DE LA FUNCIÓN