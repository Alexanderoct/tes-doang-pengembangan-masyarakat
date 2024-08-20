// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika tim-menu di klik
document.querySelector('#tim-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar
const tim = document.querySelector('#tim-menu');

document.addEventListener('click', function(e) {
    if(!tim.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});