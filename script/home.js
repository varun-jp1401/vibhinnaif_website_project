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

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
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

// Slideshow arrow navigation
const slideshowArrowLeft = document.querySelector('.slideshow-arrow-left');
const slideshowArrowRight = document.querySelector('.slideshow-arrow-right');

if (slideshowArrowLeft) {
    slideshowArrowLeft.addEventListener('click', prevSlide);
}

if (slideshowArrowRight) {
    slideshowArrowRight.addEventListener('click', nextSlide);
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
// COUNTER ANIMATION
// ================================
function animateNumbers() {
    const impactNumbers = document.querySelectorAll('.impact-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
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

// ================================
// ENHANCED NUMBER ANIMATION
// ================================
function enhancedAnimateNumbers() {
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
    initTestimonialAutoPlay();
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
    initImpactCirclesAnimation();
    initWhatWeDoAnimation();
});

// ================================
// IMPACT CIRCLES SCROLL ANIMATION
// ================================
function initImpactCirclesAnimation() {
    const impactCircles = document.querySelectorAll('.impact-circle');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    impactCircles.forEach(circle => {
        observer.observe(circle);
    });
}

// ================================
// WHAT WE DO SECTION SCROLL ANIMATION
// ================================
function initWhatWeDoAnimation() {
    const wwdContent = document.querySelector('.wwd-content');
    const wwdImages = document.querySelector('.wwd-images');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    if (wwdContent) observer.observe(wwdContent);
    if (wwdImages) observer.observe(wwdImages);
}