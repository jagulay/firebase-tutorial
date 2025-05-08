// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf9aZJvNSSSxsUAEzxXbyeOgfUc4Da9rE",
  authDomain: "fir-tutorial-87bb1.firebaseapp.com",
  projectId: "fir-tutorial-87bb1",
  storageBucket: "fir-tutorial-87bb1.firebasestorage.app",
  messagingSenderId: "446160405477",
  appId: "1:446160405477:web:611c85ec310b2d2140a50c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();