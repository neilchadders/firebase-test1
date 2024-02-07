
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth" // import this metod then beow it is exported and
              //and called withnapp as parameter



const firebaseConfig = {
  apiKey: "AIzaSyCKrOHIk0qhXURlb9zx8DtzdBlRijgr8ro",
  authDomain: "fir-test1-223ad.firebaseapp.com",
  projectId: "fir-test1-223ad",
  storageBucket: "fir-test1-223ad.appspot.com",
  messagingSenderId: "953236230989",
  appId: "1:953236230989:web:742a1961f66891afb01d04",
  measurementId: "G-7W7M37S0D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app) // remember to export and add app as parameter

export const googleProvider = new GoogleAuthProvider()