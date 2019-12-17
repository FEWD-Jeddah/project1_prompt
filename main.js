$(function() {
    let date = new Date();
    $(".date").html(date.getFullYear());
});

function bat() {
    window.location.assign("http://127.0.0.1:5500/comicspage/comicspage.html")
}