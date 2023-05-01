// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_17t_1PXDIMvHQWWI2lPnOKEfJ8cwTAg",
  authDomain: "a10-shef-recipe.firebaseapp.com",
  projectId: "a10-shef-recipe",
  storageBucket: "a10-shef-recipe.appspot.com",
  messagingSenderId: "134589463608",
  appId: "1:134589463608:web:153552666ccae31a4a3acd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;