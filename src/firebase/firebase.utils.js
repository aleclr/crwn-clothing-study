import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyD9hV9jZJErE4JL17LApeQTlfhR7j7_N8A",
    authDomain: "crw-db-9595b.firebaseapp.com",
    projectId: "crw-db-9595b",
    storageBucket: "crw-db-9595b.appspot.com",
    messagingSenderId: "722589340271",
    appId: "1:722589340271:web:eb0f0b49df8ba3a430739a",
    measurementId: "G-BDW0LVF32B"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;