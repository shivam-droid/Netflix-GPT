// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtvB08RNTYiEhT45i3_4dN6jpN5q0QYWU",
  authDomain: "netflix-gpt-c1543.firebaseapp.com",
  projectId: "netflix-gpt-c1543",
  storageBucket: "netflix-gpt-c1543.firebasestorage.app",
  messagingSenderId: "483052066587",
  appId: "1:483052066587:web:500ff77dceb8bcd0e0e5be",
  measurementId: "G-2EP8B0MVFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();