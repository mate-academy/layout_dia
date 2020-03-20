'use strict';
let $window = $(window),
$body = $('body');
let parent, child, scrollWidth, bodyWidth;

if (scrollWidth === undefined) {
  parent = jQuery('<div style="width: 50px; height: 50px; overflow: auto"><div/></div>').appendTo('body');
  child = parent.children();
  scrollWidth = child.innerWidth() - child.height(99).innerWidth();
  parent.remove();
}

imgtosvg();
carouselTestimonials();
carouselHome();

if (($('body').width() + scrollWidth) > 992) {
} else {
  menuBtnClick();
}

function imgtosvg() {
  $('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      $img.replaceWith($svg);

    }, 'xml');
  });
}

function carouselTestimonials(){
  $('.testimonials__block').addClass('owl-carousel').owlCarousel({
    dots : true,
    margin: 30,
    loop: true,
    addClassActive : true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      }
    },
  });
}

function carouselHome(){
  $('.home__carousel').addClass('owl-carousel').owlCarousel({
    dots : false,
    items: 1,
    nav: true
  });
}

$('a.nav__link').on('click', function (e) {
  var anchor = $(this);
  var ancAtt = $(anchor.attr('href'));
  $('a.nav__link').removeClass('active');
  anchor.addClass('active');
  $('html, body').stop().animate({
      scrollTop: ancAtt.offset().top
  }, 1000);
  e.preventDefault();
});

function menuBtnClick() {
  $('.menu-btn').click(function(){
    if($('.header').hasClass('menu-open')) {
      $('.header').removeClass('menu-open');
    } else {
      $('.header').addClass('menu-open');
    }
  })
}




