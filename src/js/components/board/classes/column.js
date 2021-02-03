import createDomElement from '@js/utils/createDomElement.js';
import { textPlaceholderCard } from '@js/constants/constants.js';
import { CreateFieldCard } from '@js/components/board/classes/createFieldCard.js';
import state from '@js/components/board/state.js';

class Column {
  constructor(nameColumn, state) {
    this.nameColumn = nameColumn;
    this.state = state;
  }

  render() {
    const listWrapper = createDomElement('div', 'column__list-wrapper', '', document.querySelector('.content'));
    const columnHeader = createDomElement('div', 'column__header', '', listWrapper);
    const columnText = createDomElement('p', 'column__text', `${this.nameColumn}`, columnHeader);
    const cardWrapper = createDomElement('div', 'column__card-wrapper', '', listWrapper);
    const cards = document.querySelectorAll('.column__card');

    const dragover = function (event) {
      event.preventDefault();
    };
    const dragenter = function () {
      cardWrapper.classList.add('column__card-wrapper--hovered');
    };
    const dragleave = function () {
      cardWrapper.classList.remove('column__card-wrapper--hovered');
    };
    const dragdrop = function (event) {
      const id = event.dataTransfer.getData('text');
      const dragabbleElement = document.getElementById(id);
      this.append(dragabbleElement);
      cardWrapper.classList.remove('column__card-wrapper--hovered');
    };
    cardWrapper.addEventListener('dragover', dragover);
    cardWrapper.addEventListener('dragenter', dragenter);
    cardWrapper.addEventListener('dragleave', dragleave);
    cardWrapper.addEventListener('drop', dragdrop);
    const newFieldCreateCard = new CreateFieldCard(textPlaceholderCard, cardWrapper, listWrapper);
    newFieldCreateCard.render();
  }
}

export { Column };
