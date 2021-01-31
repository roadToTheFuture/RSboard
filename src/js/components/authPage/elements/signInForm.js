/* eslint-disable indent */
import createDomElement from '@js/utils/createDomElement.js';
import { signInUpForms } from './main';

const signInForm = createDomElement('form', 'sign-in-form', '', signInUpForms, 'action', '');
                   createDomElement('h2', 'title', 'Sign in', signInForm);

const inputEmailContainer = createDomElement('div', 'input-field', '', signInForm);
                            createDomElement('i', 'fas fa-user', '', inputEmailContainer);

const muiLibraryEmail = createDomElement('div', 'mui-textfield mui-textfield--float-label', '', inputEmailContainer);

const inputEmail = createDomElement('input', '', '', muiLibraryEmail, 'type', 'email');
                   createDomElement('label', '', 'Email', muiLibraryEmail);

const inputPasswordContainer = createDomElement('div', 'input-field', '', signInForm);
                               createDomElement('i', 'fas fa-lock', '', inputPasswordContainer);

const muiLibraryPass = createDomElement('div', 'mui-textfield mui-textfield--float-label', '', inputPasswordContainer);

const inputPassword = createDomElement('input', '', '', muiLibraryPass, 'type', 'password');
                      createDomElement('label', '', 'Password', muiLibraryPass);

const signInBtn = createDomElement('button', 'mui-btn mui-btn--raised mui-btn--primary sign-in-btn', 'SIGN IN', signInForm, 'type', 'submit');

const ressetPassword = createDomElement('p', 'recovery', 'password recovery', signInForm, 'id', 'resetPass');

inputEmail.setAttribute('id', 'signInEmail');
inputPassword.setAttribute('id', 'signInPassword');
signInBtn.setAttribute('id', 'signInBtn');
