import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdXWD2OISd-Mjsin0aGZzCPzjB0kXgqjc",
  authDomain: "marsweb-3818a.firebaseapp.com",
  projectId: "marsweb-3818a",
  storageBucket: "marsweb-3818a.firebasestorage.app",
  messagingSenderId: "951842861602",
  appId: "1:951842861602:web:5aa6de1c95fa341f36907b",
  measurementId: "G-BNX90WM9MF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { db , auth };
