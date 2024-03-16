//CONTENDDOR DE LOS PROYECTOS
let contenedorProyectos = document.querySelector('.projects__container');

//PROYECTOS - en este apartado de pueden agregar mas objetos
const proyectos = [
    {
        nombre: 'Catálogo de productos.',
        descripcion: 'Este proyecto fué realizado para un negocio dedicado al estampado en diversas superficies con el objetivo de mostrar los productos a los clientes.',
        github: 'https://github.com/LeoGD1/PrintiColorWebPage',
        enlace: 'https://printicolormx.000webhostapp.com/',
        imagen: '../images/cap_1.jpg'
    },
    {
        nombre: 'Menú Digital.',
        descripcion: 'El proyecto fue desarrollado específicamente para un negocio local dedicado a la venta de hamburgesas, snacks y bebidas, tiene como objetivo automatizar el proceso de los pedidos a domicilio.',
        github: 'https://github.com/LeoGD1/menu-kiks-house-burguer',
        enlace: 'https://menu-kiks-house-burguer-codincy.netlify.app/',
        imagen: '../images/cap_2.jpg'

    },
    {
        nombre: 'Invitacion Digital Web.',
        descripcion: 'Este proyecto se trata de un sitio web que funciona como una invitacion digital a un evento, donde los invitados pueden consultar el dia del evento con una cuanta regresiva, además de confirmar asistencia y reproducir una canción especial.',
        github: 'https://github.com/LeoGD1/Elisa-y-Diego---Nuestra-Boda',
        enlace: 'https://diegoyelisa-nuestraboda-codincy.netlify.app/ ',
        imagen: '../images/cap_3.jpg'
    }
];

//RENDERIZADO DE CADA PROYECTO DEL ARREGLO DE OBJETOS
proyectos.forEach(proyecto  => {

    let articulo = `
            <article class="projects__project">
                <div class="projects__information">

                    <div class="projects__container-name">
                        <span class="projects__point animated__point"></span>
                        <h3 class="projects__name">${proyecto.nombre}</h3>
                    </div>
                    <p class="projects__p">${proyecto.descripcion}</p>
                    <div class="projects__technologies">
                        <div class="technologie HTML5">HTML5</div>
                        <div class="technologie CSS3">CSS3</div>
                        <div class="technologie JAVASCRIPT">Javascript</div>
                        <div class="technologie ILLUSTRATOR">Illustrator</div>
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





