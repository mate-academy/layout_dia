// eslint-disable-next-line strict
const btnRight = document.querySelector('.header__button');
const slides = document.querySelectorAll('.header__img');

let i = 0;

btnRight.addEventListener('click', function() {
  ++i;

  if (i >= slides.length) {
    slides[i - 1].classList.remove('header__img--active');
    i = 0;
    slides[i].classList.add('header__img--active');
  } else {
    slides[i - 1].classList.remove('header__img--active');
    slides[i].classList.add('header__img--active');
  }
});
