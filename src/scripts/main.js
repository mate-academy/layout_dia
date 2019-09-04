'use strict';

const $ = window.$;
$(document).ready(function() {
  $('.slider').slick({
    prevArrow: "<button type='button' class='control control-prev'></button>",
    nextArrow: "<button type='button' class='control control-next'></button>",
  });

  const navigation = $('.header-nav');
  const navigationLinks = $('.nav__link');
  const overlay = $('.overlay');

  $('.drawer-toggle').on('click', () => {
    navigation.toggleClass('open');
    overlay.toggleClass('show');
  });

  navigationLinks.on('click', function() {
    navigationLinks.removeClass('active');
    $(this).toggleClass('active');
  });

  $(document).mouseup(function(e) {
    if (navigation.has(e.target).length === 0) {
      navigation.removeClass('open');
      overlay.removeClass('show');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
