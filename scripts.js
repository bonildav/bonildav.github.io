const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu__link');
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;

// Toggle the menu when hamburger is clicked
hamburger.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('active');
    this.classList.toggle('active'); // Toggle cross effect on hamburger
    this.setAttribute('aria-expanded', !expanded);
});

// Close the menu and scroll smoothly to the section when any link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close the menu after clicking
        menu.classList.remove('active');
        hamburger.classList.remove('active'); // Remove cross effect
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Arrange the slides next to one another
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Function to move to the target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Next button click
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});

// Previous button click
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});
