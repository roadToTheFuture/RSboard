import './menu.scss';

import createDomElement from '@js/utils/createDomElement.js';

function menu() {
    const slide = document.querySelector('.nav');
    slide.classList.toggle('active');
    burger.classList.toggle('active');
}

const burger = document.querySelector('.burger');
    
burger.addEventListener('click', menu)

function showTime() {
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showDate() {
  let today = new Date(),
   day = today.getDay(),
   dat = today.getDate(),
   mon = today.getMonth();

   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "Septeember", "October", "Noember", "December"] 

  date.innerHTML = `${days[day]}<span>, </span>${dat}<span>th </span>${monthes[mon]}`;

  setTimeout(showDate, 1000);
}

showTime()
showDate()
  