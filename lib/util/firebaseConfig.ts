// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from 'dotenv'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vibe-chat-9a724.firebaseapp.com",
  projectId: "vibe-chat-9a724",
  storageBucket: "vibe-chat-9a724.appspot.com",
  messagingSenderId: "1065916851031",
  appId: "1:1065916851031:web:b23b40703109d762479412",
  measurementId: "G-7BZED2M8TB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);