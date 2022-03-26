window.addEventListener('scroll', function() {
    let navbar = document.getElementById('menu-bar');
    if (window.scrollY > 190) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});