(function ($) {
  'use strict'

//--------------------------------Header Slide Menu--------------------------------
$('.info-bar').on('click',function() {
  $('.header-slide-menu').addClass('menu-expand');
})

$('.close-btn').on('click',function() {
  $('.header-slide-menu').removeClass('menu-expand');
})

//--------------------------------Mobile Menu--------------------------------
$('#mobile-menu').meanmenu({
  meanMenuContainer: '.mobile-menu',
  meanScreenWidth: '991',
  meanDisplay: 'block',
});

//--------------------------------Portfolio--------------------------------
$('.portfolio-menu').on('click','li',function(){
  $(this).addClass('active').siblings().removeClass('active');
});

$('.portfolio-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  portfolio.isotope({ filter: filterValue });
});

var portfolio = $('.masonry').isotope({
  itemSelector: '.masonry-item',
  percentPosition: true,
})

$('.portfolio-img-popup').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  },
});

//--------------------------------Counter--------------------------------
$(document).ready(function($) {
  $('.counter-number').counterUp({
      delay: 10,
      time: 1000
  });
});

//--------------------------------Blog Slider--------------------------------

$('.blog-slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.blog-slider-v2').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//--------------------------------Testimonial Slider--------------------------------
$('.testimonial-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonial-slider-img'
});
$('.testimonial-slider-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-slider',
  dots: false,
  centerMode: true,
  centerPadding:0,
  focusOnSelect: true
});

$('.testimonial-slider-v3').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
});

//--------------------------------Nice Select--------------------------------
$('select').niceSelect();

//-----------------------------------------
}) (jQuery);

//--------------------------------Get to top the button--------------------------------
let mybutton = document.getElementById("back-to-top");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}