import createDomElement from '@js/utils/createDomElement.js';
import { textDefaultCard } from '@js/constants/constants.js';
import { Card } from './card';

class CreateFieldCard {
  constructor(textButton, wrapperForCard, position) {
    this.textButton = textButton;
    this.wrapperForCard = wrapperForCard;
    this.position = position;
  }

  render() {
    const buttonAdd = createDomElement('button', 'create-field-card__button', '', this.position);

    buttonAdd.innerText = this.textButton;

    buttonAdd.addEventListener('click', () => {
      const newCard = new Card(textDefaultCard, this.wrapperForCard);
      newCard.render();
    });
  }
}

export { CreateFieldCard };
