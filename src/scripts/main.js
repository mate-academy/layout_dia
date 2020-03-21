'use strict';

const $btn = document.getElementById('show');
const $nav = document.getElementById('nav');
const $link = document.querySelector('.nav__list');
const $scrollButton = document.querySelector('.scroll-button');

$btn.addEventListener('click', function() {
  $nav.classList.toggle('active');
  $btn.classList.toggle('open');
});

$link.addEventListener('click', function() {
  $nav.classList.remove('active');
  $btn.classList.remove('open');
});

// $(document).ready(function(){
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 5000) {
//       $('#header').css('visibility', 'hidden');
//     } else {
//       $('#header').css('visibility', 'visible');
//     }
//   });
// });

window.onscroll = function() {
  if (window.pageYOffset > 700) {
    $scrollButton.classList.add('show');
  } else {
    $scrollButton.classList.remove('show');
  }
};

$scrollButton.addEventListener('click', function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
