(function ($, window) {

    $('.story__slider').slick({
      infinite: false,
			slidesToShow: 3.3,
			dots: true,
      prevArrow: $('.story__buttons .slick__prevBtn'),
      nextArrow: $('.story__buttons .slick__nextBtn'),
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
			let marginNext = marginContainer + paddingContainer;
			$('.story__slider').css({
				"padding-left": marginNext + "px",
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
        prevArrow: $('.feedback__buttons .slick__prevBtn'),
        nextArrow: $('.feedback__buttons .slick__nextBtn'),
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
