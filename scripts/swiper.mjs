import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
   // Optional parameters
   //direction: "vertical",
   loop: true,
   spaceBetween: 20,
   slidesPerView: 1.5,
   freeMode: true,
   sticky: false,
   momentumRatio: 2,
   momentumBounce: false,

   autoplay: {
      delay: 3000,
   },
   breakpoints: {
      // when window width is >= 320px
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },

      1024: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
   },

   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
   },

   // Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
