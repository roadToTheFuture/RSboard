import firebase from 'firebase/app';
import 'firebase/auth';

export default function toggleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    if (email.length < 4) {
      console.log('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      console.log('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        console.log('Wrong password.');
      } else {
        console.log(errorMessage);
      }
      console.log(error);
      document.getElementById('signInBtn').disabled = false;
    });
  }
  document.getElementById('signInBtn').disabled = true;
}
