// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYLIomjtCI5HVOvXtX8f5y8Qsx8NRZcMk",
  authDomain: "react-dragon-auth-news.firebaseapp.com",
  projectId: "react-dragon-auth-news",
  storageBucket: "react-dragon-auth-news.appspot.com",
  messagingSenderId: "1093353487056",
  appId: "1:1093353487056:web:d3d829151375e25bcd3cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;