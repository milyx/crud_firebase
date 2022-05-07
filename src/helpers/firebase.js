import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDpImBR8VgSq6v5FaiUKk2MNf40f0boknU",
  authDomain: "desafio-crud-firebase.firebaseapp.com",
  projectId: "desafio-crud-firebase",
  storageBucket: "desafio-crud-firebase.appspot.com",
  messagingSenderId: "818878976694",
  appId: "1:818878976694:web:8586bcc102969912fe8c17",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
