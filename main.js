let answer;
$(function(){
   

   $("div").hide();
   $(".start").show()
    $(".start-btn").click(function(){
        $(".start").hide();
        $(".levels").show();

    })
    $(".return").click(function(){
        $("div").hide();
        $(".levels").show();
    })
    $(".home").click(function(){
      $(".start").show();
   $(".levels").hide()
    })
    //=====level one======
  $(".btn1").click(function(){
      $(".levels").hide();
      $(".level-1").show();
      $('.next1').hide();
  })
  $('.check1').click(function(){
    let answer =$(".answer1").val();
    if(answer ==="dig"){
      swal("Good job!", "YOU ROCKED THIS LEVEL", "success");

    $(".next1").show()

    }else{
      swal("BOOOOO", "YOU FAILED", "error");


        
    }
})
$(".next1").click(function(){
  $(".level-1").hide();
  $('.next2').hide();
  $(".level-2").show();
})
 
//===== level two=====

  $(".btn2").click(function(){
    $(".levels").hide();
    $(".level-2").show();
   
})  

$('.check2').click(function(){
  let answer =$(".answer2").val();
  if(answer =="shells"){
    swal("Good job!", "YOU ROCKED THIS LEVEL", "success");
    $('.next2').show();
  }else{
    swal("BOOOOO", "YOU FAILED", "error");   
  }

})
$(".next2").click(function(){
  $(".level-2").hide();
  $('.next3').hide();
  $(".level-3").show();
})
// ====level three====
$(".btn3").click(function(){
    $(".levels").hide();
    $(".level-3").show();
   
})  
$('.check3').click(function(){
  let answer =$(".answer3").val();
  if(answer =="champion"){
    swal("Good job!", "YOU ROCKED THIS LEVEL", "success");
    $('.next3').show();
  }else{
    swal("BOOOOO", "YOU FAILED", "error");
  }

})
$(".next3").click(function(){
  $(".level-3").hide();
  $(".next4").hide();
  $(".level-4").show();
})
// ==== level four ====
$(".btn4").click(function(){
    $(".levels").hide();
    $(".level-4").show();
   

})  
$('.check4').click(function(){
  let answer =$(".answer4").val();
  if(answer =="sunburn"){
    swal("Good job!", "YOU ROCKED THIS LEVEL", "success");
    $(".next4").show();
  }else{
    swal("BOOOOO", "YOU FAILED", "error");   
  }

})
$(".next4").click(function(){
  $(".level-4").hide();
  $(".level-5").show();
  $(".next5").hide();
})
// ==== level five ====
$(".btn5").click(function(){
    $(".levels").hide();
    $(".level-5").show();
   

})  
$('.check5').click(function(){
  let answer =$(".answer5").val();
  if(answer =="archery"){
    swal("Good job!", "YOU ROCKED THIS LEVEL", "success");
    $(".next5").show();
  }else{
    swal("BOOOOO", "YOU FAILED", "error");    
  }

})
$(".next5").click(function(){
  $(".level-5").hide();
  $(".level-6").show();
  $('.next6').hide();
})
// ==== level six ====
$(".btn6").click(function(){
    $(".levels").hide();
    $(".level-6").show();
   
}) 
$('.check6').click(function(){
  let answer =$(".answer6").val();
  if(answer =="bubblegum"){
    swal("Good job!", "YOU ROCKED THIS LEVEL", "success");
    $('.next6').show();
  }else{
    swal("BOOOOO", "YOU FAILED", "error");
  
  }
})
$(".next6").click(function(){
  $(".level-6").hide();
  $(".level-7").show();
  $('.next7').hide()
})
// ==== level seven ====
$(".btn7").click(function(){
    $(".levels").hide();
    $(".level-7").show();
    
})  
$('.check7').click(function(){
  let answer =$(".answer7").val();
  if(answer =="buttercup"){
    swal("Good job!", "YOU ROCKED THIS LEVEL", "success");
    $('.next7').show();
  }else{
    swal("BOOOOO", "YOU FAILED", "error");
    
  }

})
$(".next7").click(function(){
  $(".level-7").hide();
  $(".level-8").show();
  $(".next8").hide()
})
// ====level eight ====
$(".btn8").click(function(){
    $(".levels").hide();
    $(".level-8").show();
 
})  
$('.check8').click(function(){
  let answer =$(".answer8").val();
  if(answer =="symbol"){
    swal("Good job!", "YOU ROCKED THIS LEVEL", "success");
    $(".next8").show();
  }else{
    swal("BOOOOO", "YOU FAILED", "error");
  }

})
$(".next8").click(function(){
  $(".level-8").hide();
  $(".level-9").show();
})
// ==== level nine ====
  $(".btn9").click(function(){
    $(".levels").hide();
    $(".level-9").show();
    $(".home").hide();

}) 
$('.check9').click(function(){
  let answer =$(".answer9").val();
  if(answer =="dangerous"){
    swal("Good job!", "YOU ROCKED THIS LEVEL", "success");
    $(".home").show();
  }else{
    swal("BOOOOO", "YOU FAILED", "error");
      
  }

}) 
$(".home").click(function(){
  $(".start").show();
  $(".level-9").hide()
})
})

