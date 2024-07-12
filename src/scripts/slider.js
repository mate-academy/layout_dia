const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 2500,
  },

  navigation: {
    nextEl: '.slide-card__button--next',
    prevEl: '.slide-card__button--prev',
  },
});
