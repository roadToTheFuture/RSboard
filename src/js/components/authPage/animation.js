export default function animationBtnInForm() {
  const signInOfferBtn = document.querySelector('#sign-in-btn');
  const signUpOfferBtn = document.querySelector('#sign-up-btn');
  const signInForm = document.querySelector('.sign-in-form');
  const signUpForm = document.querySelector('.sign-up-form');
  const container = document.querySelector('.container');

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
