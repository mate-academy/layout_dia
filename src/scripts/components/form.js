'use strict';

const form = document.querySelector('.js-contacts_form');

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  for (let [name, value] of formData.entries()) {
    console.log(name, ':', value);
  }

  form.reset();
  window.scrollTo(0, 0);
};
