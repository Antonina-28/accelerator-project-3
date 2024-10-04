import { overlay } from './functions/overlay';

const headerNav = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');
const headerNavItems = document.querySelectorAll('.header-nav__item');

export function clickMenu() {
  navToggle.addEventListener('click', () => {
    toggleMenu();
  });

  headerNavItems.forEach((item) => {
    item.addEventListener('click', () => {
      toggleSubmenu(item);
    });
  });
}

function toggleMenu() {
  if (headerNav.classList.contains('header-nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
}

const handleClick = (event) => {
  if (!event.target.closest('.header-nav--opened')) {
    overlay(false);
    headerNav.classList.add('header-nav--closed');
    headerNav.classList.remove('header-nav--opened');
    navToggle.classList.remove('active');
  }
};

function openMenu() {
  headerNav.classList.remove('header-nav--closed');
  headerNav.classList.add('header-nav--opened');
  navToggle.classList.add('active');
  overlay(true);
  document.addEventListener('click', handleClick);
}

function closeMenu() {
  headerNav.classList.add('header-nav--closed');
  headerNav.classList.remove('header-nav--opened');
  navToggle.classList.remove('active');
  overlay(false);
  document.removeEventListener('click', handleClick);
}

function toggleSubmenu(item) {
  if (item.classList.contains('header-nav__item--opened')) {
    closeSubmenu(item);
  } else {
    openSubmenu(item);
  }
}

function openSubmenu(item) {
  item.classList.remove('header-nav__item--closed');
  item.classList.add('header-nav__item--opened');
  item.querySelector('.header-nav__link').classList.remove('current');
}

function closeSubmenu(item) {
  item.classList.remove('header-nav__item--opened');
  item.classList.add('header-nav__item--closed');
  item.querySelector('.header-nav__link').classList.add('current');
}
