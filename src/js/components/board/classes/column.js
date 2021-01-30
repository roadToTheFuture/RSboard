import createDomElement from '@js/utils/createDomElement.js';
import { textPlaceholderCard } from '@js/constants/constants.js';
import { CreateFieldCard } from '@js/components/board/classes/createFieldCard.js';
import state from '@js/components/board/state.js';
import { content } from '../wrapper/wrapper.js';

class Column {
  constructor(nameColumn, state) {
    this.nameColumn = nameColumn;
    this.state = state;
  }

  render() {
    const listWrapper = createDomElement('div', 'column__list-wrapper', '', content);
    const columnHeader = createDomElement('div', 'column__header', '', listWrapper);
    const columnText = createDomElement('p', 'column__text', `${this.nameColumn}`, columnHeader);
    const cardWrapper = createDomElement('div', 'column__card-wrapper', '', listWrapper);

    cardWrapper.ondragover = allowDrop;
    function allowDrop(event) {
      event.preventDefault();
    }

    cardWrapper.ondrop = drop;
    function drop(event) {
      const itemId = event.dataTransfer.getData('id');
      console.log(itemId);
      event.target.append(document.getElementById(itemId));
    }

    const newFieldCreateCard = new CreateFieldCard(textPlaceholderCard, cardWrapper, listWrapper);
    newFieldCreateCard.render();
  }
}

export { Column };
