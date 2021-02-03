import firebase from 'firebase/app';
import 'firebase/auth';

function burgerLogic() {
  function menu() {
    const slide = document.querySelector('.nav');
    slide.classList.toggle('active');
    burger.classList.toggle('active');
  }

  const burger = document.querySelector('.burger');

  burger.addEventListener('click', menu);
}

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
  const dat = today.getDate();
  const mon = today.getMonth();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septeember', 'October', 'Noember', 'December'];

  date.innerHTML = `${days[day]}<span>, </span>${dat}<span>th </span>${monthes[mon]}`;

  setTimeout(showDate, 1000);
}

function getEmail() {
  firebase.auth().onAuthStateChanged((user) =>{
    const email = document.querySelector('.info__mail');
    email.innerText = `${user.email}`;
  })
}

export default function mainPageLogic(){
  getEmail();
  burgerLogic();
  showTime();
  showDate();
}

// mainPageLogic()