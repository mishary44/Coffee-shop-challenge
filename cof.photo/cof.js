const navlinks = document.querySelectorAll(".navbar .nav-menu .nav-link");
navlinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

const menuOpenButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  console.log("done");
  document.body.classList.toggle("show-mobile-menu");
});
menucloseButton.addEventListener("click", () => menuOpenButton.click());

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spacbetween: 25,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpionts: {
    0: {
      slidesPerView: 1,
    },
    748: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
