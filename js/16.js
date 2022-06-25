const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
const numeros = [10, 20, 30];

let nuevoArray;

// Filter
nuevoArray = tecnologias.filter(tech => tech !== 'React')


// Comprobar si un elemento existe en el array
//const resultado = tecnologias.includes('React')


// Some - Devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero => numero > 8)


// Find - Devuelve el primer elemento que cumple la condicion
//const resultado = numeros.find(numero => numero > 9)


// Every - Devuelve si todos cumplen la condicion
//const resultado = numeros.every(numero => numero > 9)

// Reduce - Devuelve un valor
//const resultado = numeros.reduce((total, numero) => numero + total, 0)

// Filter - Devuelve un array en base a una condicion
// const resultado = tecnologias.filter(tech => tech !== 'NodeJS')
// const resultado = numeros.filter(numero => numero > 15)


tecnologias.forEach((tech, index) => console.log(index))

// Crear un nuevo array
const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap);