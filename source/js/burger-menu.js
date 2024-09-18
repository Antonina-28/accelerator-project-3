import { overlay } from './functions/overlay';

const headerNav = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-nav__toggle');
const headerNavItems = document.querySelectorAll('.header-nav__item');
const body = document.body;

export function clickMenu() {
  navToggle.addEventListener('click', () => {
    toggleMenu();
  });

  body.addEventListener('click', (event) => {
    if (!headerNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
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

function openMenu() {
  headerNav.classList.remove('header-nav--closed');
  headerNav.classList.add('header-nav--opened');
  navToggle.classList.add('active');
  overlay(true);
}

function closeMenu() {
  headerNav.classList.add('header-nav--closed');
  headerNav.classList.remove('header-nav--opened');
  navToggle.classList.remove('active');
  overlay(false);
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
