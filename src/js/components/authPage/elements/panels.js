/* eslint-disable indent */
import createDomElement from '@js/utils/createDomElement.js';
// import firstSvg from '@/assets/img/first.png';
// import secondSvg from '@/assets/img/second.png';
import { leftPanel, rightPanel } from './main';

const firstImg = 'https://user-images.githubusercontent.com/61156194/106353314-4722c200-62f2-11eb-98b8-30cec3d7785c.jpg';
const secondImg = 'https://user-images.githubusercontent.com/61156194/106353313-468a2b80-62f2-11eb-8d4b-f1076257a7c5.jpg';

const leftContentText = 'Try the rssboard app to do this you need to register and then you can create cards with tasks.';
const rightContentText = 'Try the rssboard app to do this you need to register and then you can create cards with tasks.';

const leftContent = createDomElement('div', 'content', '', leftPanel);
                    createDomElement('h3', '', 'New here ?', leftContent);
                    createDomElement('p', '', `${leftContentText}`, leftContent);
                    createDomElement('button', 'mui-btn mui-btn--raised mui-btn--primary btn transparent', 'Sign up', leftContent, 'id', 'sign-up-btn');
                    createDomElement('img', 'image', '', leftContent, 'src', firstImg);

                  
const rightContent = createDomElement('div', 'content', '', rightPanel);
                    createDomElement('h3', '', 'One of us ?', rightContent);
                    createDomElement('p', '', `${rightContentText}`, rightContent);
                    createDomElement('button', 'mui-btn mui-btn--raised mui-btn--primary btn transparent', 'Sign in', rightContent, 'id', 'sign-in-btn');
                    createDomElement('img', 'image', '', rightContent, 'src', secondImg);
