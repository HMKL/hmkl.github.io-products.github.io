/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
const width = window.matchMedia('(max-width:769px)');

function checkWidth(e) {
  if (e.matches) {

  } else {

  }
}
checkWidth(width);
width.addEventListener('change', checkWidth);

$(document).ready(() => {
  $('.owl-one').owlCarousel({
    loop: true,
    // margin: 10,
    items: 5,
    autoplay: true,
    // autoplayTimeout: 3000,
    dots: true,
    responsiveClass: true,
    // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    smartSpeed: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1500: {
        items: 4,
      },
      2000: {
        items: 5,
      },
    },
  });
});
AOS.init({
  // duration: 400,
  delay: 100,
  easing: 'ease-in-sine',
});
