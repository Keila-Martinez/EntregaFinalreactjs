import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpbnLUeAPv_i-PZNHPLpygXbZtHsQ_O4w",
    authDomain: "rinita-petshop.firebaseapp.com",
    projectId: "rinita-petshop",
    storageBucket: "rinita-petshop.appspot.com",
    messagingSenderId: "435939132140",
    appId: "1:435939132140:web:cee91c8205806d01875bc9"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);