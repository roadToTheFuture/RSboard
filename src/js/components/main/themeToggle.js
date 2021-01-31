import createDomElement from '@js/utils/createDomElement.js';
import './themeToggle.scss';

function renderToggle() {
  const themeToggle = createDomElement('div', 'themeToggle', '', body.main-wrapper.header);

  const checkbox = createDomElement('checkbox', 'checkbox', '', themeToggle);
  const label = createDomElement('label', 'label', '', themeToggle);
  
  const fasFaMoon = createDomElement('i', 'fas fa-moon', '', label);
  const fasFaSun = createDomElement('i', 'fas fa-sun', '', label);
 
}

renderMain();

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});