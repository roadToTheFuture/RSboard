import firebase from 'firebase/app';
import 'firebase/auth';

export default function sendEmailVerification() {
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email Verification sent!
    alert('Email Verification Sent!');
  });
}