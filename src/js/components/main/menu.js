import './menu.scss';

import createDomElement from '@js/utils/createDomElement.js';

function menu() {
    const slide = document.querySelector('.nav');
    slide.classList.toggle('active');
}

const burgerIco = document.querySelector('.burger-ico');
    
burgerIco.addEventListener('click', menu)
  