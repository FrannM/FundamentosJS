// Manipular elementos HTML con JS

const heading = document.querySelector('.heading');

heading.textContent = 'Hola mundo';
console.log(heading.textContent);


const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Juan';


const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => enlace.textContent = 'Nuevo texto');