$('document').ready(function(){
    $('.slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        draggable: false,
        centerMode: true,
        centerPadding: '5px',
        responsive: [
        {
        breakpoint: 1296,
        settings: {
            slidesToShow: 3,

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,

      }
    }
]

    });
});
