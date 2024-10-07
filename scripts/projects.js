//CONTENDDOR DE LOS PROYECTOS
let contenedorProyectos = document.querySelector('.projects__container');

//PROYECTOS - en este apartado de pueden agregar mas objetos
const proyectos = [
    {
        nombre: 'Sitio web de invitaciones digitales.',
        descripcion: 'Este proyecto fue desarrollado para un negocio digital dedicado a la creacion de invitaciones digitales web para cualquier evento, se trata de un emprendimiento iniciado por mi. El sitio web está disponible y es escalable, actualmente continuo implementando diferentes apartados.',
        github: 'https://github.com/LeoGD1/Condinv-website',
        enlace: 'https://codinv.netlify.app/',
        tecnologias: [
            'HTML5',
            'CSS3',
            'Javascript',
            'React',
            'Vite',
            'Illustrator'
        ], 
        imagen: '../images/cap_3.jpg'
    },
    {
        nombre: 'Portafolio de imprenta.',
        descripcion: 'Este proyecto fué realizado para un negocio dedicado al estampado en diversas superficies con el objetivo de mostrar los productos a los clientes.',
        github: 'https://github.com/LeoGD1/PrintiColorWeb',
        enlace: 'https://printicolor.netlify.app/',
        tecnologias: [
            'HTML5',
            'CSS3',
            'Javascript',
            'Tailwind',
            'Astro',
            'Illustrator',
        ], 
        imagen: '../images/cap_1.jpg'
    },
    {
        nombre: 'Menú Digital web.',
        descripcion: 'El proyecto fue desarrollado específicamente para un negocio local dedicado a la venta de hamburgesas, snacks y bebidas, tiene como objetivo automatizar el proceso de los pedidos a domicilio.',
        github: 'https://github.com/LeoGD1/menu-kiks-house-burguer',
        enlace: 'https://menu-kiks-house-burguer-codincy.netlify.app/',
        tecnologias: [
            'HTML5',
            'CSS3',
            'Javascript',
            'Illustrator'
        ], 
        imagen: '../images/cap_2.jpg'

    },
    {
        nombre: 'Juego del Ahorcado',
        descripcion: 'Este proyecto fue realizado con el objetivo de poner en prueba los conocimientos y mejorar la logica de programación. Actualmente el proyecto funciona de manera optima y se implementarán mejoras progresivamente.',
        github: 'https://github.com/LeoGD1/juego-del-ahorcado',
        enlace: 'https://juego-ahorcado-by-leogd.netlify.app/',
        tecnologias: [
            'HTML5',
            'CSS3',
            'Javascript'
        ],
        imagen: '../images/cap_4.jpg'
    }
];

//RENDERIZADO DE CADA PROYECTO DEL ARREGLO DE OBJETOS
proyectos.forEach(proyecto  => {

    let tecnologiasHTML = proyecto.tecnologias.map(tecnologia => {
        return `<div class="technologie ${tecnologia}">${tecnologia}</div>`;
    }).join('');

    let articulo = `
            <article class="projects__project">
                <div class="projects__information">
                    <div class="projects__container-name">
                        <span class="projects__point animated__point"></span>
                        <h3 class="projects__name">${proyecto.nombre}</h3>
                    </div>
                    <p class="projects__p">${proyecto.descripcion}</p>
                    <div class="projects__technologies">
                        ${tecnologiasHTML}
                    </div>
                    <div class="projects__links">
                        <a href=${proyecto.github} target="_blank" class="projects__link">
                            <i class="fa-brands fa-github projects__icon"></i>
                            <p class="projects__icon-name">Github</p>
                        </a>
                        <a href=${proyecto.enlace} target="_blank" class="projects__link">
                            <i class="fa-solid fa-link projects__icon"></i>
                            <p class="projects__icon-name">Ver</p>
                        </a>
                    </div>
                </div>
                <div class="projects__container-img">
                    <img src=${proyecto.imagen} alt="proyecto printicolor" class="projects__img">
                </div>
            </article>
    `;

    //CADA PROYECTO SE COLOCA UNO DEBAJO DEL OTRO
    contenedorProyectos.insertAdjacentHTML('beforeend', articulo) 
});





