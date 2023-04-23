// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrdTHdy91sqMSX0nLpSLBJw_MVC2D2mPs",
  authDomain: "ecommerece-auth.firebaseapp.com",
  projectId: "ecommerece-auth",
  storageBucket: "ecommerece-auth.appspot.com",
  messagingSenderId: "696932025610",
  appId: "1:696932025610:web:fa456ee135f6596a2fa6f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;