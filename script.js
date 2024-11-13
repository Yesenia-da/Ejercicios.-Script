let precio=parseInt(prompt("ingrese el precio de la prenda:"));
let descuento=parseInt(prompt("Ingresa el porcentaje de descuento:"));
let precioFinal = precio - (precio * (descuento / 100));
document.write("El precio final con descuento es: " + precioFinal);
