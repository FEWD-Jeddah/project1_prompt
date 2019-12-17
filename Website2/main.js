
$(function(){
    $('.hamburger').click(function(){
        $('mobile_menu').show();
    });

    let date = new Date()
    $('.date').html(date.getFullYear());
    $('.review__content').slick({
        autoplay: true
    })
    $('.gallery__content').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    })
    $('.partner__items').slick({
        autoplay: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
})