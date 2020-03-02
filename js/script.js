var outtt = 0;
var rew = 1;
$(document).ready(function() {

    // var packages_count = $(".packages-count");
    // var count = Math.floor(5 + Math.random() * 25);
    // packages_count.each(function() {
    //   $(this).text(count);
    // });

    $('.scroll_btn').on('touchend, click', function(e) {
        e.preventDefault();
        var el = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(el).offset().top - 50
        }, 900);
        return false;
    });



    $('.block10 .left-block .form-block form').submit(function() {
        return false;
    });
    if ($('select').length) {} else {
        $('.c-s').css({
            'display': 'none'
        });
    }


    $('.block7 .textline a').click(function() {
        $(this).hide();
        $('.block7 .item3, .block7 .item4').slideDown();
    });

    $('.block9 .next').click(function() {
        rew = ((rew + 1) % 4);
        if (rew == 0) rew = 4;
        $('.reviews').removeClass("show");
        $('.reviews.rew' + rew).addClass("show");
    });

    $('.block9 .prev').click(function() {
        rew = ((rew - 1) % 4);
        if (rew == 0) rew = 4;
        $('.reviews').removeClass("show");
        $('.reviews.rew' + rew).addClass("show");
    });



});

// var year = 2222;
// var month = 4;
// var day = 4;
// var hour = 0;
// var min = 0;
// var sec = 0;
// var timerSec = 30 * 60;
// dateFuture = new Date(year, month - 1, day, hour, min, sec);

// function GetCount() {
//     amount = timerSec;
//     timerSec = timerSec - 1;
//     if (amount < 0) {
//         $('.hours').text('00');
//         $('.mins').text('00');
//         $('.secs').text('00');
//     } else {
//         days = 0;
//         hours = 0;
//         mins = 0;
//         secs = 0;
//         out = "";
//         days = 0;
//         hours = 0;
//         mins = Math.floor(amount / 60);
//         secs = Math.floor(amount - mins * 60);
//         if (days < 10) days = '0' + hours;
//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;
//         $('.hours').text(hours);
//         $('.mins').text(mins);
//         $('.secs').text(secs);
//         setTimeout(GetCount, 1000);
//     }
// }

$(function() {
    // countdownStart
    var storageCountdownReset = "countdownResetAirbag",
        storageCountdownTime = "countdownTimeAirbag",
        countdownResetTimeVal = 41,
        nowDateTime = new Date().getTime(),
        countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
        localStorage.setItem(storageCountdownReset, nowDateTime)
    } else {
        if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
            var countdownTime = (new Date).getTime() + 24e5;
            localStorage.setItem(storageCountdownTime, countdownTime);
            localStorage.setItem(storageCountdownReset, nowDateTime);
        }
    }

    if (localStorage.getItem(storageCountdownTime)) {
        var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
        countdownTime = (new Date).getTime() + 24e5;
    }

    $(".timer-block").countdown(countdownTime, function(s) {
        $(this).html(s.strftime('' +
            '<div class="countdown__item item hour">%H</div>' +
            '<div class="countdown__item item minute">%M</div>' +
            '<div class="countdown__item item second">%S</div>'
        ));
    }).on('update.countdown', function(e) {
        countdownTime = e.finalDate.getTime();
        localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function(e) {
        $('.timer-block').countdown('stop');
    });
    // countdownEnd
})