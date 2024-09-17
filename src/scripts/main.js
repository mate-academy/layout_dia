'use strict';
let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

  document
    .getElementById('prev-img')
    .addEventListener('click', function (event) {
      event.preventDefault(); // Запобігти стандартному переходу по посиланню
      plusSlides(-1);
    });

  document
    .getElementById('next-img')
    .addEventListener('click', function (event) {
      event.preventDefault(); // Запобігти стандартному переходу по посиланню
      plusSlides(1);
    });
