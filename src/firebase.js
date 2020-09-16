import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKlSda5iDcDh9hTasbAwSArm0SvAW8MIw",
  authDomain: "clone-7f77f.firebaseapp.com",
  databaseURL: "https://clone-7f77f.firebaseio.com",
  projectId: "clone-7f77f",
  storageBucket: "clone-7f77f.appspot.com",
  messagingSenderId: "1015421229593",
  appId: "1:1015421229593:web:cc1b3bb622170686152888",
  measurementId: "G-NGXJW2MY1Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
