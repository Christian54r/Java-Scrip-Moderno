//Pregunta al usuario su nombre
const nombre = prompt("Cual es tu nombre?");
//Toma el nombre como variable ingresada y lo muestra en pantalla
document.querySelector(".contenido").innerHTML = "${nombre} esta aprendiendo JavaScrip moderno";

//Crea una variable llamada hola para comenzar a medir el tiempo
console.time(`Hola`);
//Se ejecutan mensajes de alerta para medir el tiempo
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);
console.warn(`Eso no esta permitido`);

//Termina de medir el tiempo mediante la ejecucion de las alertas
console.timeEnd(`Hola`);