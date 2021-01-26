import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwsoFnbQ_gFuza32qxv4DidMClAIdAGYU",
    authDomain: "react-curso-6563f.firebaseapp.com",
    projectId: "react-curso-6563f",
    storageBucket: "react-curso-6563f.appspot.com",
    messagingSenderId: "63907695767",
    appId: "1:63907695767:web:0cda59376d86f5cc652dd2"
  };

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}