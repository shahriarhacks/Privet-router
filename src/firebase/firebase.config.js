// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkB6texQpYOkXdSJjNDyv1_anP9skLMUA",
    authDomain: "auth-privetrouter-context.firebaseapp.com",
    projectId: "auth-privetrouter-context",
    storageBucket: "auth-privetrouter-context.appspot.com",
    messagingSenderId: "97516213604",
    appId: "1:97516213604:web:772d37170d2ffdc3999671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;