import firebase from 'firebase/app';
import 'firebase/auth';
import preloaderRender from '@js/components/preloader/preloader.js';
import renderMain from '@js/components/main/renderMain.js';
import mainPageLogic from '@js/components/main/menu.js';
import renderAllBoard from '@js/components/board/board.js';
import renderAuthPage from '@js/components/authPage/elements/main.js';
import delay from '@js/utils/delay.js';

function doesTheUserHaveId() {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        resolve(user.uid);
      }
      resolve(false);
    });
  });
}

function renderFirstPage(result) {
  return new Promise(() => {
    const preloadInDom = document.querySelector('.dl');
    preloadInDom.remove();
    if (result) {
      window.location.href = `#/app/${result}`;
    } else {
      renderAuthPage();
    }
  });
}

export default async function firstLoad() {
  const { hash } = window.location;
  if (hash !== '') return;
  preloaderRender();
  await delay(2000);
  const userId = await doesTheUserHaveId();
  await renderFirstPage(userId);
}
