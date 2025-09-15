const producto = {
    nombre:"monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto);

//Como acceder a una variable dentro de un objeto
//Se puede acceder a una variable de un objeto con un punto despues del nombre del objeto
console.log(producto.nombre);
//Esta tambien es una alternativa de acceso para entrar a una variable de un objeto
console.log(producto["nombre"])
