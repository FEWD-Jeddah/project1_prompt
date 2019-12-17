$(function () {


    $(".hamburger").click(function(){
    $(".mobile__menu").show();
    });

    // $(".custom__img").onload(function(){
    // this.css("visibility", "visible");
    // });
    

//==================================== Animation ================================================================
    $(".logo").click(function(){
        $(".logo").addClass("animated rubberBand").one("animationend",function(){

            $(this).removeClass("animated rubberBand");
            // console.log(location.href);
           
            if(location.href == "http://127.0.0.1:5500/index.html"){
                // location.href ="index.html";
                //console.log(location.href);
            }else{
                location.href ="index.html";
            }
            
        });
    });


    $(".cont__logo").mouseover(function(){
        $(".cont__logo").addClass("animated heartBeat").one("animationend",function(){

            $(this).removeClass("animated heartBeat");
            
        });
    });

    $(".logo").mouseover(function(){
        $(".logo").addClass("animated swing").one("animationend",function(){

            $(this).removeClass("animated swing");
            
        });
    });
    


    //================ social media animation ================
    $(".fa-twitter").mouseover(function(){
        $(".fa-twitter").addClass("animated rubberBand").one("animationend",function(){

            $(this).removeClass("animated rubberBand");
            
        });
    });
    $(".fa-instagram").mouseover(function(){
        $(".fa-instagram").addClass("animated rubberBand").one("animationend",function(){

            $(this).removeClass("animated rubberBand");
            
        });
    });
    $(".fa-google").mouseover(function(){
        $(".fa-google").addClass("animated rubberBand").one("animationend",function(){

            $(this).removeClass("animated rubberBand");
            
        });
    });
//=========================================================

//============================== Menu button Animation ========================


// $(".home__btn").mouseover(function(){
//     $(".home__btn").addClass("animated heartBeat").one("animationend",function(){

//         $(this).removeClass("animated heartBeat");
        
//     });
// });


//=============================================================================

//===============================================================================================================
$(".submit__btn").click(function(){

   Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your order has been submited',
        showConfirmButton: false,
        timer: 3000,

      })
      $('#blah').attr('src', " ");
      $(".custom__img").css("visibility", "hidden");
});

//================================== Upload Preview ======================================================

function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#blah').attr('src', e.target.result);
        $(".custom__img").css("visibility", "visible");
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imgInp").change(function() {
    readURL(this);
  });
//===================================================
//============ the styled upload btn ================ 
$(".upoadbtn").click(function(){
$("#imgInp").click();
});

//==================================================================

//===============================================================================================================

        let date = new Date();
        $(".date").html(date.getUTCFullYear());
    
        $(".review__content").slick({
            autoplay: true,
        });
    
    
        $('.partner__items').slick({
            autoplay: true,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToScroll: 4,
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
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        $('.store__items').slick({


            autoplay: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 2000,
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
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
            
        });

    
    })