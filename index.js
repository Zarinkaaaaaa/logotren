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



const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)