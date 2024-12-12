(function () {
  function handleFormSubmit(formSelector, alertSelector, timeout = 2000) {
    const form = document.querySelector(formSelector);
    const alert = document.querySelector(alertSelector);

    if (!form || !alert) {
      console.error('Form or alert element not found');
      return;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fields = form.querySelectorAll('input, textarea');

      alert.style.transform = 'translateX(0)';

      setTimeout(() => {
        alert.style.transform = 'translateX(150%)';
      }, timeout);

      fields.forEach((field) => {
        field.value = '';
      });
    });
  }

  handleFormSubmit('.footer__form', '.alert', 2000);
})();
