import {getFirestore}  from 'firebase/firestore'
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyChXmGiQhnDxTnmKzsRRnAChZDinSeeeNU",
  authDomain: "eldercare-c84c1.firebaseapp.com",
  projectId: "eldercare-c84c1",
  storageBucket: "eldercare-c84c1.appspot.com",
  messagingSenderId: "798468538732",
  appId: "1:798468538732:web:5c5cb051c108c05115f349"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)