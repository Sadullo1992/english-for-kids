import ChangePlayFeature from "./game/changePlayFeature.js";

const container = document.getElementById('container');
const menu = document.getElementById('menu');
const burgerMenu = menu.querySelector('.burger-menu');
const darkLayer = menu.querySelector('.dark-layer');
const navLinks = menu.querySelectorAll('.menu-nav-link');
const changeMode = document.getElementById('change-mode');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
});

const removeActiveClass = () => {
    navLinks.forEach(link => {
        if(link.classList.contains('active')) {
            link.classList.remove('active')
        }
    });
}

const closeMenu = () => {
    menu.classList.remove('open');    
};

darkLayer.addEventListener('click', closeMenu, false);

navLinks.forEach(link => {    
    link.addEventListener('click', () => { 
        removeActiveClass();       
        closeMenu();
        link.classList.add('active');
    }); 
})

function setActiveLink(route) {
    removeActiveClass(); 
    const navLinksArr = [...navLinks];
    route = route === '' ? "#" : route;
    if(route === "#difficult") return;
    navLinksArr.find(item => item.attributes.href.nodeValue === route).classList.add("active");   
}

// Switch Change mode
localStorage.setItem('train', changeMode.checked.toString());
changeMode.addEventListener('click', ChangeMode, false);

function ChangeMode() {
    container.classList.toggle('play-feature');
    localStorage.setItem('train', changeMode.checked.toString());

    localStorage.setItem('run', 'false');
    ChangePlayFeature();  
}

export {
    setActiveLink,
    ChangeMode
}