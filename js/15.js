const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];


const nuevoArray = tecnologias.map(tech => {
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

const nuevoArray2 = tecnologias.filter((tech) => tech !== 'NodeJS')

console.table(nuevoArray)
console.table(nuevoArray2)

