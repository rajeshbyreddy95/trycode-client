// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, onValue, update, increment, set, get } from "firebase/database"; // ✅ add these

const firebaseConfig = {
  apiKey: "AIzaSyCJwvsZjWL4ZfDkGWms6AIYjUE7kTOOqKs",
  authDomain: "trycode-ae812.firebaseapp.com",
  projectId: "trycode-ae812",
  storageBucket: "trycode-ae812.appspot.com", // ✅ fixed domain (was .app, should be .appspot.com)
  messagingSenderId: "233247922681",
  appId: "1:233247922681:web:f6e162f886137ba49fc528",
  measurementId: "G-ZZ8FB3XPCB",

  databaseURL: "https://trycode-ae812-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getDatabase(app); // ✅ add this

export {
  app,
  analytics,
  auth,
  googleProvider,
  signInWithPopup,
  db,
  ref,
  onValue,
  update,
  increment,
  set,
  get,
};
