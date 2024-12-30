// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvnfAi5-lI0Kv8lny2TElJA7pVXcC7UHk",
  authDomain: "shrote-7992d.firebaseapp.com",
  projectId: "shrote-7992d",
  storageBucket: "shrote-7992d.firebasestorage.app",
  messagingSenderId: "756698956212",
  appId: "1:756698956212:web:781a9ec81803c9fe0b32e1",
  measurementId: "G-V2RP79N0H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;