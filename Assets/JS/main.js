$(".dropDown").click(function(){
    $(".dropContent").toggle();
});

$(".option1").click(function(){
    $(".mainPage").show();
    $(".memePage").hide();
    $(".aboutPage").hide();
    $(".contactPage").hide();
});

$(".option2").click(function(){
    $(".mainPage").hide();
    $(".memePage").show();
    $(".aboutPage").hide();
    $(".contactPage").hide();
});

$(".option3").click(function(){
    $(".mainPage").hide();
    $(".memePage").hide();
    $(".aboutPage").show();
    $(".contactPage").hide();
});

$(".option4").click(function(){
    $(".mainPage").hide();
    $(".memePage").hide();
    $(".aboutPage").hide();
    $(".contactPage").show();
});

$(".check").click(function(){
    $(this).css("color", "orange");
});