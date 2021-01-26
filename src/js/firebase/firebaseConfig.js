import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDOpQjY_YVb2aaePAKJgvErZiC2CsMRFzk',
  authDomain: 'rsboard-6fd75.firebaseapp.com',
  projectId: 'rsboard-6fd75',
  databaseURL: 'https://rsboard-6fd75-default-rtdb.firebaseio.com/',
  storageBucket: 'rsboard-6fd75.appspot.com',
  messagingSenderId: '816029981687',
  appId: '1:816029981687:web:006f776ef30ddd062e2cf2',
};

firebase.initializeApp(firebaseConfig);
