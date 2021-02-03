import firebase from 'firebase/app';
import 'firebase/auth';
import firstLoad from '@js/authLogic/renderWithAuthCheck.js';

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
    firstLoad();
    window.location.href = '';
    console.log('asdasd');
  }

  document.getElementById('signOutBtn').addEventListener('click', out);
}
