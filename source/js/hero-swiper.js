import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

const options = {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: null,
    prevEl: null,
  },
  pagination: {
    el: null,
    clickable: false,
  },
  modules: [],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: false,
    }
  },
  autoHeight: true,
  on: {
    init: function (swiper) {
      updatePagination(swiper);
    },
    slideChangeTransitionStart: function (swiper) {
      updatePagination(swiper);
    }
  }
};

function updatePagination(swiper) {
  const currentSlide = swiper.slides[swiper.activeIndex];
  const pagination = currentSlide.querySelector('.hero__pagination');
  const buttons = pagination.querySelectorAll('.hero__pagination-button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      swiper.slideTo(index);
    });
  });

  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  buttons[swiper.activeIndex].classList.add('active');
}

export function flippingThroughTheSliderHero() {
  const swiper = new Swiper('#swiper-hero', options);
  updatePagination(swiper);
}
