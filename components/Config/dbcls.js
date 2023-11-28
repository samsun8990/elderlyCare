
import {
  doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc, query, where, limit, updateDoc,
  not, arrayContains, onSnapshot, arrayUnion, FieldValue
} from "firebase/firestore";
import { db } from "./config";
import firebase from 'firebase/app';
import 'firebase/firestore';
import ElderlyRegister from "../Pages/StartPage/Register/ElderlyRegister";


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

  await onSnapshot(followCurrentUserRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      updateDoc(followCurrentUserRef, {
        following: arrayUnion({ id: follow.id, status: "requested", createdAt: FieldValue.serverTimestamp() })
      }, { merge: true })
        .then(() => console.log("Data Updated"))
        .catch((error) => console.error('Error updating document:', error));
    } else {
      console.log('Document does not exist');
    }
  })
  await onSnapshot(followCurrentUserRef, (docSnapshot) => {
    if (docSnapshot.exists()) {

      updateDoc(updateFollowOtherUserRef, {
        followers: arrayUnion({ id: elderUser.id, status: "requested", createdAt: FieldValue.serverTimestamp() })
      }, { merge: true })
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

    const q = query(collection(db, "elderlyUsers"), where("fullname", "==", elderUser.fullname));

    await onSnapshot(q, (snapshot) => {
      let temp = []
      snapshot.forEach((doc) =>
        temp.push({ id: doc.id, ...doc.data() }));
      let check = temp.filter((user) => user.followers && user.followers.map((follower) => {
        //console.log(follower, "follower");
        if (follower.status === "requested") {
          console.log(follower);
          fetchFollowersDetails(follower.id, setInvitationList)
        }
        else {
          setInvitationList()
        }
      }))
      if (!check) {
        setInvitationList()
      }

    })

    // Function to fetch followers' details
    const fetchFollowersDetails = async (userId, setInvitationList) => {
      try {
        const docRef1 = doc(db, 'elderlyUsers', userId);
        const docSnap1 = await getDoc(docRef1);
        let temp = []
        temp.push({ id: docSnap1.id, ...docSnap1.data() })
        return setInvitationList(temp)

      } catch (error) {
        console.error('Error fetching followers:', error);
        return [];
      }
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// export const acceptUserInvitation = async (elderUser, invitation) => {
//   const followCurrentUserRef = doc(db, 'elderlyUsers', elderUser.id);
//   const updateFollowOtherUserRef = doc(db, 'elderlyUsers', invitation.id);

//   await onSnapshot(followCurrentUserRef, (docSnapshot) => {
//     if (docSnapshot.exists()) {
//       updateDoc(followCurrentUserRef, {
//         following: arrayUnion({ id: invitation.id, status: "requested", createdAt: FieldValue.serverTimestamp() })
//       }, { merge: true })
//         .then(() => console.log("Data Updated"))
//         .catch((error) => console.error('Error updating document:', error));
//     } else {
//       console.log('Document does not exist');
//     }
//   })
//   await onSnapshot(followCurrentUserRef, (docSnapshot) => {
//     if (docSnapshot.exists()) {

//       updateDoc(updateFollowOtherUserRef, {
//         followers: arrayUnion({ id: elderUser.id, status: "requested", createdAt: FieldValue.serverTimestamp() })
//       }, { merge: true })
//         .then(() => console.log("Data Updated"))
//         .catch((error) => console.error('Error updating document:', error));
//     } else {
//       console.log('Document does not exist');
//     }
//   })
// }

export const getAllAcceptedUers = () => {

}