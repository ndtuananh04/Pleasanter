(function ($, window) {

    function updateMarginLeft() {
      let marginLeft = $('.story .container').css('margin-left');
      console.log(marginLeft);
      let plusmargin = parseInt(marginLeft, 10) + 57;
      $('.story__list').css('margin-left', marginLeft);
      $('.slick-next').css('right', marginLeft);
      $('.slick-prev').css('right', plusmargin + 'px');
    }

    updateMarginLeft();

    $(window).resize(function() {
      updateMarginLeft();
    });

    $('.story__slider').slick({
        infinite: true,
        slidesToShow: 3.12 ,
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
        breakpoint: 528,    // At 768px screen width
        settings: {
          slidesToShow: 1,  // Show 1 slide
          slidesToScroll: 1 // Scroll 1 at a time
        }
      }
    ]
      });

    $('.feedback__slide').slick({
        infinite: true,
        slidesToShow: 2 ,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev custom-arrow">●</button>',
        nextArrow: '<button type="button" class="slick-next custom-arrow">●</button>',
            responsive: [
      {
        breakpoint: 960,   
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1 
        }
      }
    ]
      });
    
    
    $('.header__icon').click(function(){
        console.log('click');
        if ($("header").hasClass('open')) { // close menu
          $("body").removeClass('noscroll');
          $("header").removeClass('open');
          $("nav").removeClass('bg-gray');
          $(".hasfade").removeClass('fade-in').addClass('fade-out');
          $(".fa-x").addClass('d-none');
          $(".fa-bars").removeClass('d-none');
        } else { // open menu
          $("body").addClass('noscroll');
          $("header").addClass('open');
          $("nav").addClass('bg-gray');
          $(".hasfade").removeClass('fade-out').addClass('fade-in');
          $(".fa-x").removeClass('d-none');
          $(".fa-bars").addClass('d-none');
        }

    });
})(jQuery, window);
