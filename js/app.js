const menuHam = document.querySelector(".menu-burger");
const navLink = document.querySelector(".nav-link");

menuHam.addEventListener('click', ()=>{
    navLink.classList.toggle('mobile-menu')
});