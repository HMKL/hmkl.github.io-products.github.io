/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty */

const getRowDiv = document.querySelectorAll('.row > div');
const getRow = document.querySelectorAll('.row');
const getContainer = document.querySelectorAll('.container');
const getSection = document.querySelectorAll('section');
console.log(getSection);
console.log(getRowDiv);

const width = window.matchMedia('(max-width:767px)');

function checkWidth(e) {
  if (e.matches) {
    getSection[3].setAttribute('class', '_1 dark');
    getRow[5].classList.add('flex-column-reverse');
    getRowDiv[8].setAttribute('data-aos', 'fade-up');
    getRowDiv[10].setAttribute('data-aos', 'fade-up');
    getRowDiv[11].setAttribute('data-aos', 'fade-up');
    getRowDiv[12].setAttribute('data-aos', 'fade-up');
    getRowDiv[13].setAttribute('data-aos', 'fade-up');
  } else {
    getSection[3].setAttribute('class', '_1 call');
    getRow[5].classList.remove('flex-column-reverse');
    getRowDiv[8].setAttribute('data-aos', 'fade-up');
    getRowDiv[10].setAttribute('data-aos', 'fade-right');
    getRowDiv[12].setAttribute('data-aos', 'fade-right');
    getRowDiv[11].setAttribute('data-aos', 'fade-left');
    getRowDiv[13].setAttribute('data-aos', 'fade-left');
  }
}
checkWidth(width);
width.addEventListener('change', checkWidth);

$(document).ready(() => {
  $('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    // items: 5,
    autoplay: true,
    // autoplayTimeout: 3000,
    dots: true,
    responsiveClass: true,
    // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    smartSpeed: 500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dotsEach: 1,
      },
      600: {
        items: 2,
        dotsEach: 1,
      },
      1000: {
        items: 3,
        dotsEach: 1,
      },
      1500: {
        items: 4,
        dotsEach: 1,
      },
      2000: {
        items: 5,
        dotsEach: 1,
      },
    },
  });
});
AOS.init({
  // duration: 400,
  delay: 100,
  easing: 'ease-in-sine',
});
