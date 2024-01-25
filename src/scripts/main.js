'use strict';

const j = jQuery.noConflict();

j(document).ready(function() {
  j('.slick').slick({
    settings: {
      infinite: true,
      adaptiveHeight: true,
      adaptiveWidth: true,
      dots: true,
      arrows: true,
      draggable: false,
      lazyLoad: 'eager',
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  });
});
