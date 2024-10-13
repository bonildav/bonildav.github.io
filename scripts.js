const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
});
