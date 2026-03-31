// Hero Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if(slides.length > 0) {
    setInterval(nextSlide, 5000); // Change image every 5 seconds
}

// Simple Gallery Filter/Interaction
const galleryImages = document.querySelectorAll('.gallery-item');
galleryImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = '0.4s';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Booking Button Action
function openBooking() {
    // This could trigger a Calendly popup
    alert("Opening Secure Booking System...");
}
