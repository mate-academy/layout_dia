'use strict';

// Slider
let sliderImgNum = 0;

const btnBack = document.querySelector('.slider__button--back');
const btnForward = document.querySelector('.slider__button--forward');
const sliderList = document.querySelector('.slider__list');
const countSliderImg = sliderList.children.length - 1;



btnBack.addEventListener('click', ()=>{
  if(sliderImgNum <= 0){
    sliderImgNum = countSliderImg;
    sliderList.children[0].classList.remove('slider__photo--active');
  }else{
    sliderList.children[sliderImgNum].classList.remove('slider__photo--active');
    sliderImgNum--;
  }

  sliderList.children[sliderImgNum].classList.add('slider__photo--active');
})

btnForward.addEventListener('click', ()=>{
  if(sliderImgNum >= countSliderImg){
    sliderImgNum = 0;
    sliderList.children[countSliderImg].classList.remove('slider__photo--active');
  }
  else{
    sliderList.children[sliderImgNum].classList.remove('slider__photo--active');
    sliderImgNum++;
  }

  sliderList.children[sliderImgNum].classList.add('slider__photo--active');
})

// Form

const formMessage = document.getElementById('form-message');

formMessage.addEventListener('submit', (event)=>{
  event.preventDefault();
  event.target.reset();
})
