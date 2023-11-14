import {getFirestore}  from 'firebase/firestore'
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)