const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu__link');
const body = document.body;

// Get the header element
const header = document.querySelector('.header');

// Function to add 'solid-header' class when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('solid-header');
        menu.classList.add('scrolled-menu');
    } else {
        header.classList.remove('solid-header');
        menu.classList.remove('scrolled-menu');
    }
});

// Toggle the menu when hamburger is clicked
hamburger.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('active');
    this.classList.toggle('active'); // Toggle cross effect on hamburger
    this.setAttribute('aria-expanded', !expanded);
    body.classList.toggle('no-scroll'); // Optionally prevent scrolling on the bod
});

// Close the menu and scroll smoothly to the section when any link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        body.classList.remove('no-scroll'); // Enable scrolling again
        // Smooth scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
        // Close the menu after clicking
        menu.classList.remove('active');
        hamburger.classList.remove('active'); // Remove cross effect
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const isMobile = window.matchMedia("(max-width: 768px)").matches;

/* Arrange the slides next to each other */
const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

/* Move to the target slide */
const moveToSlide = (track, currentSlide, targetSlide) => {
    const amountToMove = targetSlide.style.left;
    track.style.transform = `translateX(-${amountToMove})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

/* Update pagination dots */
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

/* Handle dot navigation */
dotsNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});
