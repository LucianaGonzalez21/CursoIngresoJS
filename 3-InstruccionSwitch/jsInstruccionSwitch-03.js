function mostrar()
{
	//tomo el mes
	let mes;

	mes = document.getElementById('txtIdMes').value;

	switch(mes) {
		case 'Febrero':
			alert('Este mes no tiene más de 29 días');
			break;
		default:
			alert('Este mes tiene 30 días o más');
	}
	
	/* if (mes == 'Febrero) {			//para los  casos que es unou otro es mejor usar if
		alert('Tiene 28 días);
	} else {
		alert('tiene mas de 30');
	}
	*/

}//FIN DE LA FUNCIÓN