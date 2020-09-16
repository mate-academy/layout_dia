'use strict';

// scroll-behavior

const anchors = document.querySelectorAll('a[href*="#"]');

for (const anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();

    const blockID = anchor.getAttribute('href');

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// $(function(){
//
//   $('.some_link').on('click', function(e){
//     $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
//     e.preventDefault();
//   });
//
// });
