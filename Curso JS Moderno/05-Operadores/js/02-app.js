const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 numeros son iguales

// daria false porque seria decir 20 es igual a 30
console.log(numero1 == numero3);
// daria true porque seria decir 20 es iugal a 20 pero el == no es tan estricto porque uno es un numero y el otro una string
console.log(numero1 == numero2);

// Comparador estricto
// daria false ya que si es un comparador estricto y compara el dato si es string,int,float,booleano
console.log(numero1 === numero2);
// daria true ya que estariamos convirtiendo el string en numero con parseInt
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

// Diferente

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== parseInt(numero2));

