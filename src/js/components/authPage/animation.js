export default function animationBtnInForm() {
  const signInOfferBtn = document.querySelector('#sign-in-btn');
  const signUpOfferBtn = document.querySelector('#sign-up-btn');
  const signInForm = document.querySelector('.sign-in-form');
  const signUpForm = document.querySelector('.sign-up-form');
  const container = document.querySelector('.container');
  const inputValuePassword = document.querySelector('#signInPassword');
  const inputValueEmail = document.querySelector('#signInEmail');
  const inputValuePasswordUp = document.querySelector('#signUpPassword');
  const inputValueEmailUp = document.querySelector('#signUpEmail');
  const inputUser = document.querySelector('#userName');

  inputUser.addEventListener('click', () => {
    inputUser.style.color = '#333';
    if (inputUser.classList.contains('error')) {
      inputUser.classList.remove('error');
      inputUser.value = '';
    }
  });

  inputValuePassword.addEventListener('click', () => {
    inputValuePassword.style.color = '#333';
    if (inputValuePassword.classList.contains('error')) {
      inputValuePassword.classList.remove('error');
      inputValuePassword.value = '';
    }
  });

  inputValueEmail.addEventListener('click', () => {
    inputValueEmail.style.color = '#333';
    if (inputValueEmail.classList.contains('error')) {
      inputValueEmail.classList.remove('error');
      inputValueEmail.value = '';
    }
  });

  inputValuePasswordUp.addEventListener('click', () => {
    inputValuePasswordUp.style.color = '#333';
    if (inputValuePasswordUp.classList.contains('error')) {
      inputValuePasswordUp.classList.remove('error');
      inputValuePasswordUp.value = '';
    }
  });

  inputValueEmailUp.addEventListener('click', () => {
    inputValueEmailUp.style.color = '#333';
    if (inputValueEmailUp.classList.contains('error')) {
      inputValueEmailUp.classList.remove('error');
      inputValueEmailUp.value = '';
    }
  });

  signUpOfferBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
  });

  signInOfferBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
  });

  function submitFormHandler(event) {
    event.preventDefault();
  }

  signInForm.addEventListener('submit', submitFormHandler);
  signUpForm.addEventListener('submit', submitFormHandler);
}
