import firebase from 'firebase'
import { Firebase } from '../settings'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: Firebase.apiKey,
    authDomain: Firebase.authDomain,
    databaseURL: Firebase.databaseURL,
    projectId: Firebase.projectId,
    storageBucket: Firebase.storageBucket,
    messagingSenderId: Firebase.messagingSenderId,
  })
}

export default firebase
