document.addEventListener('scroll', function () {
    var sticky = document.querySelector('.sticky');
    window.scrollY >= 20 ? sticky.classList.add('stickyAdd') : sticky.classList.remove('stickyAdd');
});

// Hero Slider
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
        el: '.heroSlider .swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.heroSlider .swiper-button-next',
        prevEl: '.heroSlider .swiper-button-prev',
    }
});

// Inspections Slider
new Swiper('.inspirationSlider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 24,
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
        el: '.inspirationSlider .swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.inspirationSlider .swiper-button-next',
    }
});