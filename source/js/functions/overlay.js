const body = document.body;
const aboutModal = document.querySelector('.about__modal');

export function overlay(show) {
  const isShow = !show;

  if (isShow) {
    body.style.overflow = 'hidden';
    body.classList.add('overlay');

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.about__modal')) {
        aboutModal.classList.remove('modal--open');
        aboutModal.classList.add('modal--close');
      }
    });
  } else {
    body.style.overflow = 'auto';
    body.classList.remove('overlay');
  }
}
