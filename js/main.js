$(document).ready(function () {
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }
  /************************************ navbar ************************************/
  $(".menu-btn").click(function (e) {
    $(".overlay").fadeIn(500);
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-btn,.overlay").click(function (e) {
    $(".overlay").fadeOut(500);
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  /************************************ Services Slider ************************************/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    spaceBetween: 16,
    a11y: {
      enabled: false,
    },
    navigation: {
      nextEl: ".services-slider .swiper-btn-next",
      prevEl: ".services-slider .swiper-btn-prev",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  /************************************ Packages Slider ************************************/
  var packagesSwiper = new Swiper(".packages-slider .swiper", {
    spaceBetween: 16,
    a11y: {
      enabled: false,
    },
    navigation: {
      nextEl: ".packages-slider .swiper-btn-next",
      prevEl: ".packages-slider .swiper-btn-prev",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });
  /************************************ Offers Slider ************************************/
  var offersSwiper = new Swiper(".offers-slider .swiper", {
    spaceBetween: 16,
    a11y: {
      enabled: false,
    },
    navigation: {
      nextEl: ".offers-slider .swiper-btn-next",
      prevEl: ".offers-slider .swiper-btn-prev",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  /************************************ Gallery Slider ************************************/
  var gallerySwiper = new Swiper(".gallery-slider .swiper", {
    spaceBetween: 16,
    a11y: {
      enabled: false,
    },
    navigation: {
      nextEl: ".gallery-slider .swiper-btn-next",
      prevEl: ".gallery-slider .swiper-btn-prev",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});
