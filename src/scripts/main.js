/* eslint-disable no-undef */
'use strict';

// console.log('hello mate academy!');

$(document).ready(function() {
  $('.header__mob-icon').on('click', function() {
    $('.nav').toggleClass('open');
    $('.info__title-name').toggleClass('open');
  });
});
