let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active')
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{
                
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    })
});


/* ALTERAR TEMA DE ACORDO COM USUARIO */
const body = document.querySelector("body"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");
});

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Altera o tema
function changeTheme(event) {
  if( event.matches ) {
    body.classList.add('dark')
  } else {
    body.classList.remove('dark')
  }
}

// Escuta a mudança de tema no sistema
prefersColorScheme.addListener(changeTheme);

// Altera o tema conforme o tema do usuário
changeTheme(prefersColorScheme);



/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

/* Menu Show */
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('clicK', linkAction))

// /*=============== ADD BLUR HEADER ===============*/
// const blurHeader = () =>{
//     const header = document.getElementById('header')
//     //Add a class if the bottom offset is greater than 50 of the viewport
//     this.scrollY >= 50 ? header.classList.add('blur-header')
//                        : header.classList.remove('blur-header')
// }
// window.addEventListener('scroll', blurHeader)
