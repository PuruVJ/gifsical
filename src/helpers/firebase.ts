import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FIREBASE_CONFIG } from '../constants/FIREBASE';
import { BUILD } from '__constants/BUILD';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

// @ts-ignore
window.firebase = firebase;

if (BUILD.isDev) {
  firebase.auth().useEmulator('http://localhost:9099/');
}

export { firebase as firebaseInstance };
