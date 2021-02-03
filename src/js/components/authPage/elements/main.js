import createDomElement from '@js/utils/createDomElement.js';
import initApp from '@js/firebase/auth/initApp.js';
import addSignInForm from './signInForm';
import addSignUpForm from './signUpForm';
import addPanels from './panels';
import animationBtnInForm from '../animation.js';

export default function renderAuthPage() {
  const main = createDomElement('main', 'container', '', document.body);

  const formsContainer = createDomElement('section', 'forms-container', '', main);
  const signInUpForms = createDomElement('div', 'signin-signup', '', formsContainer);

  const panelsContainer = createDomElement('section', 'panels-container', '', main);
  const leftPanel = createDomElement('div', 'panel left-panel', '', panelsContainer);
  const rightPanel = createDomElement('div', 'panel right-panel', '', panelsContainer);

  addSignInForm(signInUpForms);
  addSignUpForm(signInUpForms);
  addPanels(leftPanel, rightPanel);
  initApp();
  animationBtnInForm();
}
