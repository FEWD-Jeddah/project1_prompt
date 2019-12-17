$(function(){

    $(".hamburger").click(function(){
        $(".mobile__menu").show();
    });
    //Footer current date fucntion
    let date = new Date();
    $(".date").html(date.getFullYear());

    //Banner Images Slider
    $(".mid_content").slick({
        autoplay: true,
        dots: true,
        infinite: false,
        speed: 2000,
        autoplaySpeed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //Top nav hover function
    $(".top_menu a").hover(function () {
            $(this).css("color","grey");
            
        }, function () {
            $(this).css("color","white");
            }
    );
    //Logo hover function
    $(".top_menu img").hover(function () {
        $(this).css("border-color"," grey");
        
    }, function () {
        $(this).css("border-color","purple")
        }
    );

    //footer hover function
    $(".footer_guide a").hover(function () {
        $(this).css("color","blue");
        
    }, function () {
        $(this).css("color","purple");
        }
    );

    //products hover function
    $(".card").hover(function () {
        $(this).css("border-color","blue");
        $(this).css("background-color","grey");
        $(this).css("border-width","1px");
        
    }, function () {
        $(this).css("border-color","purple");
        $(this).css("background-color","white");
        $(this).css("border-width","0px");
        }
    );

    //Abouy Page JS
    //...................................................................................//
    // $("#store_location").hover(function () {
    //     // $(this).attr('src','..//Assets/CSS/images/store/store_directions.JPG');
    //     $("#store_location").attr("src","..//Assets/CSS/images/store/store_directions.JPG")
    // },function () {
    //     $("#store_location").attr("src","..//Assets/CSS/images/store_location.JPG")
    // }
    // );

    //Contact Us Page JS
    //...................................................................................//
    $("#facebook").on("click",function(){
        window.open("https://www.facebook.com/Choco.KSA/")
    });

    $("#instagram").on("click",function(){
        window.location.href = 'https://www.instagram.com/choc_ksa/?hl=en'
    });

    $("#twitter").on("click",function(){
        Swal.fire("Comming Soon ^_^'");
    });

    $("#whatsapp").on("click",function(){
        $(".whatsapp_num").css("color","black");
    });

    //Choose Your Chocolate JS//
    //........................//

    $("#choco_quiz").on("click",function(){
        Swal.fire({
            title:'Leaving so Soon -_-',
            text:'You are about to leave this webpage, do you want to continue?',
            icon:'question',
            showCancelButton: true
        }).then((result)=>{
            if(result.value){
                window.location.href = "https://www.buzzfeed.com/florapaul/what-type-of-chocolate-are-you";
            }
        })
    });

    $("#btn").click(function(){
        let input = $('#email').val();
        console.log(input);
        let validation = "@gmail.com";
        console.log(validation);
        if(input=="" || input==null || input==" "){
            // alert("Please enter an Email address first");
            Swal.fire({icon:"warning",title:"",text:"Please enter an Email address first"});
            console.log(input);
        }
        else{
            if(input == "example@gmail.com"){

                // Swal.fire({
                //     icon:   'success',
                //     title:  'Done',
                //     text:   'Thank You.'}
                //    )
                swal.fire({
                    title: "What type of event do you have in mind?",
                    input: "textarea"
                }).then(function(result) {
                        if (result.value) {
                          swal.fire({icon:"success",title:"Done",text:"Thank You"})
                        }
                      }
                )
            }
            else{
            Swal.fire({
                icon:   "error",
                title:  "error",
                text:   "Kindly Provide Valid Email Address."}
               )}
        }
    });
})