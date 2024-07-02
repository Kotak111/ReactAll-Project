
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyDFed6JlWSWJ_4QvZ6zdsZX8ncqCY_tC70",
  authDomain: "fir-65452.firebaseapp.com",
  projectId: "fir-65452",
  storageBucket: "fir-65452.appspot.com",
  messagingSenderId: "651310521263",
  appId: "1:651310521263:web:bafe0eb370e5e90f68ad5a"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth=getAuth(app)
export {db , auth}