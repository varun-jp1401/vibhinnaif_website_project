// ================================
// HERO SLIDESHOW
// ================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideIndicators = document.querySelectorAll('.slideshow-indicators .indicator');

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (slideIndicators[index]) {
        slideIndicators[index].classList.add('active');
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slideshow every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
    
    // Click indicator to change slide
    slideIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// ================================
// TESTIMONIALS CAROUSEL
// ================================
let currentTestimonial = 0;
const testimonialItems = document.querySelectorAll('.testimonial-item');
const testimonialIndicators = document.querySelectorAll('.testimonial-indicators .indicator');
const testimonialArrowLeft = document.querySelector('.testimonial-arrow-left');
const testimonialArrowRight = document.querySelector('.testimonial-arrow-right');

function showTestimonial(index) {
    // Remove active class from all testimonials and indicators
    testimonialItems.forEach(item => item.classList.remove('active'));
    testimonialIndicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current testimonial and indicator
    if (testimonialItems[index]) {
        testimonialItems[index].classList.add('active');
    }
    if (testimonialIndicators[index]) {
        testimonialIndicators[index].classList.add('active');
    }
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}

// Arrow navigation
if (testimonialArrowLeft) {
    testimonialArrowLeft.addEventListener('click', prevTestimonial);
}

if (testimonialArrowRight) {
    testimonialArrowRight.addEventListener('click', nextTestimonial);
}

// Indicator navigation
testimonialIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// ================================
// GALLERY LIGHTBOX
// ================================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
let currentGalleryIndex = 0;

function openLightbox(index) {
    currentGalleryIndex = index;
    const imgSrc = galleryItems[index].querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
    const imgSrc = galleryItems[currentGalleryIndex].querySelector('img').src;
    lightboxImg.src = imgSrc;
}

function showNextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
    const imgSrc = galleryItems[currentGalleryIndex].querySelector('img').src;
    lightboxImg.src = imgSrc;
}

// Gallery item click handlers
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});

// Lightbox controls
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// ================================
// FORM HANDLING
// ================================
const footerForms = document.querySelectorAll('.contact-form-footer');
const contactForm = document.querySelector('.contact-form');

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    e.target.reset();
}

// Add submit handlers to all forms
footerForms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
});

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ================================
// SMOOTH SCROLLING
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// MOBILE MENU TOGGLE (Optional Enhancement)
// ================================
// This can be implemented if you want a hamburger menu for mobile
const createMobileMenu = () => {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    
    if (window.innerWidth <= 768) {
        // Mobile menu logic can be added here
        // For now, the CSS handles basic responsive layout
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// ================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.impact-circle, .focus-card, .campaign-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ================================
// DONORS MARQUEE ENHANCEMENT
// ================================
// The CSS animation handles the marquee, but we can add
// additional touch/mouse interactions if needed

const donorsTrack = document.querySelector('.donors-track');

if (donorsTrack) {
    // Clone the donor logos for seamless loop
    const donorLogos = donorsTrack.innerHTML;
    donorsTrack.innerHTML += donorLogos;
}

// ================================
// PAGE LOAD PERFORMANCE
// ================================
window.addEventListener('load', () => {
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    // Preload hero images for smoother transitions
    const heroImages = document.querySelectorAll('.slide img');
    heroImages.forEach(img => {
        const preloadImg = new Image();
        preloadImg.src = img.src;
    });
});

// ================================
// UTILITY FUNCTIONS
// ================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to resize handlers
window.addEventListener('resize', debounce(() => {
    // Handle any resize-specific logic here
    console.log('Window resized');
}, 250));

// ================================
// ACCESSIBILITY ENHANCEMENTS
// ================================

// Add keyboard navigation to slideshow
document.addEventListener('keydown', (e) => {
    if (slides.length > 0 && document.activeElement.closest('.hero-slideshow')) {
        if (e.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    }
});

// Add focus management for better keyboard navigation
const focusableElements = document.querySelectorAll(
    'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
);

focusableElements.forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #508048';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = '';
        element.style.outlineOffset = '';
    });
});

// ================================
// CONSOLE MESSAGE
// ================================
console.log('%c🌱 Vibhinna India Foundation', 'color: #28563E; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #508048; font-size: 14px;');