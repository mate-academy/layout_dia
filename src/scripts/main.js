/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('gallery__item');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

$('.form').submit(function() {
  $('.form__success').addClass('form__success--active').hide().fadeIn();

  setTimeout(function() {
    $('.form__success').removeClass('form__success--active').fadeOut();
    $('.form').trigger('reset');
  }, 2000);

  return false;
});

$('.nav__burger').click(function() {
  $(this).toggleClass('nav__burger--open');
  $('.nav__mobile').toggleClass('nav__mobile--open');

  return false;
});

$(window).scroll(function() {
  if ($(window).scrollTop() > $(window).height()) {
    $('.top').addClass('top--active');
  } else {
    $('.top').removeClass('top--active');
  }
});

$('.top').click(function() {
  $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
});
