
import {
    doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc, query, where, limit, updateDoc,
    not, arrayContains, onSnapshot, arrayUnion, FieldValue, serverTimestamp, Timestamp, arrayRemove
  } from "firebase/firestore";
  import { db } from "./config";
  import firebase from 'firebase/app';
  import 'firebase/firestore';

export const readAllAcceptedElders = async(volunUser,setAcceptedList)=>{

  const q = query(collection(db, "volunteerUsers"), where("fullname", "==", volunUser.fullname));

  await onSnapshot(q, (snapshot) => {
    let temp = []
    snapshot.forEach((doc) =>
      temp.push({ id: doc.id, ...doc.data() }));

    let getInvitedUsers = []
    let a3 = temp.flatMap((x) => { return x.requests })
    let check = a3.filter((follower) => follower.status == "accepted")
    if(check.length > 0){
      check.forEach((a) => {
        const docRef1 = doc(db, 'elderlyUsers', a.requestedBy);
        const docSnap1 = getDoc(docRef1);
        docSnap1.then((result) => {
          getInvitedUsers.push({id:result.id, ...result.data()})
          setAcceptedList(getInvitedUsers)
        }
        ).catch((error)=>console.log(error))
      })
    }
    else{
      setAcceptedList()
    }
  })

}

export const readAllPendingElders = async(volunUser,setAcceptedList)=>{

  const q = query(collection(db, "volunteerUsers"), where("fullname", "==", volunUser.fullname));

  await onSnapshot(q, (snapshot) => {
    let temp = []
    snapshot.forEach((doc) =>
      temp.push({ id: doc.id, ...doc.data() }));

    let getInvitedUsers = []
    let a3 = temp.flatMap((x) => { return x.requests })
    let check = a3.filter((follower) => follower.status == "pending")
    //console.log(check,"check");
    if(check.length > 0){
      check.forEach((a) => {
        const docRef1 = doc(db, 'elderlyUsers', a.requestedBy);
        const docSnap1 = getDoc(docRef1);
        docSnap1.then((result) => {
          getInvitedUsers.push({id:result.id, ...result.data()})
          setAcceptedList(getInvitedUsers)
        }
        ).catch((error)=>console.log(error))
      })
    }
    else{
      setAcceptedList()
    }
  })

}