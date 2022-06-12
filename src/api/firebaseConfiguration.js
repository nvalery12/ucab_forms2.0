import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

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
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}