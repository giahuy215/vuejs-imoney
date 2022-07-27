import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyRWWnuDZNqUu--ZL5cdUTdhJ1RdNLXuw",
    authDomain: "imoney-giahuy.firebaseapp.com",
    projectId: "imoney-giahuy",
    storageBucket: "imoney-giahuy.appspot.com",
    messagingSenderId: "779499386653",
    appId: "1:779499386653:web:3ae7ed5873c1ce492e93f4",
    measurementId: "G-YYB29GN1LT"
  };
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectStorage, projectFireStore, timestamp };