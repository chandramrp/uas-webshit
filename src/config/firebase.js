import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBAl5gl3cnB13ObbzTTFBJ14u8ok3fEv8",
    authDomain: "uas-web-adf73.firebaseapp.com",
    projectId: "uas-web-adf73",
    storageBucket: "uas-web-adf73.firebasestorage.app",
    messagingSenderId: "647593802034",
    appId: "1:647593802034:web:3518264855ed6ca293ff2b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
