import createDomElement from '@js/utils/createDomElement.js';

class NavBoard {
  constructor(defaultText, elem) {
    this.defaultText = defaultText;
    this.elem = elem;
  }

  render() {
    const navBoard = createDomElement('div', 'nav_boards_list', '', this.elem);
    const textarea = createDomElement('input', 'nav_boards_input', '', navBoard);
    textarea.placeholder = this.defaultText;
    const buttonBoardDelete = createDomElement('i', 'far fa-trash-alt column__card__button', '', navBoard);
    buttonBoardDelete.addEventListener('click', () => {
      navBoard.remove();
    });
  }
}

export { NavBoard };
