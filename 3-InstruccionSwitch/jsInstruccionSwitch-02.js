function mostrar()
{
	//tomo el mes
	let mes;

	mes = document.getElementById('txtIdMes').value;

	/* switch(mes) {
		case 'Julio':
			alert('Abrigate que hace frio');
			break;
		case "Agosto":
			alert('Abrigate que hace frio');
			break;
		case 'Enero':
			alert('Falta para el invierno');
			break;
		case 'Febrero':
			alert('Falta para el invierno');
			break;
		case 'Marzo':
			alert('Falta para el invierno');
			break;
		case 'Abril':
			alert('Falta para el invierno');
			break;
		case 'Junio':
			alert('Falta para el invierno');
			break;
		case 'Mayo':	
			alert ('Falta para el invierno');
			break;
		case 'Septiembre':
			alert('Ya pasamos el frío, ahora calor!');
			break;
		case 'Octubre':
			alert('Ya pasamos el frío, ahora calor!');
			break;
		case 'Noviembre':
			alert('Ya pasamos el frío, ahora calor!');
			break;
		case 'Diciembre':
			alert('Ya pasamos el frío, ahora calor!');
			break;
				
	}
	*/

	/* if ( mes == 'Enero' || mes == 'Febrero' || mes == 'Marzo' || mes == 'Abril' || mes =='Mayo' || mes == 'Junio') {
		alert('Falta para el invierno');
	} else if (mes == 'Julio' || mes == 'Agosto') {
		alert ('Abrigate que hace frío');
	} else {
	alert('Ya pasó el frío, ahora calor!');
	}
	*/
	switch (mes) {
		case 'Enero':
		case 'Febrero':
		case 'Marzo':
		case 'Abril':
		case 'Mayo':
		case 'Junio':
			alert('Falta para el invierno');
			break;
		case 'Julio':
		case 'Agosto':
			alert('Abrigate que hace frío');
			break;
		default:
			alert('Ya pasamos el frío, ahora calor!');

	}
	



}//FIN DE LA FUNCIÓN