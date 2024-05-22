let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loopedSlides: 8,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
  })
