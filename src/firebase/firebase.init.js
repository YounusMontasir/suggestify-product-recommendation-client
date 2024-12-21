// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcp1AQ_mWB3th9jFmI0BkIcFiJAnMmqOo",
  authDomain: "product-recommendation-a9fbe.firebaseapp.com",
  projectId: "product-recommendation-a9fbe",
  storageBucket: "product-recommendation-a9fbe.firebasestorage.app",
  messagingSenderId: "565705635146",
  appId: "1:565705635146:web:51ce56d6f11c344f327db3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);