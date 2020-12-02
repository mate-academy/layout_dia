'use strict';

$(document).ready(function() {
  // Smooth scrolling
  $('.smooth-scroll').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Store hash
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 1000, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  // Showcase slider configuration
  setInterval(function() {
    // prevent slider from not loading
    $('.showcase__slider').not('.slick-initialized').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
    });
  }, 5);

  // Slider arrows should adapt to text height
  if ($(window).width() > 1200) {
    $('.showcase__slider .slick-arrow').css('bottom',
      $('.showcase__slider-info').height());
  }

  // Mobile navigation
  $('.nav__mobile-button').on('click', function() {
    $('.nav__mobile-list').slideToggle();

    $('.nav__mobile').toggleClass('nav__mobile--opened');
  });

  // Animations on scroll
  const wow = new WOW();

  wow.init();

  // Showcase info cannot be placed in the container, but has to be in it
  if ($(window).width() > 1175) {
    $('.showcase__info').css('margin-left', ($(window).width() - 1145) / 2);
  } else if ($(window).width() > 710) {
    $('.showcase__info').css('margin-left', 15);
  } else {
    $('.showcase__info').css('margin-left', 0);
  }

  $(window).on('resize', function() {
    if ($(window).width() > 1175) {
      $('.showcase__info').css('margin-left', ($(window).width() - 1145) / 2);
    } else if ($(window).width() > 710) {
      $('.showcase__info').css('margin-left', 15);
    } else {
      $('.showcase__info').css('margin-left', 0);
    }
  });
});
