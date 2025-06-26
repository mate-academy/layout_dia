document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    form.reset();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
