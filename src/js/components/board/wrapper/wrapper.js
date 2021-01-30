import createDomElement from '@js/utils/createDomElement.js';
import './wrapper.scss';

const main = document.querySelector('.board-wrapper');
const wrapper = createDomElement('div', 'wrapper', '', main);
const title = createDomElement('div', 'board__title-wrapper', '', wrapper);
const content = createDomElement('div', 'content', '', wrapper);

export { wrapper, title, content };