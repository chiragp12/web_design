jQuery(document).ready(function($) {
    $('.testimonial-slider .slider-container').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
      nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
      ]
    });
  });

  AOS.init();