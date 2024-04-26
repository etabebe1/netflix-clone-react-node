// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt3dUVVnQmw5SArUxNnxhDc5647jWhjco",
  authDomain: "netflix-clone-be65f.firebaseapp.com",
  projectId: "netflix-clone-be65f",
  storageBucket: "netflix-clone-be65f.appspot.com",
  messagingSenderId: "693905517663",
  appId: "1:693905517663:web:3debb65917019a1e413fea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
