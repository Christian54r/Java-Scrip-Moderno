const producto = "Monitor 20 Pulgadas";

console.log(producto)

//Conocer la cantidad de letras de la cadena de texto
console.log(producto.length);

//Busca por numero de linea un nombre
// console.log(producto.indexOf("Tablet"))

//Busca por nombre el producto
console.log(producto.includes("Tablet"))
console.log(producto.includes("Monitor"))
//Si es escribre alguna letra diferente por ejemplo mayuscula y minuscula no va encontrar el nombre tiene que ser la misma escritura
console.log(producto.includes("monitor"))

