$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main_visual_slide .swiper-pagination",
            clickable: true
        },

    })
})