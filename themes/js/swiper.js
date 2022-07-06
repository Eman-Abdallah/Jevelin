var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
$('.swiper-pagination-bullet').hover(function() {
    $(this).trigger("slide");
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper3", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        540: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});
var swiper = new Swiper(".mySwiper6", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});