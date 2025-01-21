//CONTENDDOR DE LOS PROYECTOS
let contenedorProyectos = document.querySelector('.projects__container');

//PROYECTOS - en este apartado de pueden agregar mas objetos
const proyectos = [
    {
        nombre: 'Sitio web de invitaciones digitales.',
        descripcion: 'Este proyecto fue desarrollado para un negocio digital dedicado a la creacion de invitaciones digitales web para cualquier evento. El sitio web está disponible y es escalable, actualmente continuo implementando diferentes apartados.',
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
      nombre: 'Blog con contenido informativo de diseño y desarrollo web.',
      descripcion: 'Articulos informativos que tienen como propósito ayudar a negocios y desarrolladores a alcanzar sus objetivos mediante contenido práctico, informativo e inspirador sobre desarrollo web y la importancia de tener una presencia digital efectiva.',
      github: 'https://github.com/LeoGD1/codincy',
      enlace: 'https://codincy.netlify.app/',
      tecnologias: [
          'HTML5',
          'CSS3',
          'Javascript',
          'Astro',
          'Illustrator',
      ], 
      imagen: '../images/cap_6.jpg'
  },
    {
        nombre: 'Sistema de Cine.',
        descripcion: 'Este proyecto fue realizado con fines prácticos, se trata de un sistema orientado a la compra de entradas para funciones de cine, el sistema consume una API REST (TMDB), permite elegir pelicula disponible, registrar clientes, elegir asientos y mostrar el historial de clientes. Para el almacenamiento se hizo uso de local storage.',
        github: 'https://github.com/LeoGD1/sistema-cine',
        enlace: 'https://sistema-cine.netlify.app/',
        tecnologias: [
            'HTML5',
            'CSS3',
            'Javascript'
        ], 
        imagen: '../images/cap_5.jpg'
    },
    {
      nombre: 'Sitio web para preparatoria',
      descripcion: 'El sitio web fue desarrollado con la finalidad de brindar informacion de manera digital a aquellas personas que estén interesadas en continuar su formacion académica, ademas de dar a conocer la identidad de dicha Institucion. El proyecto aun se encuentra en desarrollo pero está disponible para visualizarlo.',
      github: 'https://github.com/LeoGD1/itaht',
      enlace: 'https://itaht.netlify.app/',
      tecnologias: [
          'HTML5',
          'CSS3',
          'Javascript',
          'Astro',
          'Tailwind',
          'React'
      ],
      imagen: '../images/cap_4.jpg'
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





