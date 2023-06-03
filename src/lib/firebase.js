// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdbYs5RUbBzGr0yjuiI7hqOtPBz9L1Az0",
  authDomain: "parkingsystem-ed46a.firebaseapp.com",
  databaseURL: "https://parkingsystem-ed46a-default-rtdb.firebaseio.com",
  projectId: "parkingsystem-ed46a",
  storageBucket: "parkingsystem-ed46a.appspot.com",
  messagingSenderId: "763520658705",
  appId: "1:763520658705:web:cfffddc5d305fcc8d7b0b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, app };
