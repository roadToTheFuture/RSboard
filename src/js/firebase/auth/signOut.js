import firebase from 'firebase/app';
import 'firebase/auth';
import preloaderRender from '@js/components/preloader/preloader.js';
import delay from '@js/utils/delay.js';
import renderWithAuthCheck from '@js/authLogic/renderWithAuthCheck.js';

function userGoOut() {
  firebase.auth().signOut().then(() => {
    console.log('YOU ARE OUT');
  }).catch((error) => {
    console.log(error);
  });
}

export default function signOut() {
  async function out() {
    userGoOut();
    renderWithAuthCheck();
    window.location.href = '';
    console.log('asdasd');
  }

  document.getElementById('signOutBtn').addEventListener('click', out);
}
