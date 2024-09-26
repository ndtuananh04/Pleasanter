(function ($, window) {
    $('.story__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev custom-arrow">●</button>',
        nextArrow: '<button type="button" class="slick-next custom-arrow">●</button>',
            responsive: [
      {
        breakpoint: 1024,   // At 1024px screen width
        settings: {
          slidesToShow: 2,  // Show 2 slides
          slidesToScroll: 1 // Scroll 1 at a time
        }
      },
      {
        breakpoint: 768,    // At 768px screen width
        settings: {
          slidesToShow: 1,  // Show 1 slide
          slidesToScroll: 1 // Scroll 1 at a time
        }
      }
    ]
      });
    
    $('header__icon').click(function(){
        
    });
})(jQuery, window);
