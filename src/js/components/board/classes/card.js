import createDomElement from '@js/utils/createDomElement.js';

class Card {
  constructor(defaultText, elem) {
    this.defaultText = defaultText;
    this.elem = elem;
  }

  render() {
    const card = createDomElement('div', 'column__card', '', this.elem);

    const textarea = createDomElement('textarea', 'column__card__textarea', '', card);
    textarea.placeholder = this.defaultText;

    const buttonCardDelete = createDomElement('img', 'column__card__button', '', card);
    buttonCardDelete.src = 'https://user-images.githubusercontent.com/61156194/104500143-b310e500-55e6-11eb-900c-2c23db449231.png';

    buttonCardDelete.addEventListener('click', () => {
      card.remove();
    });
  }
}
export { Card };
