import createDomElement from '@js/utils/createDomElement.js';
import './menu.scss';

function renderMain() {
  const aSide = createDomElement('aside', '', '', document.body);

  const title = createDomElement('div', 'title', '', aSide);
  const burger = createDomElement('div', 'burger', '', title);
  createDomElement('span', '', '', burger);

  const container = createDomElement('div', 'container', '', title);
  createDomElement('div', 'avatar', '', container);
  createDomElement('div', 'question', '?', container);

  const mainWrapper = createDomElement('section', 'main-wrapper', '', document.body);

  const header = createDomElement('section', 'header', '', mainWrapper);
  createDomElement('div', 'header_title', 'RSboard', header);

  const clock = createDomElement('div', 'header_clock', '', header);
  createDomElement('time', 'header_clock__time', '', clock, 'id', 'time');
  createDomElement('time', 'header_clock__date', '', clock, 'id', 'date');

  const boardWrapper = createDomElement('div', 'board-wrapper', '', mainWrapper);
}

renderMain();
