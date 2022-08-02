window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

// eslint-disable-next-line no-new, no-undef, no-unused-vars
const swiper = new Swiper('.slider', {
  loop: true,

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
