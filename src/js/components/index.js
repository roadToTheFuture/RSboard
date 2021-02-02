/* eslint-disable no-console */
/* eslint-disable no-alert */
import preloaderRender from '@js/components/preloader/preloader.js';
import renderMain from '@js/components/main/renderMain.js';
import mainPageLogic from '@js/components/main/menu.js';
import renderAllBoard from '@js/components/board/board.js';
import renderAuthPage from '@js/components/authPage/elements/main.js';
import renderWithAuthCheck from '@js/authLogic/renderWithAuthCheck.js';

renderWithAuthCheck();

const auth = () => {
  document.body.innerHTML = '';
  renderAuthPage();
};

const app = () => {
  document.body.innerHTML = '';
  renderMain();
  renderAllBoard();
  mainPageLogic();
};

const routes = {
  '': auth,
  '/app/:userId': app,
};

const router = Router(routes);

router.init();
