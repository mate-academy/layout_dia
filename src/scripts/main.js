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

// toggle mobile menu open/close

const mainMenuButton = document.querySelector('.header__hamburger');

const handlerToddleMenu = (e) => {
  e.preventDefault();

  const header = document.querySelector('.header');

  if (!header.classList.contains('menu--open')) {
    header.classList.add('menu--open');
  } else if (header.classList.contains('menu--open')) {
    header.classList.remove('menu--open');
  }
};

mainMenuButton.addEventListener('click', handlerToddleMenu);

// toggle active link in menu

const navBar = document.querySelector('.nav-bar');

const handlerClick = function(e) {
  e.preventDefault();

  if (e.target.tagName !== 'A') {
    return;
  }

  const arrayOfClasses = Array.from(this.querySelectorAll('.nav-bar__link'));

  arrayOfClasses.map(el => el.classList.remove('nav-bar__link--active'));
  e.target.classList.add('nav-bar__link--active');
};

navBar.addEventListener('click', handlerClick);
