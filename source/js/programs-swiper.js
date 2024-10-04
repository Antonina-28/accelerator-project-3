import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const options = {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: false,
  navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    modifierClass: 'programs__pagination',
    bulletClass: 'programs__pagination-button',
    bulletActiveClass: 'programs__pagination-button--active',
  },
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    },
  },
};

export function flippingThroughTheSliderPrograms() {
  new Swiper('#swiper-programs', options);
}
