'use strict';

const $btn = document.getElementById('show');
const $nav = document.getElementById('nav');

$btn.addEventListener('click', function() {
  $nav.classList.toggle('active');
  $btn.classList.toggle('open');
});
