import './menu.scss';

import createDomElement from '@js/utils/createDomElement.js';

function menu() {
    const slide = document.querySelector('.nav');
    slide.classList.toggle('active');
    burger.classList.toggle('active');
}

const burger = document.querySelector('.burger');
    
burger.addEventListener('click', menu)
  