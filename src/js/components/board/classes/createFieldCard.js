import createDomElement from '@js/utils/createDomElement.js';
import { textPlaceholderCard } from '@js/constants/constants.js';
import { textDefaultCard } from '@js/constants/constants.js';
import { Card } from './card';

class CreateFieldCard {
  constructor(textButton, elem) {
    this.textButton = textButton;
    this.elem = elem;
  }

  render() {
    const buttonAdd = createDomElement('button', 'create-field-card__button', '', this.elem);

    buttonAdd.innerText = this.textButton;

    buttonAdd.addEventListener('click', () => {
        const newCard = new Card(textDefaultCard, this.elem);
        newCard.render();
    });
  }
}

export { CreateFieldCard };
