import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAl69swabvVS-X-45Ehy4hGLmVEVzKYTMw",
  authDomain: "ecommerce-26cfc.firebaseapp.com",
  projectId: "ecommerce-26cfc",
  storageBucket: "ecommerce-26cfc.appspot.com",
  messagingSenderId: "1001479132757",
  appId: "1:1001479132757:web:aa855690eed262705166dc",
  measurementId: "G-QR15BRFCTJ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)