const infoBox = document.querySelector('.Container');
const cta = document.querySelector('.Cta');
const hamburger = document.querySelector('.MainHeader-hamburger i');
const nav = document.querySelector('.MainHeader-hamburger .Nav');
const navLinks = document.querySelector('.MainHeader-hamburger .Nav .Nav-links a');

hamburger.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', toggleMenu);

gsap.from( infoBox, {
    x: 400,
    duration: .5,
    ease: 'linear',
    opacity: 0
})

function toggleMenu() {
    nav.classList.toggle('Nav--isHidden');
    hamburger.classList.item(1) == 'fa-bars' ? hamburger.classList.replace('fa-bars', 'fa-times') : hamburger.classList.replace('fa-times', 'fa-bars')
}
