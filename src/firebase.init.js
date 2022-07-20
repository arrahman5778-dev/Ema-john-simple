// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNt8LeFgIND-Enp-YcLrvAmoJW9ktn4-c",
  authDomain: "ema-john-simple-a283e.firebaseapp.com",
  projectId: "ema-john-simple-a283e",
  storageBucket: "ema-john-simple-a283e.appspot.com",
  messagingSenderId: "84993320136",
  appId: "1:84993320136:web:5c844315e804f623eab1fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
