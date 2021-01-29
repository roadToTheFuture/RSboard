import createDomElement from '@js/utils/createDomElement.js';
import { forms } from './elements/form';
import { panels } from './elements/panel';

const main = createDomElement('main', 'container', '', document.body);

const formsContainer = createDomElement('section', 'forms-container', '', main);
formsContainer.innerHTML = forms;

const panelsContainer = createDomElement('section', 'panels-container', '', main);
panelsContainer.innerHTML = panels;