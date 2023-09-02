'use strict';

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.footer__link');
const form = document.querySelector('.footer__form');
const menuPageLink = document.querySelector('.btn-page__link');
const btnLinks = document.querySelectorAll('.btn__link');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    document.body.classList.add('menu-active');
  } else {
    document.body.classList.remove('menu-active');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-active');
  });
});

menuBtn.addEventListener('click', function() {
  if (!menu.classList.contains('active')) {
    menu.style.transform = 'translateX(100%)';
  } else {
    menu.style.transform = '';
  }
});

function handleMenuLinkClick(event) {
  event.preventDefault();
  menu.style.transform = 'translateX(100%)';
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  document.body.classList.remove('menu-active');
}

menuPageLink.addEventListener('click', handleMenuLinkClick);

btnLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('menu-active');
  });
});

function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    document.body.classList.add('landscape');
  } else {
    document.body.classList.remove('landscape');
  }
}

checkOrientation();

window.addEventListener('resize', checkOrientation);

const sliderLinks = document.querySelectorAll('.slider__link');
const sliderPhotos = document.querySelectorAll('.slider-photo');

let activeSlideIndex = 0;

function slideRight() {
  if (activeSlideIndex < sliderPhotos.length - 1) {
    activeSlideIndex++;
  } else {
    activeSlideIndex = 0;
  }

  updateSlider();
}

function slideLeft() {
  if (activeSlideIndex > 0) {
    activeSlideIndex--;
  } else {
    activeSlideIndex = sliderPhotos.length - 1;
  }

  updateSlider();
}

function updateSlider() {
  sliderPhotos.forEach(photo => {
    photo.style.display = 'none';
  });

  sliderPhotos[activeSlideIndex].style.display = 'block';
}

sliderLinks[0].onclick = slideRight;
sliderLinks[1].onclick = slideLeft;
