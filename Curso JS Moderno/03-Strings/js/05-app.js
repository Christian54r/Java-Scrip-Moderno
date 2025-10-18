const producto = "Tablet 30 Pulgadas";
const texto1 = "Creamos la variable y la imprimimos";
const texto2 = 'Utilizamos la propiedad replace para reemplazar las letras (Pulgadas) por el signo de pulagadas "';
const texto3 = "Utilizamos la propiedad replace para reemplazar las letras (Tablet) por Tablet Lenovo";
const texto4 = "Cortamos la variable con el codigo .slice";

console.log(texto1);
console.log(producto);

console.log(texto2);
console.log(producto.replace("Pulgadas", '"'));

console.log(texto3);
console.log(producto.replace("Tablet","Tablet Lenovo"));

console.log(texto4);
console.log(producto.slice(0,7));




// const producto = "Monitor 20 Pulgadas";

// console.log(producto);

// //Reemplazar variables con el codigo .replace
// console.log(producto.replace("Pulgadas", '"'));
// console.log(producto.replace("Monitor", "Monitor Curvo"));

// //Cortar variables con el codigo .slice
// console.log(producto.slice(0, 10));