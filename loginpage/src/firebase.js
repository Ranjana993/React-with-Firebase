// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnu4rC3uCnc6G81UtuqWOLBw_jjdjlvCU",
    authDomain: "login-firebase-1be76.firebaseapp.com",
    projectId: "login-firebase-1be76",
    storageBucket: "login-firebase-1be76.appspot.com",
    messagingSenderId: "897546969331",
    appId: "1:897546969331:web:8c9c6a5dcedbc16e5a9786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
