import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const state = {};

firebase.auth().onAuthStateChanged(function(user) {
  console.log(user.uid)
  console.log(user)
  state.userId = user.uid;
})

console.log(state);

export default state;
