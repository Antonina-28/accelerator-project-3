import Swiper from 'swiper/bundle';
import { Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const options = {
  loop: false,
  pagination: {
    // el: '.swiper-pagination',
    // clickable: true,
    // modifierClass: 'news__pagination',
    // bulletClass: 'news__pagination-button',
    // bulletActiveClass: 'news__pagination-button--active',
  },
  navigation: {
    nextEl: '.news__button--next',
    prevEl: '.news__button--prev',
  },
  modules: [Pagination, Navigation],
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesPerGroup: 3,
    },
  },
};

export function flippingThroughTheSliderNews() {
  new Swiper('#swiper-news', options);
}
