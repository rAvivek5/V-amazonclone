// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDwVFU3QZ7jaSNOJehf_pJRyUlMPCzJ3Gw',
  authDomain: 'clone-de.firebaseapp.com',
  projectId: 'clone-de',
  storageBucket: 'clone-de.appspot.com',
  messagingSenderId: '580390311724',
  appId: '1:580390311724:web:0eb1dcf81c958089b13e89',
  measurementId: 'G-YRP737YEXR',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
