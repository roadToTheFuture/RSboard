import addWindowWithError from '@js/authLogic/addWindowWithError.js';

export default function errorLogic(error, message, domElem, formSignUp) {
  const signInForm = document.querySelector(domElem);
  if (formSignUp) {
    const passInput = document.querySelector('#signUpPassword');
    const emailInput = document.querySelector('#signUpEmail');
    const userInput = document.querySelector('#userName');
    addWindowWithError(signInForm, error, message, passInput, emailInput, userInput);
    return;
  }
  const passInput = document.querySelector('#signInPassword');
  const emailInput = document.querySelector('#signInEmail');
  addWindowWithError(signInForm, error, message, passInput, emailInput);
}
