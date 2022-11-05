AOS.init();
$(document).ready(function(){
    $("first_section .navbar .navbar-nav .dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});
//  Swiper Effect --------------------------------------
var swiper1 = new Swiper('.swiper-container', {
    effect: 'coverflow',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true 
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
    spaceBetween: 30,
    loopedSlides: 4,
    // pagination: {
    //     el: ".sale .swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 3000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
        el: '.sale .pagination-container',
        clickable: true,
  },
  breakpoints: {
    300: {
        mousewheel: true,
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 24,
        allowSlidePrev: true,
        allowSlideNext: true,
        loopedSlides: 1,
    },
    400: {
        slidesPerView: 2,
        spaceBetween: 24,
        allowSlidePrev: true,
        allowSlideNext: true,
        loopedSlides: 1,
    },
    640: {
        slidesPerView: 2,
        spaceBetween: 30,
        loopedSlides: 1,
        allowSlidePrev: true,
        allowSlideNext: true
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        loopedSlides: 4,
    }
},
});