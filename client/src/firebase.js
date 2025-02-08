// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2ea59.firebaseapp.com",
  projectId: "mern-auth-2ea59",
  storageBucket: "mern-auth-2ea59.firebasestorage.app",
  messagingSenderId: "708408452070",
  appId: "1:708408452070:web:0044e250fff3219c6f2c27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);