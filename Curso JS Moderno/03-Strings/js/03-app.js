const producto = "Macbook Pro 17 Pulgadas";
const precio = " 1,300 USD ";
const texto1 = "Concatenar variables";
const texto2 = "Concatenar strings";
const texto3 = "Concatenar con signo de +";
const texto4 = "Concatenar con comas(,) y strings";
const texto5 = "Concatenar con el signo ${} entre comilla de (') y strings"


console.log(texto1)
console.log(producto.concat(precio))

console.log(texto2)
console.log(producto.concat(" tiene un precio de ").concat(precio))

console.log(texto3)
console.log( producto + " tiene un valor de " + precio)

console.log(texto4)
console.log(producto, "Cuesta:",precio)

console.log(texto5)
console.log(`El producto ${producto} tiene un precio de ${precio}`)














// //variables creadas
// const producto = " Monitor 20 pulgadas";
// const precio = " 30 USD";

// //concatenar con variables
// console.log(producto.concat(precio));

// //concatenar con string
// console.log(producto.concat(" En descuento"))

// // Concatenar con signo de + tambien se pueden agregar string
// console.log( producto + " tiene un precio de: " + precio);

// // Concatenar con comas , y strings
// console.log( producto," tiene un precio de:",precio);

// //Concatenar  con strings y con el signo ${} entre comilla de ``
// console.log(`El producto ${producto} tiene un precio $ ${precio}`);