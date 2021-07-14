function mostrar()
{
	let estacion;
	let destino;
	let viaje;
	let no;
	let si;
	

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	si = 'Se viaja';
	no = 'No se viaja';


	switch(estacion) {
		case 'Invierno':
			if (destino == 'Bariloche') {
				viaje = si;
			} else {
				viaje = no;
			}
			break;
		case 'Verano':
			if (destino == 'Mar del plata' || destino == 'Cataratas'){
				viaje = si;
			} else {
				viaje = no;
			}
			break;
		case 'Otoño':
			viaje = si;
			break;
		case 'Primavera':
			if (destino != 'Bariloche') {
				viaje = si;
			} else {
				viaje = no;
			}
			break;
	}

	alert(viaje);

	/* switch (estacion) {
		case 'Invierno':
			if (destino == 'Bariloche') {
				alert('Se viaja');
			} else {
				alert('No se viaja');
			}
		break;
		case 'Verano':
			if (destino == 'Mar del plata' || destino == 'Cataratas') {
				alert('Se viaja');
			} else {
				alert('No se viaja');
			}
		break;
		case 'Otoño':
			alert('Se viaja');
		break;
		case 'Primavera':
			if (destino != 'Bariloche') {
				alert('Se viaja');
			} else {
				alert ('No se viaja');
			}
		break;
	}
	*/

}//FIN DE LA FUNCIÓN