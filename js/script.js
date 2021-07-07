document.addEventListener('scroll', function () {
    var sticky = document.querySelector('.sticky');
    window.scrollY >= 20 ? sticky.classList.add('stickyAdd') : sticky.classList.remove('stickyAdd');
});

new Swiper('.heroSlider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 1000,
    effect: '',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: false,
    allowSlideNext: true,
    allowSlidePrev: true,
    autoHeight: false,
    notificationClass: null,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});