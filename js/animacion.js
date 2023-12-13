"use strict"
document.addEventListener("DOMContentLoaded", function () {

    let seccionHome = document.querySelector(".home")
    let seccionSobreMi = document.querySelector(".about-me")
    let seccionProyectos = document.querySelector(".projects")
    let seccionContacto = document.querySelector(".contact")
    let rectanguloDerecho = document.querySelector(".rectangulo-derecho")
    let rectanguloIzquierdo = document.querySelector(".rectangulo-izquierdo")
    let homeInformation = document.querySelector(".home-informacion")
    let aboutMeInformation = document.querySelector(".about-me-informacion")
    let projectsInformation = document.querySelector(".projects-informacion")
    let contactInformation = document.querySelector(".contact-information")

    function updateClasses() {
        let rectHome = seccionHome.getBoundingClientRect();
        let rectSobreMi = seccionSobreMi.getBoundingClientRect();
        let rectProyectos = seccionProyectos.getBoundingClientRect();
        let rectContacto = seccionContacto.getBoundingClientRect();
        let scrollY = window.scrollY;

        if (scrollY == 0) {
            homeInformation.classList.remove("ocultar")
        }

        if (rectHome.bottom > window.innerHeight / 2 && scrollY != 0) {
            homeInformation.classList.remove("ocultar")
            // projectsInformation.classList.add("ocultar")
            // aboutMeInformation.classList.add("ocultar")
            // contactInformation.classList.add("ocultar")
            return;
        }
        if (rectSobreMi.bottom > window.innerHeight / 2 && scrollY != 0) {
            aboutMeInformation.classList.remove("ocultar")
            // projectsInformation.classList.add("ocultar")
            // contactInformation.classList.add("ocultar")
            // homeInformation.classList.add("ocultar")
            return;
        }
        if (rectProyectos.bottom > window.innerHeight / 2 && scrollY != 0) {
            projectsInformation.classList.remove("ocultar")
            // aboutMeInformation.classList.add("ocultar")
            // contactInformation.classList.add("ocultar")
            // homeInformation.classList.add("ocultar")
            return;
        }
        if (rectContacto.bottom > window.innerHeight / 2 && scrollY != 0) {
            contactInformation.classList.remove("ocultar")
            btnUp.classList.remove("ocultar")
            btnUp.classList.add("appear")
            // projectsInformation.classList.add("ocultar")
            // aboutMeInformation.classList.add("ocultar")
            // homeInformation.classList.add("ocultar")
            return;
        }
    }

    updateClasses();  // Ejecuta la función cuando se carga la página

    window.addEventListener('scroll', updateClasses);  // Ejecuta la función cuando se desplaza la página


    //CAMBIA DE COLOR LA SECCION EN LA QUE ESTA EN EL HEADER
    function updateActiveLink() {
        let links = document.querySelectorAll('header a');
        let sections = document.querySelectorAll('section');

        sections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                let id = section.getAttribute('id');
                links.forEach(link => {
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }

    updateActiveLink();  // Ejecuta la función cuando se carga la página

    window.addEventListener('scroll', updateActiveLink);  // Ejecuta la función cuando se desplaza la página
});


let btnUp = document.querySelector(".btn-up");

btnUp.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


let btnCv = document.querySelector(".btn-cv")
let urlEspañol = "../img/cv-español.pdf";; // 
let urlIngles = "../img/cv-ingles.pdf";; // 

btnCv.addEventListener("click", () => {
    window.open(urlIngles, '_blank');
})



//BOTON MENU DESPLEGABLE
// Obtén el checkbox y el menú desplegable
let checkbox = document.querySelector('.check-icon');
let dropdownMenu = document.querySelector('.dropdown-menu');

// Añade un controlador de eventos al checkbox
checkbox.addEventListener('change', (event) => {
    if (checkbox.checked) {
        // Si el checkbox está marcado, muestra el menú
        dropdownMenu.style.display = 'flex';
        dropdownMenu.classList.remove("desaparicion-menu"); // Asegúrate de eliminar la clase de desaparición
        dropdownMenu.classList.add("aparicion-menu");
        document.body.style.overflow = 'hidden'; // Evita el scroll en la página
    } else {
        // Si el checkbox no está marcado, inicia la animación de desaparición
        dropdownMenu.classList.remove("aparicion-menu"); // Asegúrate de eliminar la clase de aparición
        dropdownMenu.classList.add("desaparicion-menu");
        document.body.style.overflow = 'auto'; // Permite el scroll en la página
    }
});

// Añade un controlador de eventos para cuando termine la animación
dropdownMenu.addEventListener('animationend', (event) => {
    if (event.animationName === 'desaparicion-menu') {
        // Si la animación que terminó es 'desaparicion-menu', oculta el menú
        dropdownMenu.style.display = 'none';
    }
});

// Obtén todos los enlaces del menú
const menuLinks = document.querySelectorAll('.dropdown-menu a');

// Añade un controlador de eventos a cada enlace
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Desmarca el checkbox cuando se hace clic en un enlace
        checkbox.checked = false;

        // Inicia la animación de desaparición y permite el scroll en la página
        dropdownMenu.classList.remove("aparicion-menu"); // Asegúrate de eliminar la clase de aparición
        dropdownMenu.classList.add("desaparicion-menu");
        document.body.style.overflow = 'auto'; // Permite el scroll en la página
    });
});

