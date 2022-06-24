// Objetos
const producto = {
    nombre: 'Tablet',
    precio: 1000,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)


// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre, precio, disponible)


// Object Literal Enhacement
const autenticado = true
const usuario = 'Juan'

const nuevoObject = {
    autenticado,//: autenticado,
    usuario//: usuario
}
console.table(nuevoObject)