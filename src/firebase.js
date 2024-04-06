import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  databaseURL:
    "https://nanny-service-ca4c5-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "AIzaSyBjXIZE7QEdJlQdMSzl9uB1h5_b_vjDf6k",
  authDomain: "nanny-service-ca4c5.firebaseapp.com",
  projectId: "nanny-service-ca4c5",
  storageBucket: "nanny-service-ca4c5.appspot.com",
  messagingSenderId: "65354846754",
  appId: "1:65354846754:web:d23ef1b67b51607f26b07b",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
