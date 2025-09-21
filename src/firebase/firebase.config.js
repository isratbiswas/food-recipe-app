// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMHM6qkr9ccoN0uKafIYdK6qMl6LgjQJk",
  authDomain: "food-app-66d90.firebaseapp.com",
  projectId: "food-app-66d90",
  storageBucket: "food-app-66d90.firebasestorage.app",
  messagingSenderId: "947343892589",
  appId: "1:947343892589:web:07f3b9047405ac080f5f64",
  measurementId: "G-KNMTPWZJG3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
