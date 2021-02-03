import firebase from 'firebase/app';
import 'firebase/auth';
import errorLogic from '@js/authLogic/errorLogic.js';

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
      errorLogic('emailLength', 'Email must have more than 4 characters.    Please try again.', '.sign-in-form');
      return;
    }

    if (passwordValue.length < 4) {
      errorLogic('length', 'Your password must contain more than 4 characters. Please try again.', '.sign-in-form');
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
          errorLogic('error', 'Incorrect password.      Please try again.', '.sign-in-form');
        } else {
          errorLogic('other', "There's been a mistake.   Please try again.", '.sign-in-form');
        }
        document.getElementById('signInBtn').disabled = false;
      });
  }
  document.getElementById('signInBtn').disabled = true;
}
