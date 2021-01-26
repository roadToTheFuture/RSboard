import createDomElement from '@js/utils/createDomElement.js';
import './wrapper.scss';

const wrapper = createDomElement('div', 'wrapper', '', document.body);
const title = createDomElement('div', 'board__title-wrapper', '', wrapper);
const content = createDomElement('div', 'content', '', wrapper);

export { wrapper, title, content };