import createDomElement from '@js/utils/createDomElement.js';
import { CreateFieldColumn } from '@js/components/board/classes/CreateFieldColumn.js';
import { textPlaceholderCard } from '@js/constants/constants.js';
import { CreateFieldCard } from '@js/components/board/classes/createFieldCard.js';
import { content } from '../wrapper/wrapper.js';

class Column {
  constructor(nameColumn) {
    this.nameColumn = nameColumn;
  }

  render() {
    const cardWrapper = createDomElement('div', 'column__card-wrapper', '', content);
    const columnHeader = createDomElement('div', 'column__header', '', cardWrapper);
    const columnText = createDomElement('span', 'column__text', `${this.nameColumn}`, columnHeader);



    const newFieldCreateCard = new CreateFieldCard(textPlaceholderCard, cardWrapper);
    newFieldCreateCard.render();
  }
}

export { Column };
