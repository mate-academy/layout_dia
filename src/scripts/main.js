let offset = 0;
const sliderList = document.querySelector('.slider__list');

document.querySelector('.slider__button-right')
  .addEventListener('click', function() {
    offset = offset + 33.33;

    if (offset > 66.66) {
      offset = 0;
    }
    sliderList.style.transform = 'translateX(-' + offset + '%)';
  });

document.querySelector('.slider__button-left')
  .addEventListener('click', function() {
    offset = offset - 33.33;

    if (offset < 0) {
      offset = 66.66;
    }
    sliderList.style.transform = 'translateX(-' + offset + '%)';
  });

const form = document.getElementById('myForm');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});
