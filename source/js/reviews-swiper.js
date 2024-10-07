import Swiper from 'swiper/bundle';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const options = {
  autoplay: false,
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
    modifierClass: 'reviews__pagination',
    bulletClass: 'reviews__pagination-button',
    bulletActiveClass: 'reviews__pagination-button--active',
  },
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
};

export function flippingThroughTheSliderReviews() {
  new Swiper('#swiper-reviews', options);
}
