import { CreateFieldColumn } from '@js/components/board/classes/CreateFieldColumn.js';
import { textPlaceholder } from '@js/constants/constants.js';
import renderBoard from './wrapper/wrapper.js';
import contentScroll from './classes/contentScroll';

export default function renderAllBoard() {
  const NewFieldAddColumn = new CreateFieldColumn(textPlaceholder);
  renderBoard();
  NewFieldAddColumn.render();
  contentScroll();
}
// renderAllBoard()