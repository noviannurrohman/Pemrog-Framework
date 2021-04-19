import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEnuD6VHIqQqJmG65AdcK2QxkXn3wrQK0",
    authDomain: "praktikum11-e29a9.firebaseapp.com",
    projectId: "praktikum11-e29a9",
    storageBucket: "praktikum11-e29a9.appspot.com",
    messagingSenderId: "1055556600945",
    appId: "1:1055556600945:web:bf10f1bbc7fb2e02b407d0",
    measurementId: "G-7PQR0PZG9G"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;