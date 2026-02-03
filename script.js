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

// ================================
// DONORS MARQUEE ENHANCEMENT (fixed)
// ================================
const donorsTrack = document.querySelector('.donors-track');

if (donorsTrack) {
    // Do NOT clone logos. Cloning caused the repeating/circular effect.
    // Keep the track as-is and rely on overflow:hidden for a single smooth scroll.
    donorsTrack.style.whiteSpace = 'nowrap';
    donorsTrack.style.display = 'flex';
    donorsTrack.style.alignItems = 'center';
    // optional: ensure images can't wrap
    donorsTrack.querySelectorAll('img').forEach(img => {
        img.style.display = 'inline-block';
    });
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
// ================================
// IMPACT NUMBERS ANIMATION
// ================================
function animateNumbers() {
    const impactNumbers = document.querySelectorAll('.impact-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);
    
    impactNumbers.forEach(number => {
        observer.observe(number);
    });
}

// Initialize number animation when DOM is loaded
document.addEventListener('DOMContentLoaded', animateNumbers);

// Update slideshow arrows
const slideshowArrowLeft = document.querySelector('.slideshow-arrow-left');
const slideshowArrowRight = document.querySelector('.slideshow-arrow-right');

function prevSlideCustom() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

if (slideshowArrowLeft && slides.length > 0) {
    slideshowArrowLeft.addEventListener('click', prevSlideCustom);
}

if (slideshowArrowRight && slides.length > 0) {
    slideshowArrowRight.addEventListener('click', nextSlide);
}

// ================================
// SCROLL ANIMATIONS
// ================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const elementsToAnimate = [
        ...document.querySelectorAll('.impact-circle'),
        ...document.querySelectorAll('.section-title'),
        ...document.querySelectorAll('.wwd-content'),
        ...document.querySelectorAll('.wwd-images'),
        document.querySelector('.footer')
    ].filter(Boolean);

    elementsToAnimate.forEach(el => observer.observe(el));
}

// ================================
// HEADER SCROLL EFFECT
// ================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ================================
// PARALLAX EFFECT FOR SECTIONS
// ================================
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for hero slideshow
        const heroSlideshow = document.querySelector('.hero-slideshow');
        if (heroSlideshow) {
            heroSlideshow.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        // Parallax for impact section background
        const impactSection = document.querySelector('.impact-section');
        if (impactSection && scrolled > impactSection.offsetTop - window.innerHeight) {
            const offset = (scrolled - (impactSection.offsetTop - window.innerHeight)) * 0.3;
            impactSection.style.backgroundPosition = `center ${offset}px`;
        }
    });
}

// ================================
// ENHANCED SLIDESHOW WITH KEYBOARD
// ================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && typeof prevSlideCustom === 'function') {
            prevSlideCustom();
        } else if (e.key === 'ArrowRight' && typeof nextSlide === 'function') {
            nextSlide();
        }
    });
}

// ================================
// RIPPLE EFFECT FOR BUTTONS
// ================================
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple-effect');

    const rippleEffect = button.getElementsByClassName('ripple-effect')[0];
    if (rippleEffect) {
        rippleEffect.remove();
    }

    button.appendChild(ripple);
}

function initRippleEffects() {
    const buttons = document.querySelectorAll('.btn-donate, .contact-form-footer button, .btn-submit');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

// ================================
// LAZY LOAD IMAGES
// ================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ================================
// COUNTER ANIMATION ENHANCEMENT
// ================================
function enhancedAnimateNumbers() {
    const impactNumbers = document.querySelectorAll('.impact-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2500; // 2.5 seconds for smoother animation
        const fps = 60;
        const totalFrames = (duration / 1000) * fps;
        let currentFrame = 0;
        
        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
        
        const updateCounter = () => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(easedProgress * target);
            
            element.textContent = currentValue.toLocaleString();
            
            if (currentFrame < totalFrames) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                setTimeout(() => {
                    animateCounter(entry.target);
                }, 300);
            }
        });
    }, observerOptions);
    
    impactNumbers.forEach(number => {
        observer.observe(number);
    });
}

// ================================
// TESTIMONIALS AUTO-PLAY
// ================================
let testimonialAutoPlayInterval;

