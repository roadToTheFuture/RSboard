import '@js/components/board/boardTitle/boardTitle.js';
import './board.scss';
import createDomElement from '@js/utils/createDomElement.js';

const boardWrapper = createDomElement('div', 'board__wrapper', '', document.body);
const titleWrapper = createDomElement('div', 'board__title-wrapper', '', boardWrapper);
export { boardWrapper, titleWrapper };
