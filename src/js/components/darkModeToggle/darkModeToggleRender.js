import createDomElement from '@js/utils/createDomElement.js';
import './darkModeToggle.scss';

export default function darkModeToggleRender() {
  const header = document.querySelector('.board-wrapper__dark');

  const headerToggle = createDomElement('div', 'header_toggle', '', header);
  const checkbox = createDomElement('input', 'checkbox__dark', '', headerToggle, 'id', 'chk');
  checkbox.setAttribute('type', 'checkbox');

  const label = createDomElement('label', 'label__dark', '', headerToggle, 'for', 'chk');

  createDomElement('i', 'fas fa-moon', '', label);
  createDomElement('i', 'fas fa-sun', '', label);
  createDomElement('div', 'ball__dark', '', label);
}