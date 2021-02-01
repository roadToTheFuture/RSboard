/* eslint-disable no-console */
/* eslint-disable no-alert */
// import renderMain from '@js/components/main/renderMain.js';
// import mainPageLogic from '@js/components/main/menu.js';
// import renderAllBoard from '@js/components/board/board.js';
import renderAuthPage from '@js/components/authPage/elements/main.js';

  const director = require('../../../node_modules/director/build/director');

const author = function () { renderAuthPage() };
const books = function () { console.log('books'); };
const viewBook = function (bookId) {
  console.log(`viewBook: bookId is populated: ${bookId}`);
};

const routes = {
  '/author': author,
  '/books': [books, function () {
    console.log('An inline route handler.');
  }],
  '/books/view/:bookId': viewBook,
};

const router = director.Router(routes);
