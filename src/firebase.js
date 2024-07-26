import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAtjEDfeP0OXkmX2Ofyvssnno2ZBcusIrA",
  authDomain: "food-1ec3f.firebaseapp.com",
  projectId: "food-1ec3f",
  storageBucket: "food-1ec3f.appspot.com",
  messagingSenderId: "382920070563",
  appId: "1:382920070563:web:09bf43bd43cd7358547616",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const GoogleAuthProvider = new GoogleAuthProvider();
export { app };
