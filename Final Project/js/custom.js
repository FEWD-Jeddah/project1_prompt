$(function () {

    'use strict';

    // Change Header Height

    $('.header').height($(window).height());


    $('.hire').click(function () {

        $('html, body').animate({

            scrollTop: $('.our-team').offset().top

        }, 1000);

    });


    // Check Testimonials

    var leftArrow = $('.testim .fa-chevron-left'),

        rightArrow = $('.testim .fa-chevron-right');

    function checkClients() {

        if ($('.client:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();
        }

        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut();

        } else {

            rightArrow.fadeIn();
        }

    }

    checkClients();

    $('.testim i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {

            $('.testim .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();

            });

        } else {

            $('.testim .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();

            });

        }

    });

    let date = new Date();
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    $(".date").html(
        `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
    );

});