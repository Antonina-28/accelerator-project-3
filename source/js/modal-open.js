import { overlay } from './functions/overlay';

const buttonOpen = document.querySelector('.about__button');
const aboutModal = document.querySelector('.about__modal');
const buttonClose = document.querySelector('.modal__button--close');
const modalForm = document.querySelector('.modal__form');

buttonOpen.addEventListener('click', (event) => {
  event.stopPropagation();
  aboutModal.classList.remove('modal--close');
  aboutModal.classList.add('modal--open');
  overlay(true);
});

buttonClose.addEventListener('click', () => {
  aboutModal.classList.remove('modal--open');
  aboutModal.classList.add('modal--close');
  overlay(false);
});

modalForm.addEventListener('click', (event) => {
  event.stopPropagation();
});
