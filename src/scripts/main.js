'use strict';

const $btn = document.getElementById('show');
const $nav = document.getElementById('nav');
const $link = document.querySelector('.nav__list');

$btn.addEventListener('click', function() {
  $nav.classList.toggle('active');
  $btn.classList.toggle('open');
});

$link.addEventListener('click', function() {
  $nav.classList.remove('active');
  $btn.classList.remove('open');
});
