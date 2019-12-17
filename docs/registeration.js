$(document).ready(function(){
    $('.register-form').hide();
    $('a').click(function(){
        $('.register-form').show()
        $('.login-form').hide()
    });
    if($('.firstName').val() !== "" ){
        alert('not valid')
    }
})

// "123" "ebere"