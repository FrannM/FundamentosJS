
const saldo = 600
const pagar = 500
const tarjeta = true

/*
    || - Al menos uno debe cumplir
    && - Todos deben cumplir
*/

if (saldo > pagar || tarjeta) {
    console.log('puedes pagar')
}
else {
    console.log('no puedes pagar')
}