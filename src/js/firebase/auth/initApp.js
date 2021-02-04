import firebase from 'firebase/app';
import 'firebase/auth';
import toggleSignIn from './signIn';
import handleSignUp from './signUp';
import sendPasswordReset from './resetPass';
import googleUp from './services/googleUp';
import githubUp from './services/githubUp';

export default function initApp() {
  // Listening for auth state changes.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      const { uid } = user;
      console.log('User is sign In');
      console.log(uid);
    } else {
      // User is signed out.
      console.log('User is signed out');
    }
    document.getElementById('signInBtn').disabled = false;
  });

  function addUrl() {
    firebase.auth().onAuthStateChanged((info) => {
      if (!info) return;
      window.location.href = `#/app/${info.uid}`;
      console.log('work');
    });
  }

  document.getElementById('signInBtn').addEventListener('click', toggleSignIn, false);
  document.getElementById('signInBtn').addEventListener('click', addUrl, false);
  document.getElementById('signUpBtn').addEventListener('click', handleSignUp, false);
  document.getElementById('signUpBtn').addEventListener('click', addUrl, false);
  document.getElementById('resetPass').addEventListener('click', sendPasswordReset, false);
  document.getElementById('social-google').addEventListener('click', googleUp, false);
  document.getElementById('social-github').addEventListener('click', githubUp, false);
}
