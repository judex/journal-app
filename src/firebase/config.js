// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCag-vpd5QCgpk0ZPpCBpIt5B4w0W_Hzy8",
  authDomain: "react-cursos-f9a07.firebaseapp.com",
  projectId: "react-cursos-f9a07",
  storageBucket: "react-cursos-f9a07.firebasestorage.app",
  messagingSenderId: "395509801189",
  appId: "1:395509801189:web:c69af7c0744bbd79ddb40c"
};

// Initialize Firebase
export const FirebaseApp= initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);