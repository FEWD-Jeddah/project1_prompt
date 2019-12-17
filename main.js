$(document).ready(function(){
$("#email").hide();
$("#password").hide();
$("#sign-up").hide();
});

$("#sign").click(function(){
$("#email").show();
$("#password").show();
$("#sign-up").show();
$("#sign").hide();
});

$('.books').slick({
    autoplay:true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
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

$('.music').slick({
    autoplay:true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
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


//   (".item2").hide();
//   (".item3").hide();
//   (".item4").hide();
//   (".item5").hide();
//   (".item6").hide();
//   (".item7").hide();
//   (".item8").hide();
// $("#click1").click(function(){
//     ("#book1").show();
// });

$(".btn-back").click(function(){
  window.history.back();
});

$("#submit").click(function(){
    swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'We have reseved your message,thnx!',
        showConfirmButton: false,
        timer: 1500
      })
});

$(function(){

  let date = new Date()
$(".date").html(date.getFullYear());

$(".hamburger").click(function(){
  $(".mobile__menu").show();
});

});



