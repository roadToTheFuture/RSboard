import firebase from 'firebase/app';
import 'firebase/auth';
import errorPassword from '@js/authLogic/errorPassword.js';
import errorEmail from '@js/authLogic/errorEmail.js';

export default function toggleSignIn() {
  const user = firebase.auth().currentUser;
  if (user) {
    firebase.auth().signOut();
  } else {
    const email = document.getElementById('signInEmail');
    const password = document.getElementById('signInPassword');
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue.length < 4) {
      errorEmail();
      return;
    }

    if (passwordValue.length < 4) {
      errorPassword('length');
      return;
    }
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then((response) => console.log(response))
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          errorPassword('error');
        } else {
          errorPassword();
          console.log(errorMessage);
        }
        document.getElementById('signInBtn').disabled = false;
      });
  }
  document.getElementById('signInBtn').disabled = true;
}
