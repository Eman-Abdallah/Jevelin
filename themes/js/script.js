// perloader
let loader = document.getElementById("preloader")
let nav = document.querySelector('.navbar-default')
window.addEventListener("load", function() {
    loader.style.display = "none"
    nav.classList.add("fixed-top");

});
let btn = document.getElementById("navBtn")

function clicked() {
    nav.classList.add("scrolled");
}
// change navbar on scroll
$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-default");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});



// button scroll up
let button = document.getElementById("myBtn ");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}


// counter
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(window).on("load scroll", function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 4);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});
// tabpanal testmonials
$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

// progressbar
$(document).ready(function() {
    $(window).scroll(function() {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            scrollPercent = (s / d);
        var position = (scrollPercent);
        $("#progressbar").progressbar('value', position);
    });
});