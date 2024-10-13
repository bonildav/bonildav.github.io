document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const expanded = this.getAttribute('aria-expanded') === 'true';

    menu.classList.toggle('active');
    this.setAttribute('aria-expanded', !expanded);
});
