
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyBYd9KpQo3n3V84Yvd731Ital0n6g9irbo",
  authDomain: "a-27-register.firebaseapp.com",
  projectId: "a-27-register",
  storageBucket: "a-27-register.appspot.com",
  messagingSenderId: "182456521980",
  appId: "1:182456521980:web:5bda4b5330f403234e7379",
  measurementId: "G-G77G3J25D1"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)