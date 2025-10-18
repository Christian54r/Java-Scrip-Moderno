const producto = "    Monitor 20 Pulgadas    ";
const texto1 = "Medimos cuantos caracteres son contando los espacios";
const texto2 = "Eliminamos espacios del inicio y medimos cuantos caracteres son sin los espacios del inicio";
const texto3 = "Eliminamos espacios del final y medimos cuantos caracteres son sin los espacios del final";
const texto4 = "Eliminamos los espacios elijiendo la direccion"
const texto5 = "Eliminamos los espacios en ambas direciones"



console.log(producto);
console.log(texto1);
console.log(producto.length);

console.log(texto2);
console.log(producto.trimStart().length);

console.log(texto3);
console.log(producto.trimEnd().length);

console.log(texto4);
console.log(producto.trimStart().trimEnd());

console.log(texto5);
console.log(producto.trim());















// const producto = "               Monitor 20 Pulgadas         "

// console.log(producto)
// console.log(producto.length)


// //Eliminar espacios del inicio
// console.log(producto.trimStart());


// //Eliminar espacios al final
// console.log(producto.trimEnd());

// //Eliminar espacios de inicio y final elijiendo la direccion
// console.log(producto.trimStart().trimEnd())

// //Eliminar espacios para ambas direcciones
// console.log(producto.trim());
