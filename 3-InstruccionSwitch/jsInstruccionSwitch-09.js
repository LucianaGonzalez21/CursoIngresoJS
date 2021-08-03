function mostrar()
{
	let estacion;
	let destino;
	const PRECIO = 15000;
	let precioFinal;
	let aumento = 0;
	let descuento = 0;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	
	switch(destino) {
		case 'Bariloche':
			if (estacion == 'Invierno') {
				precioFinal = PRECIO * 1.2;		
			} else if ( estacion == 'Verano') {
				precioFinal = PRECIO * .8;		
			} else {
				precioFinal = PRECIO * 1.1;		
			}
		break;
		case 'Cataratas':
			if (estacion == 'Invierno') {
				precioFinal = PRECIO - PRECIO * .1;	
			} else if ( estacion == 'Verano') {
				precioFinal = PRECIO + PRECIO * .1;	
			} else {
				precioFinal = PRECIO + PRECIO * .1;	
			}
		break;
		case 'Mar del plata':
			if (estacion == 'Invierno') {
				precioFinal = PRECIO - PRECIO * .2;	
			} else if ( estacion == 'Verano') {
				precioFinal = PRECIO + PRECIO * .2;	
			} else {
				precioFinal = PRECIO + PRECIO * .1;	
			}
		break;
		case 'Cordoba':
			if (estacion == 'Invierno') {
				precioFinal = PRECIO - PRECIO * .1;	
			} else if ( estacion == 'Verano') {
				precioFinal = PRECIO + PRECIO * .1;	
			} else {
				precioFinal = PRECIO;
			}
		break;
	}

		alert(`El precio final es $${precioFinal}`);

	/* switch(estacion) {
		case 'Invierno':
			switch (destino) {
				case 'Bariloche':
				precioFinal = PRECIO + PRECIO * .2;	//no lo muestro, solo lo calculo
													//aumento = PRECIO * .2;
				break;
				case 'Mar del plata':
				precioFinal = PRECIO - PRECIO * .2;  	// descuento = PRECIO * .2;
				break;
				case 'Cataratas':
				case 'Cordoba':
				precioFinal = PRECIO - PRECIO * .1;		// descuento = PRECIO * .1;
				break;
			}
			break;
		case 'Verano':
			switch (destino) {
				case 'Bariloche':
				precioFinal = PRECIO - PRECIO * .2;
				break;
				case 'Mar del plata':
				precioFinal = PRECIO + PRECIO * .2;
				break;
				case 'Cataratas':
				case 'Cordoba':
				precioFinal = PRECIO + PRECIO * .1;
				break;
			}
			
			break;
		case 'Otoño':
		case 'Primavera':
			switch(destino){
				case 'Cordoba':			//si es distinto de cordoba, el aumento sera del 10%
				precioFinal = PRECIO;
				break;
				case 'Mar del plata':
				case 'Cataratas':
				case 'Bariloche':
				precioFinal = PRECIO + PRECIO * .1;
				break;
			}
			
			break;
	}

	precioFinal = PRECIO + aumento - descuento;

	alert(`El precio a pagar es $${precioFinal}`);

	*/


	/* switch(estacion) {
		case 'Invierno':
			if (destino == 'Bariloche') {
				alert( PRECIO * 1.2);
			} else if (destino == 'Mar del plata') {
				alert (PRECIO - PRECIO * 0.2);
			} else {
				alert(PRECIO - PRECIO * 0.1);
			}
			break;
		case 'Verano':
			if (destino == 'Bariloche') {
				alert (PRECIO - PRECIO * 0.2);
			} else if (destino == 'Mar del plata') {
				alert(PRECIO * 1.2);
			} else {
				alert (PRECIO * 1.1);
			}
			break;
		case 'Otoño':
		case 'Primavera':
			if(destino == 'Cordoba') {
				alert(PRECIO);
			} else {
				alert(PRECIO * 1.1);
			}
	}

	*/









	/*
	switch(estacion) {
		case 'Invierno':
			if (destino == 'Bariloche'){
				aumento = 20;
			} else if (destino == 'Mar del plata') {
				descuento = 20;
			}else {
				decuento = 10;
			}
			break;
		case 'Verano':
			if (destino == 'Bariloche'){
				descuento = 20;
			} else if (destino == 'Mar del plata') {
				aumento = 20;
			}else {
				aumento = 10;
			}
			break;
		case 'Otoño':
		case 'Primavera':
			if (destino == 'Cordoba'){
				precioFinal = PRECIO;
			}else { 
				aumento = 10
			}
			break;
			
	}

	if (aumento != 0) {
		precioFinal = PRECIO + PRECIO * aumento / 100;
	} else if (descuento != 0 ) {
		precioFinal = PRECIO - PRECIO * descuento /100;
	}

	alert('Precio final es $' + precioFinal);

*/


}//FIN DE LA FUNCIÓN