import createDomElement from '@js/utils/createDomElement.js';
import './themeToggle.scss';

export default function renderToggle() {
  const header = document.querySelector('div.board-wrapper');
  console.log(header);
  
  const headerToggle =createDomElement('div', 'header_toggle', '', header);
  const checkbox = createDomElement('input', 'checkbox', '', headerToggle, 'id', 'chk');
  checkbox.setAttribute('type', 'checkbox');

  const label = createDomElement('label', 'label', '', headerToggle, 'for', 'chk');

  createDomElement('i', 'fas fa-moon', '', label);
  createDomElement('i', 'fas fa-sun', '', label);
  createDomElement('div', 'ball', '', label);
}

renderToggle();

// для смены бекграунда

// checkbox.addEventListener('change', () => {
// 	document.body.classList.toggle('dark');
// });


//  