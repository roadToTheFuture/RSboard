import createDomElement from '@js/utils/createDomElement.js';
import { textButtonAddColumn } from '@js/constants/constants.js';
import { Column } from '@js/components/board/classes/column.js';
import state from '@js/components/board/state.js';
import refInfo from '@js/database/refInfo.js';

class CreateFieldColumn {
  constructor(textPlaceholder, state) {
    this.textPlaceholder = textPlaceholder;
    this.state = state;
  }

  render() {
    const inputNewColumnWrapper = createDomElement('div', 'input-new-column-wrapper', '', document.querySelector('.content'));
    const inputField = createDomElement('input', 'input-new-column__input', '', inputNewColumnWrapper);

    inputField.placeholder = this.textPlaceholder;

    const buttonAddColumn = createDomElement('button', 'input-new-column__button', '', inputNewColumnWrapper);

    buttonAddColumn.innerText = textButtonAddColumn;

    buttonAddColumn.addEventListener('click', () => {
      const nameColumn = inputField.value;

      refInfo('boards', {title: nameColumn});

      if (nameColumn !== '') {
        const newColumn = new Column(nameColumn);
        newColumn.render();

        state[`${nameColumn}`] = nameColumn;
        state[`${nameColumn}`] = {};
        
      } else {
        alert('Please enter column name!');
      }
      inputField.value = '';
      inputField.placeholder = this.textPlaceholder;
      
    });
  }
}

export { CreateFieldColumn };
