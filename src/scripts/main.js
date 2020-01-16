/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
/* global jQuery */
/* eslint-env jquery */
// eslint-disable-next-line strict
$(document).ready(function() {
  $('#nav').on('click', 'a', function(event) {
    event.preventDefault();

    const id = $(this).attr('href');
    const top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});
