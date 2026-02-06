const loadMoreBtn = document.getElementById("loadMoreBtn")
const seeLessBtn = document.getElementById("seeLessBtn")
const hiddenItems = document.querySelectorAll(".gallery-item.hidden")

loadMoreBtn.onclick = () => {
    hiddenItems.forEach(i => i.classList.remove("hidden"))
    loadMoreBtn.classList.add("hidden")
    seeLessBtn.classList.remove("hidden")
}

seeLessBtn.onclick = () => {
    hiddenItems.forEach(i => i.classList.add("hidden"))
    seeLessBtn.classList.add("hidden")
    loadMoreBtn.classList.remove("hidden")
    window.scrollTo({ top: document.querySelector(".gallery-section").offsetTop, behavior: "smooth" })
}

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
