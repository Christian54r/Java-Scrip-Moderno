const producto ="Monitor 20 pulgadas"

// .repeat nos permite repetir una cadena de texto

const texto = " en Promocion ".repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// Split nos permite dividir un string
const actividad = "Estoy aprendiendo JavaScrip Moderno";
//divide los strings porque se selecionan los espacios para que se coloquen las comas
console.log(actividad.split(" "))

//divide los strings porque se selecionan las comas para que se coloquen las comas
const hobbies = "Leer,caminar,escuchar,musica,escribir,aprender a programar";
console.log(hobbies.split(","));

//divide los strings porque se seleciona el # para que se coloquen las comas
const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));