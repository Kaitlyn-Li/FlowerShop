const navlinks = document.querySelector('#nav-links');

document.querySelector('#menu-icon').addEventListener('click', toggleMenu);

function toggleMenu() {
    navlinks.classList.toggle('active');
}