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
  const userLabelUp = document.querySelector('.userLabelUp');
  const emailLabelUp = document.querySelector('.emailLabelUp');
  const emailLabelIn = document.querySelector('.emailLabelIn');

  inputUser.addEventListener('click', () => {
    inputUser.style.color = '#333';
    if (inputUser.classList.contains('error')) {
      inputUser.classList.remove('error');
      inputUser.value = '';
      userLabelUp.innerText = 'User name';
    }
  });

  inputValuePassword.addEventListener('click', () => {
    inputValuePassword.style.color = '#333';
    if (inputValuePassword.classList.contains('error')) {
      inputValuePassword.classList.remove('error');
      inputValuePassword.value = '';
    }
  });

 
  inputValuePasswordUp.addEventListener('click', () => {
    inputValuePasswordUp.style.color = '#333';
    if (inputValuePasswordUp.classList.contains('error')) {
      inputValuePasswordUp.classList.remove('error');
      inputValuePasswordUp.value = '';
    }
  });

  inputValueEmail.addEventListener('click', () => {
    inputValueEmail.style.color = '#333';
    if (inputValueEmail.classList.contains('error')) {
      inputValueEmail.classList.remove('error');
      inputValueEmail.value = '';
      emailLabelIn.innerText = 'Email';
    }
  });

  inputValueEmailUp.addEventListener('click', () => {
    inputValueEmailUp.style.color = '#333';
    if (inputValueEmailUp.classList.contains('error')) {
      inputValueEmailUp.classList.remove('error');
      inputValueEmailUp.value = '';
      emailLabelUp.innerText = 'Email';
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
