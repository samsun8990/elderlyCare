
import { doc, setDoc, getDocs,getDoc, collection, deleteDoc, addDoc } from "firebase/firestore";
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


  const readAllElderUsers = async (name,setSuggestions) => {
    const q = query(collection(db, "elderlyUsers"), where("fullname", "!=", name));
    const docs = await getDocs(q);
    docs.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    setSuggestions({id: doc.id, ...docSnap1.data()})
    });
    }
    
  