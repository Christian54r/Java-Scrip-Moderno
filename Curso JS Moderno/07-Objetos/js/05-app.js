//Aqui estamos creando un objeto dentro de otro objeto
const producto = {
    nombre:"monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m"    },
        fabricacion: {
            pais: "Costa Rica"
        }
}
//Aqui se imprime en consola el objeto y si le damos click al objeto informacion se desplega peso y medida
console.log(producto)
//Ahora con este codigo visualizamos unicamente el objeto informacion
console.log(producto.informacion)
//Visualizamos peso 
console.log(producto.informacion.peso)
//Visualizamos medida
console.log(producto.informacion.medida)
//Visualizamos fabricacion
console.log(producto.fabricacion)
//Viusalizamos pais
console.log(producto.fabricacion.pais)