// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9k9tvu0dkgaX8IrJl-wXLvd2dQZeuvjU",
  authDomain: "echocompanions.firebaseapp.com",
  projectId: "echocompanions",
  storageBucket: "echocompanions.appspot.com",
  messagingSenderId: "872152132164",
  appId: "1:872152132164:web:87ae1c4810545380fbea11",
  measurementId: "G-PFVYW6RMD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
