function mostrar()
{
  /*

    Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro 

  
  estrategia
  1- declaracion de variables
    las que le pido al usuario ---> tipo, cantidad,PrecioUnit
    para resolver ejercicio --->
    a)  importeBruto  (importeBruto es un acum de precios,)
    b) importeDescuento, acumBolsas
    d) tipoMax, maxCantidad, acumBolsaCal, acumBolsaAre, acumBolsaCem
    f) tipoCaro, precioCaro, flag


  2- genero un bucle del tipo hasta que el usuario quuiera(do while)
    pido y valido tipo: cal, cemento, arena
    pido y valido cantidad: mayor a cero
    pido y valido precio: mayor a cero

    a) acumulo los precios en importeBruto
    b) acumulo las bolsas en acumBolsas
    d) acumulo la cantidad de bolsas segun el tipo (acumbolsacal, acumbolsaaren, acumbolsacem)
    f) guardo el primer precio como precioCaro y el tipo como tipoCaro y comparo cada vez que itere

  ---fin bucle---

  3- b) calculo los descuentos segun la cantidad de bolsas que se compraron
     d) comparo los acumbolsas de cada tipo y comparo el que mas tiene. lo guardo en tipomax y maxcantidad
    
  4- muestro los resultados
*/


  let tipo;
  let cantidad;
  let precio;
  let importeBruto = 0;
  let importeDescuento;
  let acumBolsas = 0;
  let tipoMax;
  let maxCantidad;
  let acumBolsasCal = 0;
  let acumBolsasAr = 0;
  let acumBolsasCem = 0;
  let tipoCaro;
  let precioCaro;
  let flag = 1;
  let seguir;
  let descuento = 0;

  do {
    tipo = prompt("Ingrese el tipo (arena, cal, cemento): ").toLowerCase();

    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("Tipo inválido. Reingrese tipo (arena, cal, cemento)").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas: "));

    while (isNaN(cantidad) || cantidad <= 0) {
      cantidad = parseInt(prompt("Cantidad inválida. Reingrese cantidad"));
    }

    precio = parseInt(prompt("Ingrese el precio por bolsa"));

    while (isNaN(precio) || precio <=0) {
      precio = parseInt(prompt("Precio inválido. Reingrese precio:"));
    }


    importeBruto += precio;

    acumBolsas += cantidad;


    if (tipo == "arena") {
      acumBolsasAr += cantidad;
    } else if (tipo == "cal") {
      acumBolsasCal += cantidad;
    } else {
      acumBolsasCem += cantidad;
    }


    if (flag == 1 || precio > precioCaro) {
      precioCaro = precio;
      tipoCaro = tipo;
      flag = 0;
    }

    seguir = prompt("Desea ingresar más productos? (si/no)").toLowerCase();
  } while (seguir == "si")
  

  if (acumBolsas > 30) {
    descuento = .25;
    descuento = importeBruto * descuento;
    importeDescuento = importeBruto - descuento;
  } else if ( acumBolsas > 10) {
    descuento = .15;
    descuento = importeBruto * descuento;
    importeDescuento = importeBruto - descuento;
  }

  if (acumBolsasAr > acumBolsasCal && acumBolsasAr > acumBolsasCem) {
    tipoMax = "arena";
    maxCantidad = acumBolsasAr;
  } else if ( acumBolsasCal >= acumBolsasAr && acumBolsasCal >acumBolsasCem) {
    tipoMax = "cal";
    maxCantidad = acumBolsasCal;
  } else {
    tipoMax = "cemento";
    maxCantidad = acumBolsasCem;
  }

  document.write("a) El importe total a pagar sin descuento es:  " +  importeBruto + "<br>");
  if (descuento == 0) {
    document.write("b) No se aplicaron descuentos" + "<br>");
  } else {
    document.write("b) El importe con descuento es:" + importeDescuento +  "<br>");    
  }
  document.write("d) El tipo con más cantidad de bolsas es: " +  tipoMax + " La cantida de bolsas es : " + maxCantidad + "<br>");
  document.write("f) El tipo más caro es " + tipoCaro + "<br>");
 
}

