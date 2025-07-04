document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button--components');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector('#contacts');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
