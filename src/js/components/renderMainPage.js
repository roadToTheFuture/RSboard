import renderMain from '@js/components/main/renderMain.js';
import mainPageLogic from '@js/components/main/menu.js';
// import renderAllBoard from '@js/components/board/board.js';

function renderMainPage() {
  renderMain();
  mainPageLogic();
  renderAllBoard();
}
