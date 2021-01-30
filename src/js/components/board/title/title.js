import createDomElement from '@js/utils/createDomElement.js';
import { title } from '../wrapper/wrapper';

import './title.scss';

const titleFirstLetter = createDomElement('div', 'title__first-letter', 'R', title);
const titleText = createDomElement('div', 'title__text', 'Sboard', title);
