// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //// import.meta.env.REACT_FIREBASE_API_KEY gizleme nasil olacak
  apiKey: "AIzaSyANWxc2v6mgubPyGkrWJefZ_ZQaJjM933I",
  authDomain: "mern-blog-c6db1.firebaseapp.com",
  projectId: "mern-blog-c6db1",
  storageBucket: "mern-blog-c6db1.appspot.com",
  messagingSenderId: "501887804547",
  appId: "1:501887804547:web:140e731bfc13dd5fd4a7b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);