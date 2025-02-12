document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.slider__switch--prev');
  const nextButton = document.querySelector('.slider__switch--next');
  const photos = document.querySelectorAll('.slider__photo');

  let currentIndex = 0;

  function updateSlider() {
    photos.forEach(function(photo, index) {
      if(index===currentIndex) {
        photo.style.display = 'block';
      } else {
        photo.style.display = 'none';
      }
    });
  }

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex = currentIndex - 1;
    } else {
      currentIndex = photos.length - 1;
    }
    updateSlider();
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < photos.length - 1) {
      currentIndex = currentIndex + 1;
      } else {
        currentIndex = 0;
      }
      updateSlider();
  });

  updateSlider();
});
