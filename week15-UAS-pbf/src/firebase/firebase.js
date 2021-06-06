import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDBpjJsn2dKpYaA_u8rpFOUAie6_8xvQx0",
    authDomain: "react-uas-a6ef3.firebaseapp.com",
    databaseURL:"https://react-uas-a6ef3-default-rtdb.firebaseio.com",
    projectId: "react-uas-a6ef3",
    storageBucket: "react-uas-a6ef3.appspot.com",
    messagingSenderId: "214870413088",
    appId: "1:214870413088:web:c3bfb8057d93d2d12b9145",
    measurementId: "G-ECBLPJZ4RJ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);