
import {
  doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc, query, where, limit, updateDoc,
  not, arrayContains, onSnapshot, arrayUnion
} from "firebase/firestore";
import { db } from "./config";
import firebase from 'firebase/app';
import 'firebase/firestore';


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


export const readAllElderUsers = async (name, setSuggestions) => {
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
      const usersNotFollowed = temp.filter((user) => user.id !== currentUser.id && !currentUser.following.includes(user.id))
      setSuggestionList(usersNotFollowed)
    })
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export const connectUser = async (elderUser, follow) => {
  const followCurrentUserRef = doc(db, 'elderlyUsers', elderUser.id);
  const updateFollowOtherUserRef = doc(db, 'elderlyUsers', follow.id);

  await onSnapshot(followCurrentUserRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      updateDoc(followCurrentUserRef, {
        following: arrayUnion({ id: follow.id, status: "requested" })
      }, { merge: true })
        .then(() => console.log("Data Updated"))
        .catch((error) => console.error('Error updating document:', error));
    } else {
      console.log('Document does not exist');
    }
  })
  await onSnapshot(followCurrentUserRef, (docSnapshot) => {
    if (docSnapshot.exists()) {

      updateDoc(updateFollowOtherUserRef, { followers: arrayUnion({ id: elderUser.id, status: "requested" }) }, { merge: true })
        .then(() => console.log("Data Updated"))
        .catch((error) => console.error('Error updating document:', error));
    } else {
      console.log('Document does not exist');
    }
  })
}


// Function to fetch users with followers having 'status' as 'requested'
export const getUsersInvitation = async (elderUser, setInvitationList) => {
  try {
    const usersCollectionRef = doc(db, 'elderlyUsers', elderUser.id);

    await onSnapshot(usersCollectionRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const usersWithRequestedFollowers = [];
        docSnapshot.docs.forEach((doc) => {
          const userData = doc.data();
          // Check if the user has 'followers' array and if any follower has 'status' as 'requested'
          if (userData.followers && userData.followers.some((follower) => follower.status === 'requested')) {
            usersWithRequestedFollowers.push(userData);
          }
        });
        console.log('Users with followers having status as requested:', usersWithRequestedFollowers);
        setInvitationList(usersWithRequestedFollowers)
        //return usersWithRequestedFollowers;

      } else {
        console.log('Document does not exist');
      }
    })

  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
