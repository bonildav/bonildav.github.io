const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu__link');

// Toggle the menu when hamburger is clicked
hamburger.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('active');
    this.classList.toggle('active'); // Add this to toggle the cross animation
    this.setAttribute('aria-expanded', !expanded);
});

// Close the menu and scroll smoothly to the section when any link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll to section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close the menu after clicking
        menu.classList.remove('active');
        hamburger.classList.remove('active'); // Remove cross animation
        hamburger.setAttribute('aria-expanded', 'false');
    });
});
