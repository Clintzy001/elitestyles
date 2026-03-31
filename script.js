// Smooth scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// WhatsApp chat functionality - Open WhatsApp when the icon is clicked
document.querySelector('.whatsapp-chat a').addEventListener('click', function () {
    window.open('https://wa.me/123456789', '_blank'); // replace with your WhatsApp number
});

// Optional: Auto hide the WhatsApp chat icon on scroll down for better user experience
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let whatsappChat = document.querySelector('.whatsapp-chat');
    if (window.pageYOffset > lastScrollTop) {
        // scrolling down, hide the chat icon
        whatsappChat.style.display = "none";
    } else {
        // scrolling up, show the chat icon
        whatsappChat.style.display = "block";
    }
    lastScrollTop = window.pageYOffset <= 0 ? 0 : window.pageYOffset; // For Mobile or negative scrolling
}, false);

// Optional: Add a simple client-side form validation for the contact form
document.querySelector('#contact-form')?.addEventListener('submit', function (e) {
    const name = document.querySelector('#contact-name').value.trim();
    const email = document.querySelector('#contact-email').value.trim();
    const message = document.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields!');
    }
});

// Optional: Add animations on page load (e.g., fade-in effect)
window.onload = function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300); // delay each element appearance
    });
};

// Optional: Adding a scroll-to-top button functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide the scroll-top button when scrolling
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
