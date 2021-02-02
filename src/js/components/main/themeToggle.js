import createDomElement from '@js/utils/createDomElement.js';
import './themeToggle.scss';

export default function renderToggle() {
  const header = document.querySelector('.header');
   
  const headerToggle =createDomElement('div', 'header_toggle', '', header);
  createDomElement('input', 'checkbox', '', headerToggle, 'type', 'checkbox', 'id', 'chk');

  const label = createDomElement('label', 'label', '', headerToggle, 'for', 'chk');

  createDomElement('i', 'fas fa-moon', '', label);
  createDomElement('i', 'fas fa-sun', '', label);
  createDomElement('div', 'ball', '', label);
}

renderToggle();

// checkbox.addEventListener('change', () => {
// 	document.body.classList.toggle('dark');
// });


//  