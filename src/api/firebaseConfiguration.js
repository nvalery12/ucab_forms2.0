import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6fVrI4RIZjDyeA6ErptqMv6FLeg6isew",
  authDomain: "ucab-form.firebaseapp.com",
  projectId: "ucab-form",
  storageBucket: "ucab-form.appspot.com",
  messagingSenderId: "53722177307",
  appId: "1:53722177307:web:5caa154a5c5f3fadd8fdbe",
  measurementId: "G-X4CM7QHZHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, storage };