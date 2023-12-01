
import {
  doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc, query, where, limit, updateDoc,
  not, arrayContains, onSnapshot, arrayUnion, FieldValue, serverTimestamp, Timestamp, arrayRemove
} from "firebase/firestore";
import { db } from "./config";
import firebase from 'firebase/app';
import 'firebase/firestore';

export const readAllElders = (setCallback) => {
  const unsubscribe = onSnapshot(collection(db, "elderlyUsers"), (snapshot) => {
      setCallback(snapshot.docs.map((doc)=>{return { id: doc.id, ...doc.data() }}))
  });
  // Return the unsubscribe function to detach the listener when needed
  return unsubscribe;

};


export const readUser = async (userID, collection1, collection2, setElderUser, setVolunteerUser) => {
  const docRef1 = doc(db, collection1, userID);
  const docSnap1 = await getDoc(docRef1);

  const docRef2 = doc(db, collection2, userID);
  const docSnap2 = await getDoc(docRef2);

  if (docSnap1.exists()) {
    setElderUser({ id: userID, ...docSnap1.data() })
  }
  else if (docSnap2.exists()) {
    setVolunteerUser({ id: userID, ...docSnap2.data() })
  }
  else {
    // doc.data() will be undefined in this case
    console.log("No such User!");
  }
}


export const readAllOtherElderUsers = async (name, setSuggestions) => {
  const q = query(collection(db, "elderlyUsers"), where("fullname", "!=", name));

  onSnapshot(q, (snapshot) => {
    let temp = []
    snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
    setSuggestions(temp)
  })
}

export const readAllAvailableVolunteers = async (searchquery, setVolunteers) => {
  const q = query(collection(db, "volunteerUsers"), where("status", "==", searchquery));

  onSnapshot(q, (snapshot) => {
    let temp = []
    snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
    setVolunteers(temp)
  })
}
export const updatedVolunteerStatus = async () => {
 
}



export const readAllRequesteedVolunteers = async (searchquery, setVolunteers) => {
  const q = query(collection(db, "volunteerUsers"), where("status", "==", searchquery));
  const docs = await getDocs(q);
  let temp = []
  docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
  setVolunteers(temp)
}


export const readTwoElderUsers = async (name, setSuggestions) => {
  const q = query(collection(db, "elderlyUsers"), where("fullname", "!=", name), limit(2));
  const docs = await getDocs(q);
  let temp = []
  docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
  setSuggestions(temp)
}


export const getUsersNotFollowedByCurrentUser = async (currentUser, setSuggestionList) => {
  const elderlyUsersCollectionRef = collection(db, 'elderlyUsers');
  try {
    onSnapshot(elderlyUsersCollectionRef, (querySnapshot) => {
      let temp = []
      querySnapshot.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));
      const usersNotFollowed = temp.filter((user) => user.id !== currentUser.id && currentUser.following && !currentUser.following.includes(user.id))
      if (usersNotFollowed && usersNotFollowed.length > 0) {
        setSuggestionList(usersNotFollowed)
      }
      else {
        setSuggestionList()
      }

    })
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export const connectUser = async (elderUser, follow) => {
  const followCurrentUserRef = doc(db, 'elderlyUsers', elderUser.id);
  const updateFollowOtherUserRef = doc(db, 'elderlyUsers', follow.id);

  setDoc(followCurrentUserRef, {
    following: arrayUnion({ id: follow.id, status: "requested", createdAt: new Date() })
  }, { merge: true }).then(() => console.log("Data updated"))

  setDoc(updateFollowOtherUserRef, {
    followers: arrayUnion({ id: elderUser.id, status: "requested", createdAt: new Date() })
  }, { merge: true }).then(() => console.log("Data updated"))

}


export const acceptUserInvitation = async (elderUser, invitation) => {
  const updateFollowOtherUserRef = doc(db, 'elderlyUsers', elderUser.id);
  const acceptCurrentUserRef = doc(db, 'elderlyUsers', invitation.id);

  await updateDoc(acceptCurrentUserRef, {
    followers: arrayUnion({ id: elderUser.id, status: "accepted", updatedAt: Timestamp.fromDate(new Date()) })
  }, { merge: true })
    .then(() => console.log("Data Updated"))
    .catch((error) => console.error('Error updating document:', error));

  await updateDoc(updateFollowOtherUserRef, {
    following: arrayUnion({ id: invitation.id, status: "accepted", updatedAt: Timestamp.fromDate(new Date()) })
  }, { merge: true })
    .then(() => console.log("Data Updated"))
    .catch((error) => console.error('Error updating document:', error));

}


