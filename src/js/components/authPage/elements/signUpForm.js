import createDomElement from '@js/utils/createDomElement.js';

export default function addSignUpForm(signInUpForms) {
  const signUpForm = createDomElement('form', 'sign-up-form', '', signInUpForms, 'action', '');
  createDomElement('h2', 'titleUp', 'Sign up', signUpForm);

  const inputNameContainer = createDomElement('div', 'input-field', '', signUpForm, 'id', 'emailError');
  createDomElement('i', 'fas fa-user', '', inputNameContainer);

  const muiLibraryUsername = createDomElement('div', 'mui-textfield mui-textfield--float-label', '', inputNameContainer);

  const inputUsername = createDomElement('input', '', '', muiLibraryUsername, 'type', 'text');
  createDomElement('label', '', 'Username', muiLibraryUsername);

  const inputEmailContainer = createDomElement('div', 'input-field', '', signUpForm);
  createDomElement('i', 'fas fa-envelope', '', inputEmailContainer);

  const muiLibraryEmail = createDomElement('div', 'mui-textfield mui-textfield--float-label', '', inputEmailContainer);

  const inputEmail = createDomElement('input', '', '', muiLibraryEmail, 'type', 'email');
  createDomElement('label', '', 'Email', muiLibraryEmail);

  const inputPasswordContainer = createDomElement('div', 'input-field', '', signUpForm);
  createDomElement('i', 'fas fa-lock', '', inputPasswordContainer);

  const muiLibraryPass = createDomElement('div', 'mui-textfield mui-textfield--float-label', '', inputPasswordContainer);

  const inputPassword = createDomElement('input', '', '', muiLibraryPass, 'type', 'password');
  createDomElement('label', '', 'Password', muiLibraryPass);

  const signUpBtn = createDomElement('button', 'mui-btn mui-btn--raised mui-btn--primary sign-in-btn', 'SIGN UP', signUpForm, 'type', 'submit');

  const ressetPassword = createDomElement('p', 'social-text', 'Or Sign up with social platforms', signUpForm);

  inputUsername.setAttribute('id', 'userName');
  inputEmail.setAttribute('id', 'signUpEmail');
  inputPassword.setAttribute('id', 'signUpPassword');
  signUpBtn.setAttribute('id', 'signUpBtn');

  const socialMedia = createDomElement('div', 'social-media', '', signUpForm);
  const facebook = createDomElement('a', 'social-icon', '', socialMedia, 'href', '#');
  createDomElement('i', 'fab fa-facebook-f', '', facebook);

  const gitHub = createDomElement('a', 'social-icon', '', socialMedia, 'href', '#');
  createDomElement('i', 'fab fa-github', '', gitHub);

  const google = createDomElement('a', 'social-icon', '', socialMedia, 'href', '#');
  createDomElement('i', 'fab fa-google', '', google);

  const linkedin = createDomElement('a', 'social-icon', '', socialMedia, 'href', '#');
  createDomElement('i', 'fab fa-linkedin', '', linkedin);
}
