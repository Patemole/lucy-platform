/*
// Import the functions you need from the SDKs you need
// src/auth/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlJxNYHTyLvBnJMh6dyR6jtG6_LlgjplI",
  authDomain: "lucy-b4f20.firebaseapp.com",
  projectId: "lucy-b4f20",
  storageBucket: "lucy-b4f20.appspot.com",
  messagingSenderId: "150813727745",
  appId: "1:150813727745:web:773c421d9c3addc4e13400",
  measurementId: "G-LMS96M3V86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
*/


//NOUVELLE VERSION DE FIREBASE SUR GREGORY.HISSIGER@MY-LUCY.COM
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8MX9USh7XKg3XZwANkOWsb94TM-tWRMQ",
  authDomain: "lucy-b4f20-2.firebaseapp.com",
  projectId: "lucy-b4f20-2",
  storageBucket: "lucy-b4f20-2.appspot.com",
  messagingSenderId: "548535035681",
  appId: "1:548535035681:web:5d3b80afeb8a3bd324c060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;