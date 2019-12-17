
function shadow(img) {
    $(img).each(function () {
        $('<img>')[0].src = this;
    });
}
shadow([
    './img/map-yellow.png',
    './img/map-red.png',
    './img/map-pink.png',
    './img/map-green.png',
    './img/map-blue.png'
]);

$(function () {
    let date = new Date();
    $(".date").html(date.getFullYear());
});


    jQuery(document).ready(function () {
        $('.title-blue').mouseout(function () {
            $("#map").attr('src', './img/map-original.png');
        }),
            $('.title-blue').mouseover(function () {
                $("#map").attr('src', './img/map-blue.png');
            });
        $('.title-red').mouseout(function () {
            $("#map").attr('src', './img/map-original.png');
        }),
            $('.title-red').mouseover(function () {
                $("#map").attr('src', './img/map-red.png');
            });
        $('.title-green').mouseout(function () {
            $("#map").attr('src', './img/map-original.png');
        }),
            $('.title-green').mouseover(function () {
                $("#map").attr('src', './img/map-green.png');
            });
        $('.title-yellow').mouseout(function () {
            $("#map").attr('src', './img/map-original.png');
        }),
            $('.title-yellow').mouseover(function () {
                $("#map").attr('src', './img/map-yellow.png');
            });
        $('.title-pink').mouseout(function () {
            $("#map").attr('src', './img/map-original.png');
        }),
            $('.title-pink').mouseover(function () {
                $("#map").attr('src', './img/map-pink.png');
            });
    });
    
    function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    
    showTime();