let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
  slides.forEach(slide => {
    slide.classList.remove('active');
    slide.classList.remove('next');
    slide.classList.remove('prev');
  });

  slides[n].classList.add('active');
  const nextSlideIndex = (n + 1) % totalSlides;
  const prevSlideIndex = (n - 1 + totalSlides) % totalSlides;

  slides[nextSlideIndex].classList.add('next');
  slides[prevSlideIndex].classList.add('prev');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

showSlide(currentSlide);

let root = document.querySelector(":root");
let button = document.querySelector("#dark");
let cardNumber = document.querySelector(".card__number");
let cardClick = document.querySelector(".card__click");

button.addEventListener('click', (event) => {
  event.preventDefault();
  root.classList.toggle('dark');
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.reset();
  });
});

