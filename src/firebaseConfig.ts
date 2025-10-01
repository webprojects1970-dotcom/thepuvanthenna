// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOwuw7TkMaC096pXN_s4bLqJ88u-FxQaQ",
  authDomain: "thepuvanthennavilla.firebaseapp.com",
  projectId: "thepuvanthennavilla",
  storageBucket: "thepuvanthennavilla.firebasestorage.app",
  messagingSenderId: "497800264717",
  appId: "1:497800264717:web:47c8bb334b2ed595192944",
  measurementId: "G-6PQY65ZLXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);