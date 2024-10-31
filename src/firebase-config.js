
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
