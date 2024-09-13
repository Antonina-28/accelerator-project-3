import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
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
    el: '.swiper-pagination',
    clickable: true,
    modifierClass: 'hero__pagination',
    bulletClass: 'hero__pagination-button',
    bulletActiveClass: 'hero__pagination-button--active',
  },
  modules: [Pagination],
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
};

export function flippingThroughTheSliderHero() {
  new Swiper('#swiper-hero', options);
}
