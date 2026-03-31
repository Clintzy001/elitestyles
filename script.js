// Hero Background Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(nextSlide, 5000); // Change image every 5 seconds
}

// Simple Appointment logic
const bookBtns = document.querySelectorAll('.btn-dark');
bookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(btn.innerText.includes('Book Now')) {
            console.log("Redirecting to booking system...");
            // Link to Calendly or Acuity here
        }
    });
});
