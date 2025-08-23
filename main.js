// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
 
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.querySelector('span i').className = 'fas fa-moon';
} else {
    body.removeAttribute('data-theme');
    themeToggle.querySelector('span i').className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.querySelector('span i').className = 'fas fa-sun';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.querySelector('span i').className = 'fas fa-moon';
    }
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Send the form with EmailJS
    emailjs.sendForm(
        "service_zdf8zsj",   
        "template_orhf4tp",  
        contactForm
    ).then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
    }).catch((error) => {
        console.error("❌ Error:", error);
        alert("Oops! Something went wrong. Please try again.");
    });

    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
