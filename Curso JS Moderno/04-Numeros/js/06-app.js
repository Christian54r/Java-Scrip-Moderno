const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;
const numero5 = 20.20;

console.log(numero1)
//Convierte el string a numero entero .parseInt()
console.log(Number.parseInt(numero1));
//Convierte el string a numero entero pero no respeta el 20.2
console.log(Number.parseInt(numero2));
//Concvierte el string a numero flotante .parseFloat() y este si respeta el 20.2
console.log(Number.parseFloat(numero2));
//Intenta convertir el string a numero pero da NaN(No es un numero)
console.log(Number.parseInt(numero3));


//Revisar si un numero es entero o no
//Con el codigo .isInteger revisa si el dato es un entero, en este caso daria falso porque es un string
console.log(Number.isInteger(numero1));
//En este caso el .isInteger da como resultado true, en este caso el el dato es un numero entero
console.log(Number.isInteger(numero4));
//En este caso como .isInteger solo verifica numeros enteros daria con el dato dado false
console.log(Number.isInteger(numero5));



