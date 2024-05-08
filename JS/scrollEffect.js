window.addEventListener('scroll', function() {
    const navigation = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link'); // Esto seleccionará todos los enlaces y el ícono
    if (window.scrollY > 20) {
        navigation.classList.add('nav-light');
        navigation.classList.remove('nav-dark');
        navLinks.forEach(link => {
            link.classList.add('text-black'); // Asegúrate de definir esta clase en tu CSS
            link.classList.remove('text-white');
        });
    } else {
        navigation.classList.add('nav-dark');
        navigation.classList.remove('nav-light');
        navLinks.forEach(link => {
            link.classList.remove('text-black');
            link.classList.add('text-white');
        });
    }
});
