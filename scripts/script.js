
//MENU RESPONSIVO
const iconoMenu = document.querySelector('.navigation__menu');
const ulMenu = document.querySelector('.navigation__ul');
let menuAbierto = false;

//EVENTO PARA ENLACES A SECCIONES DE LA PAGINA
const navLi = document.querySelectorAll('.navigation__li');

// EVENTO PARA ANIMACION DE MENU DE APERTURA
const navA = document.querySelectorAll('.navigation__a');

iconoMenu.addEventListener('click', () => {
    let delayAnimacion = 0;
    
    ulMenu.classList.toggle('active');
    menuAbierto = !menuAbierto;
    
    for(let i = 0; i < navLi.length; i++) {
        let delayActual = delayAnimacion + i * 200; // Aumenta en 200ms para cada elemento
        
        navLi[i].style.animation = `animacionEnlaces .5s ease-out ${delayActual}ms forwards`;
    }
    
    if(menuAbierto) {
        document.body.style.overflow = 'hidden';
        
        navLi.forEach(link => {
            link.addEventListener('click', () => {
                ulMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                menuAbierto = false;
                for(let i = 0; i < navLi.length; i++) {
                    navLi[i].style.animation = 'none';
                }
            });
        });
    } else {
        document.body.style.overflow = 'auto';
        menuAbierto = false;
        navLi.forEach(link => {
            link.style.animation = 'none';
        })
    }
});

