// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz0rLEje8UzaMdUIwRUVys3Co8oTRQbBg",
  authDomain: "shrote-58b7f.firebaseapp.com",
  projectId: "shrote-58b7f",
  storageBucket: "shrote-58b7f.firebasestorage.app",
  messagingSenderId: "308704464307",
  appId: "1:308704464307:web:1eb2c66655cb3708974fc6",
  measurementId: "G-1GLEY2EMS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;