export function validateForm() {
  const form = document.getElementById('footer-form');

  form.addEventListener('submit', function (event) {
    const email = document.getElementById('email');
    const name = form.querySelector('input[name="name"]');
    const message = form.getElementById('textarea[name="message"]');

    if (!email.value || !name.value || !message.value) {
      event.preventDefault();
      alert('Всі поля повинні бути заповнені!')
    }
  });
}
