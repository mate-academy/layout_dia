// 'use strict';

const slider = document.getElementsByClassName('slider')[0];
const prevBtn = document.getElementsByClassName('slider__button-prev')[0];
const nextBtn = document.getElementsByClassName('slider__button-next')[0];

const backgrounds = [];

let img1 = document.createElement('img');
img1.src = new URL('/src/images/slider/slide-img-1.png', import.meta.url);
backgrounds.push(img1);

// Create the second image
let img2 = document.createElement('img');
img2.src = new URL('/src/images/slider/slide-img-2.png', import.meta.url);
backgrounds.push(img2);

// Create the third image
let img3 = document.createElement('img');
img3.src = new URL('/src/images/slider/slide-img-3.png', import.meta.url);
backgrounds.push(img3);


let currentIndex = 0;
let intervalId;

updateBackground();

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  updateBackground();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  updateBackground();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % backgrounds.length;
  updateBackground();
}, 5000);

function updateBackground() {
  console.log(backgrounds[currentIndex]);
  slider.style.backgroundImage = `url(${backgrounds[currentIndex].src})`;
  slider.style.transition = 'all 0.3s ease-in-out';
  setTimeout(() => {
  }, 50);
}
