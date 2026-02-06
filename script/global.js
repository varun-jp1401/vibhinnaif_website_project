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
    const animatedElements = document.querySelectorAll('.campaign-card, .focus-card, .testimonial-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// ================================
// HEADER SCROLL EFFECT
// ================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// ================================
// SMOOTH SCROLL INITIALIZATION
// ================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ================================
// PARALLAX SCROLL EFFECTS
// ================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(window.scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ================================
// KEYBOARD NAVIGATION
// ================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

// ================================
// RIPPLE EFFECT ON BUTTONS
// ================================
function initRippleEffects() {
    const buttons = document.querySelectorAll('button, .btn-donate, .btn-campaign, .btn-cta');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ================================
// LAZY LOADING FOR IMAGES
// ================================
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
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
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ================================
// SCROLL ANIMATIONS
// ================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });
}

// ================================
// FOOTER ANIMATION ON SCROLL
// ================================
function initFooterAnimation() {
    const footer = document.querySelector('.footer');
    
    if (footer) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        footerObserver.observe(footer);
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
    initPreloader();
    initFormValidation();
    initFooterAnimation();
    
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
