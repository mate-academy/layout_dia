"use strict";
const slider = document.querySelector(".header__slider-img");
const prevButton = document.querySelector(".header__slider-buttons-first");
const nextButton = document.querySelector(".header__slider-buttons-second");
const slides = Array.from(slider.querySelectorAll(".header__slider-img-design"));
const slideCount = slides.length;
let slideIndex = 0;
prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}
function updateSlider() {
    slides.forEach((slide, index)=>{
        if (index === slideIndex) slide.style.display = "block";
        else slide.style.display = "none";
    });
}
updateSlider();

//# sourceMappingURL=index.f75de5e1.js.map
