import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDVfzqXrX-HpGrkw14CFGkx-fCmBcGha0k",
    authDomain: "clone-9d536.firebaseapp.com",
    projectId: "clone-9d536",
    storageBucket: "clone-9d536.appspot.com",
    messagingSenderId: "174874786459",
    appId: "1:174874786459:web:95ea6e4c8c721336c2643e",
    measurementId: "G-7G6RZ20X97"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };