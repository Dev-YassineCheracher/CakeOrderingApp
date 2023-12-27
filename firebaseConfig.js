// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3J2xUOsPFPy36aMITv0mHGI6OC_2Zzs4",
  authDomain: "hanisugarart-e8ea0.firebaseapp.com",
  databaseURL: "https://hanisugarart-e8ea0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hanisugarart-e8ea0",
  storageBucket: "hanisugarart-e8ea0.appspot.com",
  messagingSenderId: "168176741529",
  appId: "1:168176741529:web:1c26290f8c78c908919c08",
  measurementId: "G-E3DE845S3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);
const UserWithEmailAndPassword = createUserWithEmailAndPassword(app);
const db = getFirestore(app);

export { app, database, auth, db, UserWithEmailAndPassword};
