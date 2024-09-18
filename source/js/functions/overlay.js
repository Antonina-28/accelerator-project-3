const body = document.body;

export function overlay(show) {
  if (show) {
    body.style.overflow = 'hidden';
    body.classList.add('overlay');
  } else {
    body.style.overflow = 'auto';
    body.classList.remove('overlay');
  }
}
