
import { doc, setDoc, getDocs,getDoc, collection, deleteDoc, addDoc,query,where, limit } from "firebase/firestore";
import { db } from "./config";


export const readUser = async (userID,collection1,collection2,setElderUser,setVolunteerUser) => {
  const docRef1 = doc(db,collection1, userID);
  const docSnap1 = await getDoc(docRef1);

  const docRef2 = doc(db,collection2, userID);
  const docSnap2 = await getDoc(docRef2);

  if (docSnap1.exists()) {
    setElderUser({id: userID, ...docSnap1.data()})
  } 
  else if (docSnap2.exists()) {
    setVolunteerUser({id: userID, ...docSnap2.data()})
  }  
  else {
  // doc.data() will be undefined in this case
  console.log("No such User!");
  }
  }


  export const readAllElderUsers = async (name,setSuggestions) => {
    const q = query(collection(db, "elderlyUsers"), where("fullname", "!=", name));
    const docs = await getDocs(q);
    let temp = []
    docs.forEach((doc) => temp.push({id: doc.id, ...doc.data()}));
    setSuggestions(temp)
  }

  export const readAllAvailableVolunteers = async (searchquery,setVolunteers) => {
    const q = query(collection(db, "volunteerUsers"), where("status", "==", searchquery));
    const docs = await getDocs(q);
    let temp = []
    docs.forEach((doc) => temp.push({id: doc.id, ...doc.data()}));
    setVolunteers(temp)
  }

  export const readAllRequesteedVolunteers = async (searchquery,setVolunteers) => {
    const q = query(collection(db, "volunteerUsers"), where("status", "==", searchquery));
    const docs = await getDocs(q);
    let temp = []
    docs.forEach((doc) => temp.push({id: doc.id, ...doc.data()}));
    setVolunteers(temp)
  }
  

  export const readTwoElderUsers = async (name,setSuggestions) => {
    const q = query(collection(db, "elderlyUsers"), where("fullname", "!=", name),limit(2));
    const docs = await getDocs(q);
    let temp = []
    docs.forEach((doc) => temp.push({id: doc.id, ...doc.data()}));
    setSuggestions(temp)
  }
    
    
  