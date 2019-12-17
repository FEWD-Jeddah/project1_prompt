$(".type").change(
    function () {
        var type = $('.type option:selected').val();
        console.log(type);
        switch (type) {
            case "1": $(".from , .to").html('<option value="cm">centimeter</option>,<option value="m">meter</option>,<option value=km>kilometre</option>');
                break;
            case "2": $(".from , .to").html('<option value=g>gram</option>,<option value=kg>kilogram</option>,<option value=oz>ounce</option>');
                break;
            case "3": $(".from , .to").html('<option value=c>celsius</option>,<option value=f>fahrenheit</option>');
                break;
        }
    })
$(".convert").click(function () {
    if ($('.from option:selected').val() == $('.to option:selected').val()) {
        swal("Error!", "You can not convert from the same type!", "error");
    }
    var type = $('.type option:selected').val();
    switch (type) {
        case "1":
            if ($('.from option:selected').val() == "cm" && $('.to option:selected').val() == "m") {
                $(".outbut").html("Result: " + $('.value').val() * 0.01 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "cm" && $('.to option:selected').val() == "km") {
                $(".outbut").html("Result:: " + $('.value').val() * 0.00001 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "m" && $('.to option:selected').val() == "cm") {
                $(".outbut").html("Result: " + $('.value').val() * 100 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "m" && $('.to option:selected').val() == "km") {
                $(".outbut").html("Result: " + $('.value').val() * 0.0001 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "km" && $('.to option:selected').val() == "m") {
                $(".outbut").html("Result: " + $('.value').val() * 1000 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "km" && $('.to option:selected').val() == "cm") {
                $(".outbut").html("Result: " + $('.value').val() * 100000 + " " + $('.to option:selected').val());
            }
            break;
        case "2":
            if ($('.from option:selected').val() == "g" && $('.to option:selected').val() == "kg") {
                $(".outbut").html("Result: " + $('.value').val() * 0.001 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "g" && $('.to option:selected').val() == "oz") {
                $(".outbut").html("Result: " + $('.value').val() * 0.035274 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "kg" && $('.to option:selected').val() == "g") {
                $(".outbut").html("Result: " + $('.value').val() * 1000 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "kg" && $('.to option:selected').val() == "oz") {
                $(".outbut").html("Result: " + $('.value').val() * 35.274 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "oz" && $('.to option:selected').val() == "g") {
                $(".outbut").html("Result: " + $('.value').val() * 28.3495 + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "oz" && $('.to option:selected').val() == "kg") {
                $(".outbut").html("Result: " + $('.value').val() * 0.0283495 + " " + $('.to option:selected').val());
            }
            break;
        case "3":
            if ($('.from option:selected').val() == "c" && $('.to option:selected').val() == "f") {
                var value = $('.value').val();
                value = parseFloat(value);
                value = value * 1.8 + 32;
                value = parseFloat(value).toFixed(2);
                $(".outbut").html("Result: " + value + " " + $('.to option:selected').val());
            } else if ($('.from option:selected').val() == "f" && $('.to option:selected').val() == "c") {
                var value = $('.value').val();
                value = parseFloat(value);
                value =(value-32)*0.56;
                value = parseFloat(value).toFixed(2);
                $(".outbut").html("Result: " + value+ " " + $('.to option:selected').val());
            }
            break;
    }

});

$("#send").click(function(){
    swal("hello");
    swal("SEND", "Your Massage has been send , Thank You", "success");
});