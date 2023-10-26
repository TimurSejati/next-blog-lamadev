// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "appdev-402914.firebaseapp.com",
  projectId: "appdev-402914",
  storageBucket: "appdev-402914.appspot.com",
  messagingSenderId: "393169168738",
  appId: "1:393169168738:web:62416544bcaf92773c643b",
  measurementId: "G-CVK6RGRBGZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
