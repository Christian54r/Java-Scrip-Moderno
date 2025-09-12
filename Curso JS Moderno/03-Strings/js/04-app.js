const producto = "               Monitor 20 Pulgadas         "

console.log(producto)
console.log(producto.length)


//Eliminar espacios del inicio
console.log(producto.trimStart());


//Eliminar espacios al final
console.log(producto.trimEnd());

//Eliminar espacios de inicio y final elijiendo la direccion
console.log(producto.trimStart().trimEnd())

//Eliminar espacios para ambas direcciones
console.log(producto.trim());
