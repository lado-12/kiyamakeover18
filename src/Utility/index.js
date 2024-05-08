// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAYI8ZsZcKMLz5O7k7--ULNtaZIOWxZaw",
  authDomain: "kiyamakeover18.firebaseapp.com",
  projectId: "kiyamakeover18",
  storageBucket: "kiyamakeover18.appspot.com",
  messagingSenderId: "865876359606",
  appId: "1:865876359606:web:d19166ea47a0ae3104a917",
  measurementId: "G-TV6NVXJLW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);