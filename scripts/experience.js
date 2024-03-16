//CONTENEDOR DE LA LISTA DE EXPERIENCIA
const experiencieLista = document.querySelector('.experience__ul');

//EXOERIENCIA - en este se pueden agregar mas objetos
const experiencias = [
    {
        trabajo: 'Desarrollador Frontend',
        lugar: 'Freelancer',
        periodo: 'Actualmente',
        descripcion: 'Desarrollo sitios web dinámicos y personalizados para distintos negocios que quieran comenzar con su transformación digital, con la finalidad de aumentar la confianza en sus nuevos clientes y mostrar de diferentes manera sus productos o servicios.'
    },
    {
        trabajo: 'Auxiliar Administrativo',
        lugar: 'ITAHT - Control Escolar',
        periodo: '2023',
        descripcion: 'Inicié con el proyecto de digitalización de documentos históricos de la institución. Realicé la inscripcion y el alta de los nuevos estudiantes en el Sistema, asi como la carga en el mismo de sus documentos oficiales.'
    }, 
    {
        trabajo: 'Inventario y Soporte Técnico',
        lugar: 'UAEMex - Delegación Administrativa',
        periodo: '2021',
        descripcion: 'Participé en la realización del inventario de los bienes patrimoniales de la UAEMex asi como la baja de los mismos, además realicé soporte técnico básico en el area Informatica de dicho lugar a los equipos de cómputo.'
    }
];

//RENDERIZADO DE CADA PROYECTO DEL ARREGLO DE EXPERIENCIAS
experiencias.forEach(experiencia => {

    let li =
    `
    <li class="experience__li">
        <div class="experience__container-point">
            <span class="experience__point animated__point"></span>    
            <h3 class="experience__job animated__element">${experiencia.trabajo}</h3>
        </div>
        <h3 class="experience__place animated__element">${experiencia.lugar}</h3>
        <h4 class="experience__period animated__element">${experiencia.periodo}</h4>
        <p class="experience__text animated__element">${experiencia.descripcion}</p>
    </li>
    `;

    //CADA PROYECTO SE COLOCA UNO DEBAJO DEL OTRO
    experiencieLista.insertAdjacentHTML('beforeend', li);
});