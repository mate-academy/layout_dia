'use strict';
const slides = document.querySelector('.header__slides');
const slide = document.querySelectorAll('.header__slide');
const prevButton = document.querySelector('.header__arrow-left');
const nextButton = document.querySelector('.header__arrow-right');

let currentIndex = 0;

function updateSlide(index) {
  const slideWidth = slide[0].clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slide.length - 1 : currentIndex - 1;
  updateSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === slide.length - 1) ? 0 : currentIndex + 1;
  updateSlide(currentIndex);
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
