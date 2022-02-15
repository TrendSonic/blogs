import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyANRzS2wd6CYybbfokyxFqTqscfIfqFZMI",

  authDomain: "fireblogs-c224f.firebaseapp.com",

  projectId: "fireblogs-c224f",

  storageBucket: "fireblogs-c224f.appspot.com",

  messagingSenderId: "69684110318",

  appId: "1:69684110318:web:4984494a6b8691f10464ff"

};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()