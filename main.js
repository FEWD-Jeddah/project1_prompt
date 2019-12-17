$(document).ready(function () {
  let date =new Date()
  $(".date").html(date.getFullYear())
  $(".Contact_popup").hide();

  $(".contact").click(function(e) {
      $(".Contact_popup").toggle();
      e.preventDefault();
  
});



const slidejs = document.querySelector('.slide');
const Images = document.querySelectorAll('.slide img');
const prevBtn = document.querySelector('#preBtn');
const nextBtn = document.querySelector('#nextBtn');
let counter = 1;
const size = Images[0].clientWidth;

slidejs.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', function () {
    if (counter >= Images.length - 1) return;
    if (Images[counter].id === "lastclone") {
        slidejs.style.transition = "none";
        counter = Images.length - 2;
        slidejs.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    slidejs.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slidejs.style.transform = 'translateX(' + (-size * counter) + 'px)';

});


prevBtn.addEventListener('click', function () {
    if (counter <= 0) return;
    slidejs.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slidejs.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(Images[counter].id + "prev")
});

slidejs.addEventListener('transitionend', function () {
    if (Images[counter].id === "lastclone") {
        slidejs.style.transition = "none";
        counter = Images.length - 2;
        slidejs.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if (Images[counter].id === "firstclone") {
        slidejs.style.transition = "none";
        counter = Images.length - counter;
        slidejs.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});



});