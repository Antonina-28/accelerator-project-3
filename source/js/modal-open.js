const buttonOpen = document.querySelector('.about__button');
const aboutModal = document.querySelector('.about__modal');
const buttonClose = document.querySelector('.modal__button--close');

buttonOpen.addEventListener('click', () => {
  aboutModal.classList.remove('modal--close');
  aboutModal.classList.add('modal--open');
});

buttonClose.addEventListener('click', () => {
  aboutModal.classList.remove('modal--open');
  aboutModal.classList.add('modal--close');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.about__modal') && !event.target.closest('.about__button')) {
    aboutModal.classList.remove('modal--open');
    aboutModal.classList.add('modal--close');
  }
});
