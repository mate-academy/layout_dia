'use strict';

const $ = window.$;

$(document).ready(function() {
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const container = $('.slider__wrapper');
  const track = $('.slider__line');
  const item = $('.slider__slide');
  const itemCount = item.length;
  const btnPrev = $('.slider__prev');
  const btnNext = $('.slider__next');
  const itemWidth = container.width();
  const movePosition = itemWidth * slidesToScroll;

  item.each(function(index, char) {
    $(item).css({
      minWidth: itemWidth,
    });
  });

  btnPrev.click(function() {
    position += movePosition;

    setPosition();
  });

  btnNext.click(function() {
    position -= movePosition;

    setPosition();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`,
    });
    checkBtns();
  };

  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);

    btnNext.prop(
      'disabled',
      position <= -(itemCount - slidesToShow) * itemWidth
    );
  };

  checkBtns();
});
