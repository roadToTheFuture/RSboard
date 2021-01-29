import firebase from 'firebase/app';
import 'firebase/auth';

export default function sendPasswordReset() {
  const email = document.getElementById('signInEmail').value;
  const resetPass = document.querySelector('.recovery');
  firebase.auth().sendPasswordResetEmail(email).then(() => {
    // Password Reset Email Sent!
    resetPass.classList.toggle('sent');
    resetPass.innerText = 'password sent by email';
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });
}
