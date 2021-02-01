import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default function handleSignUp() {
  const database = firebase.database();
  const userName = document.getElementById('userName').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
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
      console.log(user);
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}
