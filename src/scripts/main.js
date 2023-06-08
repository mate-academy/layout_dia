'use strict';

const page = document.querySelector('.page');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    page.style.overflowY = 'hidden';
  } else {
    page.style.overflowY = 'scroll';
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

const textarea = document.querySelector('textarea');
const limitCols = 35;
const limitRows = 3;

textarea.addEventListener('keyup', (e) => {
  const lines = e.target.value.split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length < limitCols) {
      continue;
    }

    lines[i] = lines[i].substring(0, limitCols);
    lines[i + 1] = `${lines[i].substring(limitCols + 1)}${lines[i + 1] || ''}`;
  }

  textarea.value = lines.slice(0, limitRows).join('\n');
});
