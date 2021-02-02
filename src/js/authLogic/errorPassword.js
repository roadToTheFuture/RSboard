import createDomElement from '@js/utils/createDomElement.js';

export default function errorPassword(error) {
  const lengthErrorMessage = '';
  const passErrorMessage = '';
  if (error === 'length') 
  const input = document.querySelector('#passwordError');
  createDomElement('p', 'signInPassError', '', input);
}

// 'length' 'error'

//''Минимальное количество символов в пароле: 6. Пожалуйста, введите другой пароль.