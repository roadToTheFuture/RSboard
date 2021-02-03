/* eslint-disable default-case */
import createDomElement from '@js/utils/createDomElement.js';
import stringGenerate from '@js/utils/stringGenerate.js';

export default function addWindowWithError(elem, error, message, passInput, emailInput, userInput) {
  const firstErrorWindow = document.querySelector('.errorMessage');
  const passValue = passInput.value;

  if (firstErrorWindow) firstErrorWindow.remove();

  switch (error) {
    case 'length':
      createDomElement('div', 'errorMessage', `${message}`, elem);
      passInput.style.color = '#fd7036';
      passInput.value = `${stringGenerate(passValue.length)}`;
      passInput.classList.add('error');
      break;
    case 'error':
      createDomElement('div', 'errorMessage', `${message}`, elem);
      passInput.style.color = '#fd7036';
      passInput.value = `${stringGenerate(passValue.length)}`;
      passInput.classList.add('error');
      break;
    case 'other':
      createDomElement('div', 'errorMessage', `${message}`, elem);
      emailInput.style.color = '#fd7036';
      passInput.value = `${stringGenerate(passValue.length)}`;
      passInput.classList.add('error');
      emailInput.value = 'Sorry, try again.';
      emailInput.classList.add('error');
      break;
    case 'emailLength':
      emailInput.style.color = '#fd7036';
      emailInput.value = 'Sorry, try again.';
      emailInput.classList.add('error');
      break;
    case 'weak':
      createDomElement('div', 'errorMessage', `${message}`, elem);
      passInput.style.color = '#fd7036';
      passInput.value = `${stringGenerate(passValue.length)}`;
      passInput.classList.add('error');
      break;
    case 'noUser':
      userInput.style.color = '#fd7036';
      userInput.classList.add('error');
      userInput.value = 'Add your name.';
      break;

  }
}