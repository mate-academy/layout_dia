'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
  let slideIndex = 1;
  let intervalId;

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    let x = document.getElementsByClassName('slider__img');
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    x[slideIndex - 1].style.display = 'block';
  }

  function autoPlay() {
    plusDivs(1);
  }

  function startAutoPlay() {
    intervalId = setInterval(autoPlay, 5000);
  }

  function stopAutoPlay() {
    clearInterval(intervalId);
  }

  let prevButton = document.querySelector('.slider__button--prev');
  let nextButton = document.querySelector('.slider__button--next');

  prevButton.addEventListener('click', function () {
    stopAutoPlay();
    plusDivs(-1);
  });

  nextButton.addEventListener('click', function () {
    stopAutoPlay();
    plusDivs(1);
  });

  startAutoPlay();
});

document.addEventListener('DOMContentLoaded', function () {
  let links = document.querySelectorAll('.autofocus-link');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      window.location.hash = 'contact-form';

      document
        .getElementById('myForm')
        .querySelector('input:first-of-type')
        .focus();

      document
        .getElementById('contact-form')
        .scrollIntoView({ block: 'start' });
    });
  });
});
