function mostrar()
{
  /* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro 

-------------------
// Estrategia
1- declaracion de variables
cosas que le pedimos al usuario ---> tipo, cantidad, precio, seguir
descuento, importeBruto, importeNeto, acumuladorBolsas, mayorPrecio, mayorTipo,
acumuladorBolsaCemento, acumuladorBolsaArena, acumuladorBolsaCal, tipoMasBolsas

2- generar un bucle del tipo mientras el usuario quiera (do while)
cosas que se repiten por cada producto comprado
pido y valido el tipo
pido y valido la cantidad (numero positivo)
pido y valido precio (numero positivo)
acumular la cantidad de bolsas
acumular el importe bruto
d) me fijo el tipo de producto y acumulo la cantidad de bolsas segun corresponda
f) para el primer producto guardo tipo y precio (es mi unico producto, por ende es el mas caro)
para los siguientes productos voy a comparar sus precios con el producto caro y si es mas caro, actualizo precio y tipo

-----fin bucle----

3 -me fijo que descuento corresponde de acuerdo al acumulador de bolsas
calculo el descuento
calculo el importe neto
d) me fijo cual es el mayor acumulador de bolsas para informar el tipo de producto que se compraron mas bolsas
f) ya lo tengo en la variable mayorprecio y mayortipo

4- mostrar los resultados

  */

    let tipo;
    let cantidad;
    let precio;
    let seguir;
    let descuento;
    let importeBruto=0;   //la voy a usar como acumulador
    let importe;
    let importeNeto;
    let acumuladorBolsas=0;
    let mayorPrecio;
    let mayorTipo;
    let flag = 1;   // para el tipo mas caro. para saber si estoy en la primera iteracion o no
    let acumuladorBolsaCemento=0;
    let acumuladorBolsaArena=0;
    let acumuladorBolsaCal=0;
    let tipoMasBolsas;
    let cantidadMaxBolsas;


    do {
      tipo = prompt("Ingrese el tipo (arena/cal/cemento)").toLowerCase();

      while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento")) {    //(tipo != "cal" && tipo != "cemento" && tipo != "arena")
        tipo = prompt("Error. Ingrese un tipo válido (arena/cal/cemento)").toLowerCase();
      }

      cantidad = parseInt(prompt("Ingrese la cantidad"));

      while (isNaN(cantidad) || cantidad <=0) {
        cantidad = parseInt(prompt("Cantidad Inválida. Reingrese la cantidad:"));
      }

      precio = parseInt(prompt("Ingrese el precio"));

      while(isNaN(precio) || precio <= 0) {
        precio = parseInt(prompt("Precio inválido. Reingrese elnprecio"));
      }

      // acumular cantidad de bolsas
      // acumular importe bruto

      acumuladorBolsas += cantidad;   // o directamente sumo acumbolsas de cal, arena y cemento al final
      importe = cantidad * precio;
      importeBruto += importe;

      // me fijo el tipo de producto y acumulo la cantidad de bolsas segun corresponde

      if (tipo == "arena") {
        acumuladorBolsaArena += cantidad;
      } else if( tipo == "cal") {
        acumuladorBolsaCal += cantidad;
      } else {
        acumuladorBolsaCemento += cantidad;
      }

      //para el primer producto guardo tipo y precio (es mi unico producto, por ende es el mas caro)
      //para los siguientes productos voy a comparar sus precios con el producto caro y si es mas caro, actualizo precio y tipo

      if ( flag == 1) {       // es igual que if (flag)
        mayorPrecio = precio;
        mayorTipo = tipo;
        flag = 0;
      } else if (flag == 0 || precio > mayorPrecio){
        mayorPrecio = precio;
        mayorTipo = tipo;
      }

      seguir = prompt("Desea ingresar más datos? (si/no)").toLowerCase();
    } while (seguir == "si");


      // console.log(importeBruto);   //para chquear que funcione el calculo del importe bruto


     /* 3 -me fijo que descuento corresponde de acuerdo al acumulador de bolsas
calculo el descuento */

    if (acumuladorBolsas > 30) {
      descuento = importeBruto * .25;
    } else if (acumuladorBolsas > 10) {
      descuento = importeBruto * .15;
    } else {
      descuento = 0;        //si me quiero ahorrar el else final, inicializo la variable descuento en 0
    }


    //calculo el importe neto

    importeNeto = importeBruto - descuento;

    //me fijo cual es el mayor acumulador de bolsas para informar el tipo de producto que se compraron mas bolsas

    if (acumuladorBolsaArena > acumuladorBolsaCal && acumuladorBolsaArena > acumuladorBolsaCemento) {
      tipoMasBolsas = "arena";
      cantidadMaxBolsas = acumuladorBolsaArena;
    } else if ( acumuladorBolsaCal >= acumuladorBolsaArena && acumuladorBolsaCal > acumuladorBolsaCemento){
      tipoMasBolsas = "cal";
      cantidadMaxBolsas = acumuladorBolsaCal;
    } else {
      tipoMasBolsas = "cemento";
      cantidadMaxBolsas = acumuladorBolsaCemento;
    }
    
    // mostrar los resultados

    document.write("a) El importe total a pagar es " + importeBruto + "<br>");
    if (descuento >0) {
    document.write("b) El importe total a pagar con descuento es " + importeNeto + "<br>");
    }
    document.write("c) El tipo con más cantidad de bolsas " + tipoMasBolsas + " con " + cantidadMaxBolsas +  "<br>");
    document.write("d) El tipo más caro " + mayorTipo + " Precio " + mayorPrecio + "<br>");

  }













































  /*
  //estrategia

  1 - declarar variables (tipo, cantidadBolsas, precioUnitarioBolsa, descuento1, descuento2, contadorBolsas, maximoTipo, seguir)
    bolsasARENA, bolsasCal, bolsasCemento, acumuladorPrecioArena, acumuladorpreciocal, acumuladorpreciocemento
  2- generar un bucle del tipo do while
    adentro del bucle:
      pido y valido el tipo (arena, cal, cemento)
      pido cantidad de bolsas (isNaN, parseint)
      pido y valido precio por bolsa (mayor a cero)
      pregunto si quiere seguir

    
    ----- fin bucle---
    
    a) calculo el importe total, multiplicando la cantidad de bolsas por el preico unitario
    
    3 - aplico los descuentos correspondientes a la cantidad de bolsas

    b) realizo los descuentos  si corresponde y calculo el total a pagar
  
    c) en cada tipo , acumulo en bolsasArena, bolsasCal y bolsasCemento
      comparo los tres con if
    d) acumulo el precio en cada tipo, comparo los tres con if

    
    let seguir;
    let tipo;
    let cantidadBolsas;
    let precioUnitarioBolsa;
    let descuento1 = .85;
    let descuento2 = .75;
    let contadorBolsas;
    let maximoTipo;
    let bolsasArena;
    let bolsasCal;
    let bolsasCemento;
    let acumuladorPrecioArena;
    let acumuladorPrecioCal;
    let acumuladorPrecioCemento;


    do {
      
     tipo = prompt("Ingrese el tipo (arena/cal/cemento):").toLowerCase();

      while (!(tipo == "cal" || tipo == "arena" || tipo == "cemento")) {
        tipo = prompt("Tipo inválido. Ingrese nuevamente (arena/cal/cemento):").toLowerCase();
      }

      cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));

      while (isNaN(cantidadBolsas) || cantidadBolsas <=0) {
        cantidadBolsas = parseInt(prompt("Ingrese un número válido"));
      }

      precioUnitarioBolsa = parseInt(prompt("Ingrese el precio por bolsa"));

      while (isNaN (precioUnitarioBolsa) || precioUnitarioBolsa <= 0){
        precioUnitarioBolsa = parseInt(prompt("Inválido. Ingrese el precio por bolsa nuevamente"));
      }

      if ( tipo == "arena") {
        alert("arena");
      } else if ( tipo == "cal") {
        alert("cal");
      } else {
        alert("camento");
      }


      seguir = prompt("Desea ingresar más datos? (si/no)").toLowerCase();
    } while (seguir == "si");

    */


