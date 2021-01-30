/* eslint-disable indent */
import createDomElement from '@js/utils/createDomElement.js';
import { leftPanel, rightPanel } from './main';

const leftContentText = 'Try the rssboard app to do this you need to register and then you can create cards with tasks.';
const rightContentText = 'Try the rssboard app to do this you need to register and then you can create cards with tasks.';

const leftContent = createDomElement('div', 'content', '', leftPanel);
                    createDomElement('h3', '', 'New here ?', leftContent);
                    createDomElement('p', '', `${leftContentText}`, leftContent);
                    createDomElement('button', 'mui-btn mui-btn--raised mui-btn--primary btn transparent', 'Sign up', leftContent, 'id', 'sign-up-btn');
                    createDomElement('img', 'image firstImg', '', leftPanel);

const rightContent = createDomElement('div', 'content', '', rightPanel);
                    createDomElement('h3', '', 'One of us ?', rightContent);
                    createDomElement('p', '', `${rightContentText}`, rightContent);
                    createDomElement('button', 'mui-btn mui-btn--raised mui-btn--primary btn transparent', 'Sign in', rightContent, 'id', 'sign-in-btn');
                    createDomElement('img', 'image secondImg', '', rightPanel);
