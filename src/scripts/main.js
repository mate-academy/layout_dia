'use strict';

(function() {
  var container = $('div.slider')
    .css('overflow', 'hidden')
    .children('ul');

  var slider = new Slider(container, $('#slider-nav'));

  slider.nav.find('button').on('click', function() {
    slider.setCurrent($(this).data('dir'));
    slider.transition();
  });
})();

function Slider(container, nav) {
  this.container = container;
  this.nav = nav.show();
  this.imgs = this.container.find('img');
  this.imgWidth = this.imgs[0].getBoundingClientRect().width;
  this.imgsLen = this.imgs.length;
  this.current = 0;
}

Slider.prototype.transition = function() {
  this.container.animate({
    'margin-left': -(this.current * this.imgWidth)
  });
};

Slider.prototype.setCurrent = function(dir) {
  if (dir === 'next') {
    this.current++;
  } else {
    this.current--;
  }

  if (this.current < 0) {
    this.current = this.imgsLen - 1;
  }

  if (this.current >= this.imgsLen) {
    this.current = 0;
  }
};
