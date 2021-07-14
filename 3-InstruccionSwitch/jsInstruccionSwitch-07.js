function mostrar()
{
	let destino;

	destino = document.getElementById('txtIdDestino').value;

	/* switch (destino) {
		case 'Bariloche':
			alert('Se encuentra al oeste');
			break;
		case 'Ushuaia':
			alert('Se encuentra en el sur');
			break;
		case 'Mar del plata':
			alert('Se encuentra en el este');
			break;
		case 'Cataratas':
			alert('Se encuentra al norte');
	} */

	if (destino == 'Bariloche') {
		alert('Se encuentra al oeste');
	} else if (destino == 'Ushuaia') {
		alert('Se encuentra al sur');
	} else if (destino == 'Mar del plata') {
		alert ('Se encuentra al este');
	} else {
		alert ('Se encuentra al norte');
	}

}//FIN DE LA FUNCIÓN