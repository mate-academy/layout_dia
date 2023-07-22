'use strict';

const processBoxes = document.querySelectorAll('.process-list__box');

// Знаходимо максимальну висоту серед усіх елементів
let maxHeight = 0;

processBoxes.forEach(processBox => {
  const processBoxHeight = processBox.offsetHeight;

  if (processBoxHeight > maxHeight) {
    maxHeight = processBoxHeight;
  }
});

// Встановлюємо максимальну висоту для всіх елементів
processBoxes.forEach(processBox => {
  processBox.style.height = `${maxHeight}px`;
});
