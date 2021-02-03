import createDomElement from '@js/utils/createDomElement.js';

export default function preloaderRender() {
  const runDl = createDomElement('div', 'dl', '', document.body);
  const container = createDomElement('div', 'dl__container', '', runDl);
  createDomElement('div', 'dl__corner--top', '', container);
  createDomElement('div', 'dl__corner--bottom', '', container);
  createDomElement('div', 'dl__square', 'RS', runDl);
}
