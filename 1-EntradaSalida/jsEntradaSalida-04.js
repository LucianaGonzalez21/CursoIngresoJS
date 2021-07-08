/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// reservo espacio en la memoria para guardar el nombre
	let nombre;

	//guardo en la variable nombre el texto que escribió el usuario dentro de la ventana PROMPT
	nombre = prompt ('Ingrese su nombre');

	//copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebidda en la página html
	document.getElementById('txtIdNombre').value = nombre;
}

