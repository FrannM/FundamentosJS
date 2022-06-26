// Eventos del DOM - Click

const heading = document.querySelector('.heading');
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar click';
})


const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target.textContent);
    }
    )
})