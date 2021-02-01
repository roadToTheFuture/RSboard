import createDomElement from '@js/utils/createDomElement.js';
import './wrapper.scss';
import './title.scss';
import './content.scss';

export default function renderBoard() {
  const main = document.querySelector('.board-wrapper');
  const wrapper = createDomElement('div', 'wrapper', '', main);
  const title = createDomElement('div', 'board__title-wrapper', '', wrapper);
  createDomElement('div', 'title__first-letter', 'R', title);
  createDomElement('div', 'title__text', 'RSboard', title);
  const content = createDomElement('div', 'content', '', wrapper);
}
