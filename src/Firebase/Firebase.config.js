// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATvr0MXQo-EJp6Lq3R07iLEF5a9Fw-bcE",
  authDomain: "p-hero-job-task.firebaseapp.com",
  projectId: "p-hero-job-task",
  storageBucket: "p-hero-job-task.appspot.com",
  messagingSenderId: "84239900845",
  appId: "1:84239900845:web:c340ba6627c9b207c9e624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;