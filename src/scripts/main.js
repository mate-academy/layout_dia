'use strict';

const form = document.getElementById('form');
form.addEventListener('submit',function(event){
  event.preventDefault();

  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
})



  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const images = slider.getElementsByClassName('hero__slider_photos-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;


    function updateSlider() {
      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
      }
      images[currentIndex].classList.add('active');
    }

    function showPrev() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      updateSlider();
    }

    function showNext() {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      updateSlider();
    }

    prevButton.addEventListener('click', showPrev);
    nextButton.addEventListener('click', showNext);

    updateSlider();
  });

