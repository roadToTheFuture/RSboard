import createDomElement from '@js/utils/createDomElement.js';

const main = createDomElement('main', 'container', '', document.body);

const formsContainer = createDomElement('section', 'forms-container', '', main);
const signInUpForms = createDomElement('div', 'signin-signup', '', formsContainer);

const panelsContainer = createDomElement('section', 'panels-container', '', main);
const leftPanel = createDomElement('div', 'panel left-panel', '', panelsContainer);
const rightPanel = createDomElement('div', 'panel right-panel', '', panelsContainer);

export {
  signInUpForms, leftPanel, rightPanel,
};