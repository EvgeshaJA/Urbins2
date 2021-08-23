"use strict";

// CAROUSEL {


  $('.reviews__carousel-inner, .blog-grid__carousel-inner').slick({
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });

  
// Language switcher

const buttonOptions = document.querySelectorAll('.header__navigation-langling');

buttonOptions.forEach(function(element, index) {
    element.addEventListener('click', switchLang);
  });
  
  function switchLang (event) {
    var targetElement = event.target;
  
    buttonOptions.forEach(function(element, index) {
      element.classList.remove('header__navigation-langling--active');
    });
  
    targetElement.classList.add('header__navigation-langling--active');
}

// Buttons switcher


const buttonsSwitcher = document.querySelectorAll('.search-under__btn, .blog-aside__tags-btn, .paginations__link');

buttonsSwitcher.forEach(function(element, index) {
    element.addEventListener('click', switchButton);
  });
  
  function switchButton (event) {
    var targetElement = event.target;
  
    buttonsSwitcher.forEach(function(element, index) {
      element.classList.remove('button--active');
    });
  
    targetElement.classList.add('button--active');
}
 
// Rightside menu

const navigationButton = document.querySelector('.header__navigation-button');
const rightsideMenu = document.querySelector('.rightside-menu');
const menuClose = document.querySelector('.rightside-menu__close');
const allClose = document.querySelector('.main');

navigationButton.addEventListener('click', () => {
    rightsideMenu.classList.add('rightside-menu--open');
});

menuClose.addEventListener('click', () => {
    rightsideMenu.classList.remove('rightside-menu--open');
});

allClose.addEventListener('click', () => {
    rightsideMenu.classList.remove('rightside-menu--open');
});


// DATE

jQuery(document).ready(function ($) {
  $('.js-data').datepicker({
    language: "en"
  });
});




