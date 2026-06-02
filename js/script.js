const slides = document.querySelectorAll(".slide");
let actual = 0;

function cambiarSlide(){
    slides[actual].classList.remove("active");
    actual++;
    if(actual >= slides.length){
        actual = 0;
    }
    slides[actual].classList.add("active");
}

setInterval(cambiarSlide, 5000);

/* EFECTO HEADER */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }
});

// Scroll Reveal - Animaciones al hacer scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100; // margen de activación
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Scroll Reveal para íconos
function revealIcons() {
  const icons = document.querySelectorAll(".icono");
  icons.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealIcons);
window.addEventListener("load", revealIcons);

// Scroll Reveal para botones
function revealButtons() {
  const buttons = document.querySelectorAll(".reveal-btn");
  buttons.forEach(btn => {
    const windowHeight = window.innerHeight;
    const elementTop = btn.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealButtons);
window.addEventListener("load", revealButtons);