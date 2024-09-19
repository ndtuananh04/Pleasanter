(function ($, window) {
    $('.story__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev custom-arrow">●</button>',
        nextArrow: '<button type="button" class="slick-next custom-arrow">●</button>'
      });
})(jQuery, window);
