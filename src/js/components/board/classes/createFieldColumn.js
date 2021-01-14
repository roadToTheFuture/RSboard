import createDomElement from '@js/utils/createDomElement.js';
import { textButtonAddColumn } from '@js/constants/constants.js';

import { Column } from '@js/components/board/classes/column.js';
import { content } from '../wrapper/wrapper';

class CreateFieldColumn {
  constructor(textPlaceholder) {
    this.textPlaceholder = textPlaceholder;
  }

  render() {
    const inputNewColumnWrapper = createDomElement('div', 'input-new-column-wrapper', '', content);
    const inputField = createDomElement('input', 'input-new-column__input', '', inputNewColumnWrapper);

    inputField.placeholder = this.textPlaceholder;

    const buttonAddColumn = createDomElement('button', 'input-new-column__button', '', inputNewColumnWrapper);

    buttonAddColumn.innerText = textButtonAddColumn;

    buttonAddColumn.addEventListener('click', () => {
      const nameColumn = inputField.value;

      if (nameColumn !== '') {
        const newColumn = new Column(nameColumn);
        newColumn.render();
      } else {
        alert('Please enter column name!');
      }
      inputField.value = '';
      inputField.placeholder = this.textPlaceholder;
    });
  }
}

export { CreateFieldColumn };
