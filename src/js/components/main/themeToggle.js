import createDomElement from '@js/utils/createDomElement.js';
import './themeToggle.scss';

function renderToggle() {
  createDomElement('div', 'header_toggle', '', header);

  const checkbox = createDomElement('input', 'checkbox', '', div.header_toggle, 'type', 'checkbox');

  createDomElement('label', 'label', '', header_toggle, 'for', 'chk');
  
  createDomElement('i', 'fas fa-moon', '', label);
  createDomElement('i', 'fas fa-sun', '', label);
 
}

renderToggle()

// checkbox.addEventListener('change', () => {
// 	document.body.classList.toggle('dark');
// });