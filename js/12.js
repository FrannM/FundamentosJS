// Funciones - Function Declaration
// function sumar(numero = 0, numero2 = 0) {
//     console.log(numero + numero2)
// }

// sumar(10, 20)
// sumar(2, 3)
// sumar(100, 400)

//Retorna Valores
function sumar(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2,
        mensaje: 'Hola'
    }
}

const [resultado, mensaje] = sumar(10, 20)

console.log(resultado)
console.log(mensaje)