import Swiper from 'swiper/bundle';
import { Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const options = {
  slidesPerView: 1,
  loop: false,
  // pagination: {
  //   el: '.news__pagination',
  //   clickable: true,
  //   // renderButton: function (index, className) {
  //   //   return (
  //   //     '<button class="news__pagination-button" type="button">' + '<span class="visually-hidden">' + (index + 1) + " слайд" + "</span>" + "</button>"
  //   //   );
  //   // },
  // },
  navigation: {
    nextEl: '.news__button--next',
    prevEl: '.news__button--prev',
  },
  modules: [Pagination, Navigation],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      // spaceBetween: 32,
    },
  },
  // on: {
  //   slideChange: function () {
  //     // Обновляем видимые кнопки пагинации при смене слайда
  //     const visibleSlides = this.visibleSlides;
  //     const totalSlides = this.slides.length;
  //     const maxVisibleSlides = 4;

  //     // Определяем начальный индекс видимых слайдов
  //     let startSlide = visibleSlides[0].index;

  //     // Обновляем текст кнопок пагинации
  //     const paginationButtons =
  //         this.pagination.el.querySelectorAll(
  //           '.news__pagination-button'
  //         );

  //     // Устанавливаем текст кнопок пагинации
  //     for (
  //       let i = 0;
  //       i < paginationButtons.length && i < maxVisibleSlides;
  //       i++
  //     ) {
  //       paginationButtons[i].querySelector('span').textContent =
  //         ' '  + (startSlide + i + 1) + ' слайд';
  //     }

  //     // Смещаем кнопки пагинации при переходе на следующий слайд
  //     if (startSlide + maxVisibleSlides < totalSlides) {
  //       startSlide = startSlide + 1;
  //     }

  //     // Обновляем текст кнопок пагинации
  //     for (
  //       let i = 0;
  //       i < paginationButtons.length && i < maxVisibleSlides;
  //       i++
  //     ) {
  //       paginationButtons[i].querySelector('span').textContent =
  //         ' ' + (startSlide + i + 1) + ' слайд';
  //     }
  //   },
  // },
};

export function flippingThroughTheSliderNews() {
  new Swiper('#swiper-news', options);
}
