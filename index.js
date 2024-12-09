let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.review-slider-card');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
            dots[index].classList.add('active');
        }
    });
}

function currentSlide(index) {
    currentIndex = index - 1;
    showSlides();
}


showSlides();


setInterval(() => {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.review-slider-card').length;
    showSlides();
}, 10000); 