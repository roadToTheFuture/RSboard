import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import errorLogic from '@js/authLogic/errorLogic.js';

export default function handleSignUp() {
  const database = firebase.database();
  const userName = document.getElementById('userName').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  if (email.length < 4) {
    errorLogic('emailLength', 'Email must have more than 4 characters.    Please try again.', '.sign-up-form', true);
    return;
  }
  if (password.length < 4) {
    errorLogic('length', 'Your password must contain more than 4 characters. Please try again.', '.sign-up-form', true);
    return;
  }
  if(!userName){
    errorLogic('noUser', 'Please enter a name and try again.', '.sign-up-form', true);
    return;
  }
  // Create user with email and pass.
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      const addNewUserInDatabase = database.ref(`users/${user.uid}`);
      user.userName = userName;
      addNewUserInDatabase.set({
        id: user.uid,
        email: user.email,
        name: user.userName,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/weak-password') {
        errorLogic('weak', 'The password is too weak. Please try again.', '.sign-up-form', true);
      } else {
        errorLogic('other', 'The email address is badly formatted.', '.sign-up-form', true);
      }
    });
}
