import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default function refInfo(path, object) {
  firebase.auth().onAuthStateChanged((user) => {
    firebase.database().ref(`/users/${user.uid}/render/${path}`).push(object);
  });
}