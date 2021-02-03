function menu() {
  const slide = document.querySelector('.nav');
  slide.classList.toggle('active');
  burger.classList.toggle('active');
}

const burger = document.querySelector('.burger');

burger.addEventListener('click', menu);

function showTime() {
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showDate() {
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();

  date.innerHTML = `${addZero(day)}<span>.</span>${addZero(month + 1)}<span>.</span>${year}`;

  setTimeout(showDate, 1000);
}

showTime();
showDate();
