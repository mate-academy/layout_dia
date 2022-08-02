window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

// eslint-disable-next-line no-new, no-undef, no-unused-vars
const swiper = new Swiper('.swiper', {
  // eslint-disable-next-line no-undef
  modules: [Navigation],

  loop: true,

  navigation: {
    nextEl: '.button-prev',
    prevEl: '.button-next',
  },

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
