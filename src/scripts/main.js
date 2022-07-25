'use strict';

// onload = () => {
//   var currentIndex = 1;
  
//   displaySlides(currentIndex);
  
//   function setSlides(num) {
//     displaySlides(currentIndex += num)
//   }
  
//   function displaySlides(num) {
//     var x;
//     var slides = document.getElementsByClassName("slide");
//     if (num > slides.length) {currentIndex = 1};
//     if (num <1) {currentIndex = slides.length};
//     for (x = 0; x < slides.length; x++) {
//       slides[x].styles.display = "none";
//     }
  
//     slides[currentIndex - 1].styles.display = "block"
//   }
// }

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("dropdown__content--show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown__button')) {
    var dropdowns = document.getElementsByClassName("dropdown__content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown__content--show')) {
        openDropdown.classList.remove('dropdown__content--show');
      }
    }
  }
}

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-field');
const textarea = document.querySelector('.form-field--textarea');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });

  textarea.value = '';
});

