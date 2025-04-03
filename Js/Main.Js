// Main JavaScript functionality for Dr. Ahmed Sakr's portfolio website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize mobile menu if needed in the future
    // initMobileMenu();
});

// Animation on scroll functionality
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Initial check for elements in viewport
    checkAnimations();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkAnimations);
    
    function checkAnimations() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate-fade-in');
            }
        });
    }
}

// Back to top button functionality
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Function to handle form submissions (for contact form)
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    
    // Here you would typically send the form data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted with data:', Object.fromEntries(formData));
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    
    // Replace form with success message
    form.parentNode.replaceChild(successMessage, form);
}

// Add form submission handler to any contact forms
const contactForms = document.querySelectorAll('form.contact-form');
contactForms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
});
