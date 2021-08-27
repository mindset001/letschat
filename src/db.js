import firebase from "firebase/app";
import "firebase/database";
// import 'firebase/firestore';

const config = {
    // API KEYS
    apiKey: "AIzaSyCFi0q7HOYHxkcfxzOdvj3syCSMAXXz3k8",
    authDomain: "letschat-70110.firebaseapp.com",
    projectId: "letschat-70110",
    storageBucket: "letschat-70110.appspot.com",
    messagingSenderId: "1000476892130",
    appId: "1:1000476892130:web:84a5129516083b522df7bb"
}

const db = firebase.initializeApp(config);
export default db;
// export const firestore = firebase.firestore();