// Añade un controlador de eventos a cada enlace
menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Evita el comportamiento de desplazamiento predeterminado
        event.preventDefault();

        // Obtiene el ID de la sección objetivo del atributo href del enlace
        const sectionId = link.getAttribute('href');

        // Obtiene la sección objetivo
        const section = document.querySelector(sectionId);

        // Desplaza la página a la sección objetivo
        window.scrollTo({
            top: section.offsetTop - document.querySelector('.header').offsetHeight, // Ajusta el desplazamiento para tener en cuenta la altura del encabezado
            behavior: 'smooth' // Hace que el desplazamiento sea suave
        });
    });
});





//MODO NOCTURNO

// Primero, selecciona el checkbox
let checkboxNight = document.querySelector('.theme-switch__checkbox');
let contenedor = document.querySelector(".contenedor")
let header = document.querySelector(".header")
let header_a = document.querySelectorAll(".header a");
let logoMain = document.querySelector(".logo-main")
let contactAll = document.querySelector(".contacts-all")
let contactAllDivs = document.querySelectorAll(".contacts-all div");
let iconContacts = document.querySelectorAll(".icon-contact")
let project = document.querySelector(".project");
let projectTitle = document.querySelector(".project-title")
let rectanguloDerechoBlack = document.querySelector(".Rectangle-derecho-black")
let rectanguloDerechoWhite = document.querySelector(".Rectangle-derecho-white")
let dropdownMenuA = document.querySelectorAll('.dropdown-menu a');
let bar = document.querySelectorAll(".bar");

bar.forEach(function (elemento) {
    elemento.style.color = '#08053E';
});

// Asegúrate de seleccionar ambos botones de cambio de tema
var switchDesktop = document.querySelector('.header-parte-dos .theme-switch__checkbox');
var switchMobile = document.querySelector('.dropdown-menu .theme-switch__checkbox');

// Añade un evento 'change' a ambos botones
switchDesktop.addEventListener('change', changeTheme);
switchMobile.addEventListener('change', changeTheme);

function changeTheme() {
    // Cuando un botón cambia, actualiza el estado del otro botón para que coincida
    var isChecked = this.checked;
    switchDesktop.checked = isChecked;
    switchMobile.checked = isChecked;

    // Aquí va tu código existente para cambiar el tema de la página...
    if (isChecked) {
        contenedor.style.backgroundColor = '#010111';
        header.style.backgroundColor = '#08053E';
        header.style.border = "none"
        header_a.forEach(function (a) {
            a.style.color = '#F6F5FB';
        });
        logoMain.style.fill = '#F6F5FB'
        contactAll.style.backgroundColor = '#08053E'
        contactAllDivs.forEach(function (div) {
            div.style.color = '#F6F5FB';
        });
        iconContacts.forEach(function (icon) {
            icon.style.fill = '#F6F5FB'; //
        });
        project.style.backgroundColor = '#08053E'
        project.style.color = '#F6F5FB'
        projectTitle.style.color = '#F6F5FB'
        rectanguloDerechoBlack.style.display = 'block'
        rectanguloDerechoWhite.style.display = 'none'
        dropdownMenu.style.backgroundColor = '#08053E'
        bar.forEach(function (elemento) {
            elemento.style.backgroundColor = '#F6F5FB';
        });
    } else {
        contenedor.style.backgroundColor = '#08053E';
        contenedor.style.backgroundColor = '#08053E';
        header.style.backgroundColor = '#F6F5FB';
        header.style.border = "solid 1px #F6F5FB"
        header_a.forEach(function (a) {
            a.style.color = '#08053E';
        });
        logoMain.style.fill = '#08053E'
        contactAll.style.backgroundColor = '#F6F5FB'
        contactAllDivs.forEach(function (div) {
            div.style.color = '#08053E';
        });
        iconContacts.forEach(function (icon) {
            icon.style.fill = '#08053E'; //
        });
        project.style.backgroundColor = '#F6F5FB'
        project.style.color = '#08053E'
        projectTitle.style.color = '#08053E'
        rectanguloDerechoBlack.style.display = 'none'
        rectanguloDerechoWhite.style.display = 'block'
        dropdownMenu.style.backgroundColor = '#F6F5FB'
        bar.forEach(function (elemento) {
            elemento.style.backgroundColor = '#08053E';
        });
    }
}
