const navLinks = document.querySelectorAll('.nav__item');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => {
      item.classList.remove('nav__item--active');
    });

    link.classList.add('nav__item--active');
  });
});
