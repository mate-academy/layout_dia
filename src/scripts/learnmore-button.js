document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.header__content-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector('#expertise');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
