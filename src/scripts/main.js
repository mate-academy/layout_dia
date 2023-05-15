'use strict';

// window.addEventListener('hashchange', () => {
//   if (window.location.hash === '#menu') {
//     document.body.classList.add('page__body--with-menu');
//   } else {
//     document.body.classList.remove('page__body--with-menu');
//   }
// });

window.addEventListener('submit', (event) => {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  event.preventDefault();
});

// function toArrayOfDigits(n) {
//   // write code here
//   return String(n).split('').reverse().map(el => Number(el));
// }

// function countOccurrences(phrase, part) {
//   // write code here
//   return phrase.split(part).length - 1;
// }

// function isArrayPretty(numbers) {
//   // write code here
//   if (numbers.length === 0) {
//     return false;
//   }

//   for (const number of numbers) {
//     const res1 = numbers.includes(number + 1);
//     const res2 = numbers.includes(number - 1);

//     if (res1 === false && res2 === false) {
//       return false;
//     }
//   }

//   return true;
// }

// function makeStorage() {
//   // write code here
//   const obj = {};
//   const storage = () => {
//     return obj;
//   };

//   storage.setValue = (key, value) => {
//     obj[key] = value;
//   };

//   storage.getValue = (key) => {
//     return obj[key];
//   };

//   return storage;
// };
