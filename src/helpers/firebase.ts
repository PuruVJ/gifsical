import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FIREBASE_CONFIG } from '../constants/FIREBASE';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

window.firebase = firebase;

export { firebase as firebaseInstance };
