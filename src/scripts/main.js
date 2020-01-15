'use strict';

$(function() {

  $('.slider__list').slick({
    autoplay: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

});

const mainMenuButton = document.querySelector('.header__hamburger');

const handlerToddleMenu = (e) => {
  e.preventDefault();

  const header = document.querySelector('.header__nav');

  if (!header.classList.contains('menu--open')) {
    header.classList.add('menu--open');
  } else if (header.classList.contains('menu--open')) {
    header.classList.remove('menu--open');
  }
};

mainMenuButton.addEventListener('click', handlerToddleMenu);
