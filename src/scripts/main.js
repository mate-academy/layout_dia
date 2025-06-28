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
  const fields = ['email', 'name', 'message'];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasErrors = false;

    fields.forEach((fieldName) => {
      const field = form.elements[fieldName];
      const value = field.value.trim();

      if (!value) {
        field.classList.add('input-error');
        hasErrors = true;
      } else {
        field.classList.remove('input-error');
      }
    });

    if (hasErrors) {
      return; // не отправляем
    }

    // Успешно: логика отправки
    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const message = form.message.value.trim();

    console.log('Form data:', { email, name, message });

    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Снимаем ошибку при вводе
  fields.forEach((fieldName) => {
    const field = form.elements[fieldName];
    field.addEventListener('input', () => {
      if (field.value.trim()) {
        field.classList.remove('input-error');
      }
    });
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
