// Objetos - Manipulacion

const producto = {
    nombre: 'Tablet',
    precio: 1000,
    disponible: true
}
//Object.freeze(producto) - Freeze - No deja modificarlo, no permite añadir ni eliminar
//Object.seal(producto) - Modifcar propiedades existentes, no permite añadir ni eliminar

// Reescribir un valor
producto.nombre = "Monitor Curvo"

// Si no existe, lo va a añadir
producto.imagen = "monitor.jpg"

// Eliminar propiedades
delete producto.disponible

console.table(producto)