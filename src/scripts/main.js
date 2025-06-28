const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const images = document.querySelectorAll('.hero__slider-image');

let current = 0;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle('hidden', i !== index);
  });
}

buttonLeft.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
});

buttonRight.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showSlide(current);
});

showSlide(current);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // предотвращаем реальную отправку

    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const message = form.message.value.trim();

    // Простая валидация
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email || !name || !message || !emailValid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    // Имитируем успешную отправку
    console.log('Form data:', { email, name, message });

    form.reset(); // очищаем
    window.scrollTo({ top: 0, behavior: 'smooth' }); // скролл наверх
  });
});


const dialog = document.getElementById('mobileOverlay');
const links = document.querySelectorAll('.mobile-overlay__link, .header__hire-us');

links.forEach(link => {
  link.addEventListener('click', () => {
    if (dialog.open) {
      dialog.close();
    }
  });
});