function startTestimonialAutoPlay() {
    testimonialAutoPlayInterval = setInterval(() => {
        if (typeof nextTestimonial === 'function') {
            nextTestimonial();
        }
    }, 8000); // Change every 8 seconds
}

function stopTestimonialAutoPlay() {
    if (testimonialAutoPlayInterval) {
        clearInterval(testimonialAutoPlayInterval);
    }
}

function initTestimonialAutoPlay() {
    const testimonialContainer = document.querySelector('.testimonials-container');
    if (testimonialContainer) {
        startTestimonialAutoPlay();
        
        // Pause on hover
        testimonialContainer.addEventListener('mouseenter', stopTestimonialAutoPlay);
        testimonialContainer.addEventListener('mouseleave', startTestimonialAutoPlay);
    }
}

// ================================
// PRELOADER
// ================================
function initPreloader() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Trigger animations after page load
        setTimeout(() => {
            document.querySelectorAll('.section-title').forEach(title => {
                title.classList.add('animate');
            });
        }, 300);
    });
}

// ================================
// FORM VALIDATION ENHANCEMENT
// ================================
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formButton = form.querySelector('button[type="submit"]');
            const originalText = formButton.textContent;
            
            // Show loading state
            formButton.textContent = 'Sending...';
            formButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                formButton.textContent = '✓ Sent!';
                formButton.style.backgroundColor = '#4CAF50';
                
                setTimeout(() => {
                    formButton.textContent = originalText;
                    formButton.disabled = false;
                    formButton.style.backgroundColor = '';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    });
}

// ================================
// INITIALIZE ALL ANIMATIONS
// ================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initHeaderScroll();
    initSmoothScroll();
    initParallax();
    initKeyboardNavigation();
    initRippleEffects();
    initLazyLoading();
    enhancedAnimateNumbers();
    initTestimonialAutoPlay();
    initPreloader();
    initFormValidation();
    
    console.log('%c✨ Vibhinna India Foundation - Enhanced Version', 
                'color: #28563E; font-size: 16px; font-weight: bold; padding: 10px;');
    console.log('%c🌱 All animations loaded successfully!', 
                'color: #508048; font-size: 14px;');
});

// ================================
// PERFORMANCE OPTIMIZATION
// ================================
// Debounce function for scroll events
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

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ================================
// FIX: Enhanced number animation with yellow color
// ================================
function fixedAnimateNumbers() {
    const impactNumbers = document.querySelectorAll('.impact-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2500;
        const fps = 60;
        const totalFrames = (duration / 1000) * fps;
        let currentFrame = 0;
        
        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
        
        // Keep yellow during animation
        element.style.color = '#DEB029';
        
        const updateCounter = () => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(easedProgress * target);
            
            element.textContent = currentValue.toLocaleString();
            
            if (currentFrame < totalFrames) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                    // Change to white after animation completes
                    element.style.color = 'white';
                    element.classList.add('animated');
                }, 200);
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counting')) {
                entry.target.classList.add('counting');
                setTimeout(() => {
                    animateCounter(entry.target);
                }, 300);
            }
        });
    }, observerOptions);
    
    impactNumbers.forEach(number => {
        observer.observe(number);
    });
}

// Replace the old animation with the fixed one
document.addEventListener('DOMContentLoaded', () => {
    fixedAnimateNumbers();
});

// ================================
// FIX: Donors marquee - ensure it works
// ================================
function initDonorsMarquee() {
    const donorsTrack = document.querySelector('.donors-track');
    
    if (donorsTrack) {
        // Clone the donor logos for seamless loop
        const donorLogos = donorsTrack.innerHTML;
        donorsTrack.innerHTML += donorLogos; // Duplicate content for seamless loop
        
        console.log('Donors marquee initialized');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initDonorsMarquee();
});

// ================================
// FIX: Slideshow z-index on scroll
// ================================
function fixSlideshowZIndex() {
    const heroSlideshow = document.querySelector('.hero-slideshow');
    const impactSection = document.querySelector('.impact-section');
    
    if (heroSlideshow && impactSection) {
        window.addEventListener('scroll', () => {
            const slideshowBottom = heroSlideshow.getBoundingClientRect().bottom;
            
            if (slideshowBottom < 0) {
                heroSlideshow.style.zIndex = '0';
            } else {
                heroSlideshow.style.zIndex = '1';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fixSlideshowZIndex();
});