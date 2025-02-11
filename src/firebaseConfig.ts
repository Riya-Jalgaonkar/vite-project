import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaGcICBVHuMtiV9-rIVKLtxSgSIj9tVxI",
  authDomain: "nutrionist-website.firebaseapp.com",
  projectId: "nutrionist-website",
  storageBucket: "nutrionist-website.firebasestorage.app",
  messagingSenderId: "242930510575",
  appId: "1:242930510575:web:5b200d176dc9681407891a",
  measurementId: "G-XBDVZWXQ8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
