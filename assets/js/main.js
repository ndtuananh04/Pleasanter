(function ($, window) {

    // function updateMarginLeft() {
    //   let marginLeft = $('.story .container').css('margin-left');
    //   console.log(marginLeft);
    //   let plusmargin = parseInt(marginLeft, 10) + 57;
    //   $('.story__list').css('margin-left', marginLeft);
    //   $('.slick-next').css('right', marginLeft);
    //   $('.slick-prev').css('right', plusmargin + 'px');
    // }

    // updateMarginLeft();

    // $(window).resize(function() {
    //   updateMarginLeft();
    // });

    $('.story__slider').slick({
    //     infinite: false,
    //     slidesToShow: 3.4 ,
    //     slidesToScroll: 1,
    //     dots: true,
    //     prevArrow: '<button type="button" class="slick-prev custom-arrow">●</button>',
    //     nextArrow: '<button type="button" class="slick-next custom-arrow">●</button>',
    //         responsive: [
    //   {
    //     breakpoint: 1024,   // At 1024px screen width
    //     settings: {
    //       slidesToShow: 2,  // Show 2 slides
    //       slidesToScroll: 1 
    //       // Scroll 1 at a time
    //     }
    //   },
    //   {
    //     breakpoint: 768,    // At 768px screen width
    //     settings: {
    //       slidesToShow: 1,  // Show 1 slide
    //       slidesToScroll: 1 // Scroll 1 at a time
    //     }
    //   }
    // ]
      infinite: false,
			slidesToShow: 3.3,
			dots: true,
      prevArrow: '<button type="button" class="slick-prev custom-arrow">●</button>',
      nextArrow: '<button type="button" class="slick-next custom-arrow">●</button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2.3,
						dots: true,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2.02,
						dots: false,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						dots: false,
					},
				},
			],
      });
    
    function getAndDisplayMargin() {
			let marginContainer = parseInt($(".story .container").css("margin-left"));
			let paddingContainer = parseInt($(".story .container").css("padding-left"));
			let widthArrow = parseInt($(".story__slider .slick-prev").css("width"));
			let marginNext = marginContainer + paddingContainer;
      let leftPrev = marginContainer + widthArrow + paddingContainer + 16; // 16 is space between the 2 buttons

			$('.story__slider').css({
				"padding-left": marginNext + "px",
			});
			$(".slick-prev").css({
				"right": leftPrev + "px",
			});
      
			$(".slick-next").css({
				"right": marginNext + "px",
			});
		}

		getAndDisplayMargin();
		// Call the function when changing the screen size
		$(window).on("resize", function () {
			getAndDisplayMargin();
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
          slidesToScroll: 1,
          dots: false,
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
