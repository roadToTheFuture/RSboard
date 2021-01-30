/* eslint-disable indent */
import createDomElement from '@js/utils/createDomElement.js';
// import firstSvg from '@/assets/img/first.png';
// import secondSvg from '@/assets/img/second.png';
import { leftPanel, rightPanel } from './main';

const leftContentText = 'Try the rssboard app to do this you need to register and then you can create cards with tasks.';
const rightContentText = 'Try the rssboard app to do this you need to register and then you can create cards with tasks.';

const leftContent = createDomElement('div', 'content', '', leftPanel);
                    createDomElement('h3', '', 'New here ?', leftContent);
                    createDomElement('p', '', `${leftContentText}`, leftContent);
                    createDomElement('button', 'mui-btn mui-btn--raised mui-btn--primary btn transparent', 'Sign up', leftContent, 'id', 'sign-up-btn');
const firstSvg = createDomElement('img', '', '', leftContent);
firstSvg.classList.add('image');
firstSvg.src = '~img/first.svg';

                  
const rightContent = createDomElement('div', 'content', '', rightPanel);
                    createDomElement('h3', '', 'One of us ?', rightContent);
                    createDomElement('p', '', `${rightContentText}`, rightContent);
                    createDomElement('button', 'mui-btn mui-btn--raised mui-btn--primary btn transparent', 'Sign in', rightContent, 'id', 'sign-in-btn');
