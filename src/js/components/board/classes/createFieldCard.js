import createDomElement from '@js/utils/createDomElement.js';
import { textDefaultCard } from '@js/constants/constants.js';
import { Card } from './card';
import state from '@js/components/board/state.js';

class CreateFieldCard {
  constructor(textButton, wrapperForCard, position, state) {
    this.textButton = textButton;
    this.wrapperForCard = wrapperForCard;
    this.position = position;
    this.state = state;
  }

  render() {
    const buttonAdd = createDomElement('button', 'create-field-card__button', '', this.position);

    buttonAdd.innerText = this.textButton;

    buttonAdd.addEventListener('click', () => {
      const newCard = new Card(textDefaultCard, this.wrapperForCard, this.state);
      newCard.render();
    });
  }
}

export { CreateFieldCard };
