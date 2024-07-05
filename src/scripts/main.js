'use strict';
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.classList.add("active");
          } else {
              slide.classList.remove("active");
          }
      });
  }

  prevBtn.addEventListener("click", function() {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", function() {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      showSlide(currentIndex);
  });
});

document.getElementById('first__button').addEventListener('click', function() {
  // Перехід до другого блоку при натисканні кнопки
  document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('second__button').addEventListener('click', function() {
  // Перехід до другого блоку при натисканні кнопки
  document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('third__button').addEventListener('click', function() {
  // Перехід до другого блоку при натисканні кнопки
  document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('fourth__button').addEventListener('click', function() {
  // Перехід до другого блоку при натисканні кнопки
  document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.menu').addEventListener('wheel', function(event) {
  event.preventDefault();
}, { passive: false });

document.body.style.overflowX = 'hidden';
