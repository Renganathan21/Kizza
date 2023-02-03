import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSjidESRpp8BaV-iA5Z9N3CfYqQ5P38T8",
  authDomain: "restaurantapp-4e4a7.firebaseapp.com",
  databaseURL: "https://restaurantapp-4e4a7-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-4e4a7",
  storageBucket: "restaurantapp-4e4a7.appspot.com",
  messagingSenderId: "793797264282",
  appId: "1:793797264282:web:483f95b4fbb14007703023"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };