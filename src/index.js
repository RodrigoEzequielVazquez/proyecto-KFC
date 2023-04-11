import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpiLBp6Hlxuk8QDmKh0LNuBkfrBdLM-U",
  authDomain: "proyecto-kfc.firebaseapp.com",
  projectId: "proyecto-kfc",
  storageBucket: "proyecto-kfc.appspot.com",
  messagingSenderId: "590162166288",
  appId: "1:590162166288:web:152f4bfbf629e385b40095"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