export const getAcceptedUsersForCurrentUsers = async (elderUser, setAcceptedList) => {
  try {

    const q = query(collection(db, "elderlyUsers"), where("fullname", "==", elderUser.fullname));


    await onSnapshot(q, (snapshot) => {
      let temp = []
      snapshot.forEach((doc) =>temp.push({ id: doc.id, ...doc.data() }) )
  
      let getInvitedUsers = []
   
      let a3 = temp.flatMap((x) => { return x.following })
      let check = a3.filter((follower) => follower.status === "accepted")
   if(check > 0){
    check.forEach((a) => {
      const docRef1 = doc(db, 'elderlyUsers', a.id);
      const docSnap1 = getDoc(docRef1);
      docSnap1.then((result) => {
        //console.log(result.data());
        getInvitedUsers.push({id:a.id,...result.data()})
        //console.log(getInvitedUsers,"getacceptedUsers");
        setAcceptedList(getInvitedUsers)
      }
      ).catch((error)=>console.log(error))
    })
   }
   else{
    setAcceptedList()
   }
    
       
      
    })

  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export const getInvitations = async (elderUser, setinvitation) => {

  const q = query(collection(db, "elderlyUsers"), where("fullname", "==", elderUser.fullname));


  await onSnapshot(q, (snapshot) => {
    let temp = []
    snapshot.forEach((doc) =>
      temp.push({ id: doc.id, ...doc.data() }));

    let getInvitedUsers = []
    let a3 = check.flatMap((x) => { return x.followers })
    let check = a3.filter((follower) => follower.status === "requested")
    if (check.length > 0) {
  
      check.forEach((a) => {
        const docRef1 = doc(db, 'elderlyUsers', a.id);
        const docSnap1 = getDoc(docRef1);
        docSnap1.then((result) => {
          getInvitedUsers.push({id:result.id, ...result.data()})
          setinvitation(getInvitedUsers)
        }
        ).catch((error)=>console.log(error))
      })
     
    }
    else {
      setinvitation()
    }
  })
}

export const findCreatedAt = (id,follow)=>{

  const x = follow.map((follower) => follower.createdAt)
  //console.log(x,"X");

}

export const viewAcceptedVolunteersByElder=async(elderUser,setAcceptedList)=>{
  try {

    const q = query(collection(db, "elderlyUsers"), where("fullname", "==", elderUser.fullname));


    await onSnapshot(q, (snapshot) => {
      let temp = []
      snapshot.forEach((doc) =>temp.push({ id: doc.id, ...doc.data() }) )
  
      let getInvitedUsers = []
      let a3 = checkElders.flatMap((x) => { return x.volunteers })
      let checkElders = a3.filter((vol) => vol.status === "accepted")
      if (checkElders.length > 0) {
        
        checkElders.forEach((a) => {
          const docRef1 = doc(db, 'volunteerUsers', a.id);
          const docSnap1 = getDoc(docRef1);
          docSnap1.then((result) => {
            getInvitedUsers.push(result.data())
            //console.log(getInvitedUsers,"getacceptedUsers");
            setAcceptedList(getInvitedUsers)
          }
          ).catch((error)=>console.log(error))
        })
       
      }
      else {
        setAcceptedList()
      }
    })


  } catch (error) {
    console.error('Error fetching users:', error);
  }
} 

export const removeRequestById = async (elderUser,inviteuser) => {

  const userRef = doc(db, 'elderlyUsers', elderUser.id);
  const inviteUserRef = doc(db, 'elderlyUsers', inviteuser.id)
  try {
    await updateDoc(userRef, {
      followers: arrayRemove(inviteuser.id)
    },{ merge: true });
    await updateDoc(inviteUserRef, {
      following: arrayRemove(elderUser.id)
    },{ merge: true });
    console.log('Request removed successfully.');
  } catch (error) {
    console.error('Error removing request:', error);
  }
};