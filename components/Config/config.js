

import { initializeApp } from 'firebase/app';
import {initializeAuth, getAuth,getReactNativePersistence, updatePassword, reauthenticateWithCredential, EmailAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from "firebase/storage";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAAse_dhc_AuRtbkIiF5KoAZZc4j_rMU8U",
  authDomain: "eldercare-d95b6.firebaseapp.com",
  projectId: "eldercare-d95b6",
  storageBucket: "eldercare-d95b6.appspot.com",
  messagingSenderId: "552504195827",
  appId: "1:552504195827:web:7e03b0688e623c1c365586"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app)
const auth = getAuth(app)
export const storage = getStorage(app)

const databs = getDatabase()


export {auth,app,databs}