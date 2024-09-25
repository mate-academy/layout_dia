'use strict';

var slideIndex = 1;
showSlides(slideIndex);
console.log('hello');
function plusSlides(n) {

  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
console.log('hello dear');
  if (slides.length === 0) {
    console.error('No slides found.');
    return;
  }

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

const element1 = document.getElementById("prev-img");
element1.addEventListener("click", plusSlides(-1));
console.log(element1);
const element2 = document.getElementById("next-img");
element2.addEventListener("click", plusSlides(1));
console.log(element2);
