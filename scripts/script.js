
//MENU RESPONSIVO
const iconoMenu = document.querySelector('.navigation__menu');
const ulMenu = document.querySelector('.navigation__ul');
let menuAbierto = false;

//EVENTO PARA ENLACES A SECCIONES DE LA PAGINA
const navLi = document.querySelectorAll('.navigation__li');

iconoMenu.addEventListener('click', () => {
    ulMenu.classList.toggle('active');
    menuAbierto = !menuAbierto;
    
    if(menuAbierto) {
        document.body.style.overflow = 'hidden';
        
        navLi.forEach(link => {
            link.addEventListener('click', () => {
                ulMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
                menuAbierto = false;
            });
        });
    } else {
        document.body.style.overflow = 'auto';
        menuAbierto = false;
    }
});