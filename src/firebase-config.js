
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDJSbHob0v4FnUyCLbAvFcO2V2X3HjfjwI",
  authDomain: "talkwithme-858a1.firebaseapp.com",
  projectId: "talkwithme-858a1",
  storageBucket: "talkwithme-858a1.appspot.com",
  messagingSenderId: "831946870043",
  appId: "1:831946870043:web:995b1638d370ea27e097be",
  measurementId: "G-MXG8B0T2L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider =new GoogleAuthProvider();
