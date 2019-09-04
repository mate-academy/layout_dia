'use strict';

const $ = window.$;
$(document).ready(function() {
  $('.slider').slick({
    prevArrow: "<button type='button' class='control control-prev'></button>",
    nextArrow: "<button type='button' class='control control-next'></button>",
  });
});
