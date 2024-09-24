const accordions = document.querySelectorAll('.faq__accordion');

export function faqButtonClick() {
  accordions.forEach((accordion, index) => {
    const button = accordion.querySelector('.faq__button');
    const panel = accordion.querySelector('.faq__panel');

    if (index === 2) {
      accordion.classList.add('faq__accordion--active');
      button.classList.add('faq__button--active');
      panel.style.display = 'block';
    }

    button.addEventListener('click', () => {
      accordion.classList.toggle('faq__accordion--active');

      if (accordion.classList.contains('faq__accordion--active')) {
        button.classList.add('faq__button--active');
        panel.style.display = 'block';
      } else {
        button.classList.remove('faq__button--active');
        panel.style.display = 'none';
      }
    });
  });
}
