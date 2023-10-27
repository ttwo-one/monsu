import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmNQAWjSjT2AoIjlf8_7v_vgl40FKt6kc",
  authDomain: "monsu-7a532.firebaseapp.com",
  projectId: "monsu-7a532",
  storageBucket: "monsu-7a532.appspot.com",
  messagingSenderId: "992622294280",
  appId: "1:992622294280:web:6c6abbf3b46278eee328bd",
  measurementId: "G-0JC8THXQQP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export default app;
