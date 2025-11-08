// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // for database
import { getAuth } from "firebase/auth"; // for authentication

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKXOkMySadCSlNnpqsAM433__Sv95-yLE",
  authDomain: "fashion-fit-ec41c.firebaseapp.com",
  projectId: "fashion-fit-ec41c",
  storageBucket: "fashion-fit-ec41c.firebasestorage.app",
  messagingSenderId: "1067723069083",
  appId: "1:1067723069083:web:141c63857e224bcef3d83e",
  measurementId: "G-2C5D3XFVFH",
  databaseURL : "https://console.firebase.google.com/u/0/project/fashion-fit-ec41c/database/fashion-fit-ec41c-default-rtdb/data/~2F"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;