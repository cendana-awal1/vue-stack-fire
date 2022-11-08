
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBphQsqGS7s9wwv4tgkuZosShX7ZgY51VY",
  authDomain: "vue-stack-ea587.firebaseapp.com",
  projectId: "vue-stack-ea587",
  storageBucket: "vue-stack-ea587.appspot.com",
  messagingSenderId: "473742173336",
  appId: "1:473742173336:web:7cc20ff018fcababb39ced"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default db;
