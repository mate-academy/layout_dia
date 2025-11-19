const togglers = document.querySelectorAll('.menu__burger, .header__burger');
const menu = document.querySelector('.page__menu');
const nav__items = document.querySelectorAll('.nav__item');

togglers.forEach(btn =>
  btn.addEventListener('click', () => {
    menu.classList.toggle('page__menu--is-open');
  })
);

nav__items.forEach(link =>
  link.addEventListener('click', () => {
    menu.classList.remove('page__menu--is-open');
  })
);
