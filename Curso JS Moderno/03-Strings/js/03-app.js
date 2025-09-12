//variables creadas
const producto = " Monitor 20 pulgadas";
const precio = " 30 USD";

//concatenar con variables
console.log(producto.concat(precio));

//concatenar con string
console.log(producto.concat(" En descuento"))

// Concatenar con signo de + tambien se pueden agregar string
console.log( producto + " tiene un precio de: " + precio);

// Concatenar con comas , y strings
console.log( producto," tiene un precio de:",precio);

//Concatenar  con strings y con el signo ${} entre comilla de ``
console.log(`El producto ${producto} tiene un precio $ ${precio}`);