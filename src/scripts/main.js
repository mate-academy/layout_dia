'use strict';
/*eslint-disable */
const content = document.getElementById("content");
let curSlide = 1;

function leftScroll() {
  const width = document.getElementsByClassName("carousel__slide")[0].width;
  if(curSlide > 1) {
    curSlide--;
    content.style.transform = `translateX(${-width * (curSlide - 1)}px)`;
  }
}

function rightScroll() {
  const width = document.getElementsByClassName("carousel__slide")[0].width;
  if(curSlide < document.getElementsByClassName("carousel__slide").length) {
    content.style.transform = `translateX(${-width * (curSlide)}px)`;
    curSlide++;
  }
}

function burger() {
  const elem = document.getElementById('home');

  elem.classList.toggle('header--active');
}

function onSubmit() {
  event.preventDefault();
  document.querySelector('input[name=email]').value = '';
  document.querySelector('input[name=name]').value = '';
  document.querySelector('input[name=message]').value = '';
}
