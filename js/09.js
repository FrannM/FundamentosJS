// Operaciones en los arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'React'];

// Añadir elementos
// tecnologias.push('Plenaso')// lo agrega al final
// tecnologias.unshift('Plenaso')// lo agrega al principio

// const nuevoArray = ['Plenaso', ...tecnologias]

// Eliminar elementos
// tecnologias.pop()// elimina el ultimo elemento
//tecnologias.shift()// elimina el primer elemento
//tecnologias.splice(2, 1)// elimina un elemento en especifico

// const nuevoArray = tecnologias.filter(function (tech) {
//     return tech !== 'NodeJS'
// })

// Reemplazar elementos
//tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map(function (tech) {
    if (tech === 'HTML') {
        return 'GRAPHQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)