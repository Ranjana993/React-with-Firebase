// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVsPDpNMhQsWse4TJhnDFlXF-ddNwrUbE",
    authDomain: "chat-app-ee3a0.firebaseapp.com",
    projectId: "chat-app-ee3a0",
    storageBucket: "chat-app-ee3a0.appspot.com",
    messagingSenderId: "149348450034",
    appId: "1:149348450034:web:d0831ea11f1c10c12c9a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)