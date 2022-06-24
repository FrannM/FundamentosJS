// Unir 2 Objetos
const producto = {
    nombre: 'Tablet',
    precio: 1000,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

// const nuevoObject = Object.assign(producto, cliente) // No
const nuevoObjecto2 = {
    producto: { ...producto },
    cliente: { ...cliente }
}
console.table(nuevoObjecto2)
console.table(cliente)
console.table(producto)