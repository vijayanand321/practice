// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXSVkJTRuHn3ZodXm_buGvoBLoaO12KwE",
  authDomain: "auth-9ac69.firebaseapp.com",
  projectId: "auth-9ac69",
  storageBucket: "auth-9ac69.appspot.com",
  messagingSenderId: "171470904771",
  appId: "1:171470904771:web:0b6de314b044016f5d7176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export { auth };
export default app;


