// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJwvsZjWL4ZfDkGWms6AIYjUE7kTOOqKs",
  authDomain: "trycode-ae812.firebaseapp.com",
  projectId: "trycode-ae812",
  storageBucket: "trycode-ae812.firebasestorage.app",
  messagingSenderId: "233247922681",
  appId: "1:233247922681:web:f6e162f886137ba49fc528",
  measurementId: "G-ZZ8FB3XPCB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider, signInWithPopup };