'use strict';

// Menu button
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

menuButton.onclick = function(event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('active');
};

// Закриття меню при кліку поза його межами
document.onclick = function(event) {
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
};





// Image carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".header__carousel-image");

function showSlide(index) {
  const totalSlides = slides.length;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");

    if (i === index) {
      slide.classList.add("active");
    }
  });

  const offset = -currentSlide * 100;
  const imagesContainer = document.querySelector('.header__carousel-images');
  imagesContainer.style.transform = `translateX(${offset}%)`;
}

function plusSlide(n) {
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

