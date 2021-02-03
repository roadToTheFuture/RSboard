import createDomElement from '@js/utils/createDomElement.js';
import { textDefaultBoard } from '@js/constants/constants.js';
import { NavBoard } from './NavBoard';

class ListNavBoard {
  constructor(textButton, position) {
    this.textButton = textButton;
    this.position = position;
  }

  render() {
    const buttonAdd = createDomElement('button', 'create_nav_board', '', this.position);
    buttonAdd.innerText = this.textButton;

    buttonAdd.addEventListener('click', () => {
      const newBoard = new NavBoard(textDefaultBoard, document.querySelector('.nav_boards'));
      newBoard.render();
    });
  }
}
export { ListNavBoard };
