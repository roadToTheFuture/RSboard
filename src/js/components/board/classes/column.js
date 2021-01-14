import createDomElement from '@js/utils/createDomElement.js';
import { textPlaceholderCard } from '@js/constants/constants.js';
import { CreateFieldCard } from '@js/components/board/classes/createFieldCard.js';
import { content } from '../wrapper/wrapper.js';

class Column {
  constructor(nameColumn) {
    this.nameColumn = nameColumn;
  }

  render() {
    const listWrapper = createDomElement('div', 'column__list-wrapper', '', content);
    const columnHeader = createDomElement('div', 'column__header', '', listWrapper);
    const columnText = createDomElement('p', 'column__text', `${this.nameColumn}`, columnHeader);
    const cardWrapper = createDomElement('div', 'column__card-wrapper', '', listWrapper);

    const newFieldCreateCard = new CreateFieldCard(textPlaceholderCard, cardWrapper, listWrapper);
    newFieldCreateCard.render();
  }
}

export { Column };
