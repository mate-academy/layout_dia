'use strict';

document.getElementById('mob-link-1').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

document.getElementById('mob-link-2').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

document.getElementById('mob-link-3').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

document.getElementById('mob-link-4').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

document.getElementById('mob-logo').addEventListener('click', () => {
  document.getElementById('toggle').checked = false;
  document.body.classList.remove('fixed-position');
});

// const btn = document.getElementById('button');

// btn.addEventListener('click', function handleClick(event) {
//   event.preventDefault();

//   const firstNameInput = document.getElementById('first_name');
//   const email = document.getElementById('email');
//   const message = document.getElementById('message');

//   firstNameInput.value = '';
//   email.value = '';
//   message.value = '';
// });

document.getElementById('toggle-label').addEventListener('click', () => {
  const checkthis = document.getElementById('toggle');

  if (checkthis.checked) {
    document.body.classList.remove('fixed-position');
  } else {
    document.body.classList.add('fixed-position');
  }
});
