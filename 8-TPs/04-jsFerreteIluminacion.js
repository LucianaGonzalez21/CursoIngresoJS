/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	const PRECIO = 35;
     let impuesto;
     let cantidad;
     let descuento;
     let marca; 
     let precioConDescuento;

     marca = document.getElementById("Marca").value;

     
     cantidad = parseInt(document.getElementById('txtIdCantidad').value);
            
     if (cantidad >= 6) {
         descuento = .5;
     } else if (cantidad == 5 && marca == "ArgentinaLuz") {
         descuento = .4;
     } else if (cantidad == 5) {
         descuento = .3;
     } else if (cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
         descuento = .25;
     } else if (cantidad == 4) {
         descuento = .2;
     } else if (cantidad ==3 && marca == "ArgentinaLuz") {
         descuento = .15;
     } else if (cantidad ==3 && marca =="FelipeLamparas") {
         descuento = .1;
     } else if (cantidad == 3) {
         descuento =.05;
     }

     precioConDescuento = (PRECIO - PRECIO * descuento) * cantidad;

     if (precioConDescuento > 120 ) {
        impuesto = precioConDescuento * .1;
        precioConDescuento += impuesto;
        alert("IIBB Usted pagó " + impuesto);
    }

     document.getElementById('txtIdprecioDescuento').value = precioConDescuento;
     

     
         

     
}
