/* eslint-disable no-console */
/* eslint-disable no-alert */
import renderMain from '@js/components/main/renderMain.js';
import mainPageLogic from '@js/components/main/menu.js';
import renderAllBoard from '@js/components/board/board.js';
import renderAuthPage from '@js/components/authPage/elements/main.js';
import { BodyDropPivotTarget } from 'ag-grid-community';

const author = function () { console.log('author'); };
const books = function () { 
  document.body.innerHTML = '';
  renderAuthPage() };

const app = () => {
  document.body.innerHTML = '';
  renderMain();
  renderAllBoard();
  mainPageLogic();
}

const routes = {
  '/author': author,
  '/app': app,
  '/books': [books, function () {
    console.log('An inline route handler.');
  }],
};

const router = Router(routes);

router.init();
