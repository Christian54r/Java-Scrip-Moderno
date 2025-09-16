const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas : {
            peso: "1KG",
            medida:"1M"
        },
        fabricacion: {
            pais: "Costa Rica"
        }
    }
}
//Aqui estoy sacando el dato {nombre} del objeto {producto} creando una constante
// const { nombre } = producto;
//Aqui estoy visulizando en consola la constante que refleja el {nombre} del objeto {producto}
// console.log(nombre);

const { nombre, informacion: { fabricacion } } = producto;
console.log(nombre);
console.log(fabricacion); 