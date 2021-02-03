import createDomElement from '@js/utils/createDomElement.js';

export default function darkModeToggleRender() {
  const togglePosition = document.querySelector('.header');

  const svg = createDomElement('svg', '', '', togglePosition, 'id', 'darkMode');

  svg.setAttribute('width', '40');
  svg.setAttribute('height', '40');
  svg.setAttribute('viewBox', '0 0 55 55');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const path = createDomElement('path', 'circle', '', svg);
  svg.setAttribute('d', 'M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z');
  svg.setAttribute('fill', '#FFC700');
};