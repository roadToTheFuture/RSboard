import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default function googleUp() {
  const provider = new firebase.auth.GoogleAuthProvider();

  const moreInfoAboutUser = provider.addScope('');

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const database = firebase.database();
      const { credential } = result;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const { user } = result;

      const addNewUserInDatabase = database.ref(`users/${user.uid}`);

      addNewUserInDatabase.set({
        id: user.uid,
        email: user.email,
        name: user.displayName,
      });

      window.location.href = `#/app/${user.uid}`;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const { email } = error;
      // The firebase.auth.AuthCredential type that was used.
      const { credential } = error;
    });
}
