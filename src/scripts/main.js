'use strict';

const menuBtn = document.querySelector('.burger');
const menuVisible = document.querySelector('.menu');
const bodyscroll = document.querySelector('.page');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('cross');
  menuBtn.classList.toggle('show');
  menuVisible.classList.toggle('show');

  bodyscroll.classList.toggle('scroll');
});
