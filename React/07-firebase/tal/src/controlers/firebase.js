import firebase from 'firebase';
import 'firebase/firestore'; //the database

const firebaseConfig = {
    apiKey: "AIzaSyDBrctixsp9hagB4axdLENPLTXSfzhOUl8",
    authDomain: "common-tst.firebaseapp.com",
    projectId: "common-tst",
    storageBucket: "common-tst.appspot.com",
    messagingSenderId: "253126688266",
    appId: "1:253126688266:web:66b65b2bb48a5340e9e9f3",
    measurementId: "G-0CELWFLDGP"
  };

  firebase.initializeApp(firebaseConfig)

  export const DB = firebase.firestore();

