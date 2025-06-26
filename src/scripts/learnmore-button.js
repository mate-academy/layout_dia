document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.header__content-btn').addEventListener('click', () => {
    const target = document.querySelector('#expertise');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
