document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. CONTROL DEL MENÚ HAMBURGUESA (MÓVIL)
    // ==========================================================================
    const menuHamburger = document.querySelector('.menu-hamburger');
    const navMenu = document.querySelector('header nav');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (menuHamburger && navMenu) {
        menuHamburger.addEventListener('click', () => {
            // Alterna la animación de las líneas a una "X"
            menuHamburger.classList.toggle('active');
            // Muestra u oculta el panel lateral del menú
            navMenu.classList.toggle('active');
        });
    }

    // Control de submenús desplegables en dispositivos táctiles
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const submenu = dropdown.querySelector('.submenu');

        if (link && submenu) {
            link.addEventListener('click', (e) => {
                // Solo actúa si la pantalla es móvil (menor o igual a 991px)
                if (window.innerWidth <= 991) {
                    e.preventDefault(); // Evita que navegue de inmediato al hacer clic
                    
                    // Alterna la visualización del submenú
                    const isOpen = window.getComputedStyle(submenu).display === 'block';
                    submenu.style.display = isOpen ? 'none' : 'block';
                }
            });
        }
    });

    // ==========================================================================
    // 2. HERO / SLIDER AUTOMÁTICO
    // ==========================================================================
    const slides = document.querySelectorAll(".slide");
    let actual = 0;

    function cambiarSlide() {
        if (slides.length > 0) {
            slides[actual].classList.remove("active");
            actual++;
            if (actual >= slides.length) {
                actual = 0;
            }
            slides[actual].classList.add("active");
        }
    }

    if (slides.length > 0) {
        setInterval(cambiarSlide, 5000);
    }

    // ==========================================================================
    // 3. EFECTO DE SOMBRA EN EL HEADER AL HACER SCROLL
    // ==========================================================================
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 5px 25px rgba(0,0,0,.15)";
            } else {
                header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
            }
        }
    });

    // ==========================================================================
    // 4. ANIMACIONES AL HACER SCROLL (Scroll Reveal Optimizado)
    // ==========================================================================
    function revealElements() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Margen de activación en píxeles

        // Selecciona todos los elementos que necesitan animarse en un solo recorrido
        const targets = document.querySelectorAll(".reveal, .icono, .reveal-btn");

        targets.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
    }

    // Escuchadores de eventos para las animaciones
    window.addEventListener("scroll", revealElements);
    window.addEventListener("load", revealElements);
    
    // Ejecución inicial por si hay elementos ya visibles al cargar
    revealElements();
});