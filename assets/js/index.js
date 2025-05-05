// ----header-dropdown-menu---
$(document).ready(function () {
  $(".moblie-menu-btn").click(function () {
    $(".header_main ul").toggleClass("active");
    $(".line").toggleClass("active");
    $(".mobile-menu-overlay").toggleClass("active");
  });
  $(".mobile-menu-overlay").click(function () {
    $(".header_main ul").removeClass("active");
    $(".line").removeClass("active");
    $(".mobile-menu-overlay").removeClass("active");
  });
});

// ---banner-slider---
var swiper = new Swiper(".banner_slider .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
  },
});

// document.addEventListener("DOMContentLoaded", () => {
//   // Register the SplitText plugin
//   gsap.registerPlugin(SplitText);

//   // Targeting the element correctly
//   const splitHomeTitle = new SplitText(".banner_content h1", { type: "lines" });
//   const splitHomeText = new SplitText(".banner_content h4", { type: "lines" });

//   gsap.from(splitHomeTitle.lines, {
//     y: 20,
//     opacity: 0,
//     duration: 0.4,
//     stagger: 0.2,
//     // ease: "power2.out",
//   });
//   gsap.from(splitHomeText.lines, {
//     y: 20,
//     opacity: 0,
//     duration: 0.4,
//     stagger: 0.2,
//     // ease: "power2.out",
//   });

//   gsap.from(".banner_content_tag", {
//     scale: 0.5,
//     opacity: 0,
//     duration: 0.4,
//   });
//   gsap.from(".banner-btn-wrp .cmn_btn", {
//     x: -40,
//     opacity: 0,
//     duration: 0.5,
//   });
// });
