const producto = "Monitor 20 pulgadas";
// .toUpperCase() se utiliza para que la variable se vea todo en mayuscula.
console.log(producto.toUpperCase());

// .toLocaleLowerCase() se utiliza para que la variable se vea en miniscula.
console.log(producto.toLocaleLowerCase());

//En un correo es recomendado que se utilice .toLocaleLowerCase() para que cuando el dato llegue a la base de datos no tenga problemas por mayusculas.
const email = "CORREO@CORREO.COM";
console.log(email.toLocaleLowerCase());
const email2 = "Juan@correo.com";

const precio = 300;
//el precio que es 300 se refleja en consola como un numero en color azul.
console.log(precio);
//.toString() hace que el dato que se refleja como numero se transforme a string (letras).
console.log(precio.toString());

