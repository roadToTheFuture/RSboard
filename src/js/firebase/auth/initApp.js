import firebase from 'firebase/app';
import 'firebase/auth';
import toggleSignIn from './signIn';
import handleSignUp from './signUp';
import sendPasswordReset from './resetPass';

function initApp() {
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

  document.getElementById('signInBtn').addEventListener('click', toggleSignIn, false);
  document.getElementById('signUpBtn').addEventListener('click', handleSignUp, false);
  document.getElementById('resetPass').addEventListener('click', sendPasswordReset, false);
}

// window.onload = () => initApp();
