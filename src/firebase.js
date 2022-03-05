import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAQLLxIrps24hqQoPtAHTbzW5nm5JkyMek",
  authDomain: "davids-drinkar.firebaseapp.com",
  databaseURL: "https://davids-drinkar-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "davids-drinkar",
  storageBucket: "davids-drinkar.appspot.com",
  messagingSenderId: "293151496748",
  appId: "1:293151496748:web:1b6032c8aaa67d1ded0f89",
  measurementId: "G-H8XHD65VYC"
};

export const app = initializeApp(firebaseConfig);


