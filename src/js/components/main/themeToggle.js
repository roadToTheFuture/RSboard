import createDomElement from '@js/utils/createDomElement.js';
import './themeToggle.scss';

export default function renderToggle() {
  const header = document.querySelector('.header_toggle');
  console.log(headerToggle);
  createDomElement('div', 'header_toggle', '', header);
  createDomElement('input', 'checkbox', '', headerToggle, 'type', 'checkbox');

  const label = createDomElement('label', 'label', '', headerToggle, 'for', 'chk');

  createDomElement('i', 'fas fa-moon', '', label);
  createDomElement('i', 'fas fa-sun', '', label);
}

// checkbox.addEventListener('change', () => {
// 	document.body.classList.toggle('dark');
// });


//  