
import {
  doc, setDoc, getDocs, getDoc, collection, deleteDoc, addDoc, query, where, limit, updateDoc,
  not, arrayContains, onSnapshot, arrayUnion, FieldValue, serverTimestamp, Timestamp, arrayRemove
} from "firebase/firestore";
import { auth, db } from "./config";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";

export const readAllElders = (setCallback) => {
  const unsubscribe = onSnapshot(collection(db, "elderlyUsers"), (snapshot) => {
    setCallback(snapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } }))
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

  const userRef = doc(db, 'elderlyUsers', elderUser.id);
  
  const userDoc = await getDoc(userRef)
  const currentVolunteers = userDoc.data().volunteers || []

  setData(currentVolunteers)

}


export const getUserProfileDetails = async (userID,setProfile) => {

  
  const docRef1 = doc(db, "elderlyUsers", userID);
  const docSnap1 = await getDoc(docRef1);

  const docRef2 = doc(db, "volunteerUsers", userID);
  const docSnap2 = await getDoc(docRef2);

  if (docSnap1.exists()) {
    setProfile({ id: userID, ...docSnap1.data() })
  }
  else if (docSnap2.exists()) {
    setProfile({ id: userID, ...docSnap2.data() })
  }

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
      const usersNotFollowed = temp.filter((user) => user.id !== currentUser.id &&
      (!currentUser.following || !currentUser.following.includes(user.id))
      //currentUser.following && !currentUser.following.includes(user.id)
      )
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

  await setDoc(acceptCurrentUserRef, {
    followers: arrayUnion({ id: elderUser.id, status: "accepted" })
  }, { merge: true })
    .then(() => console.log("Data Updated"))
    .catch((error) => console.error('Error updating document:', error));

  await setDoc(updateFollowOtherUserRef, {
    following: arrayUnion({ id: invitation.id, status: "accepted" })
  }, { merge: true })
    .then(() => console.log("Data Updated"))
    .catch((error) => console.error('Error updating document:', error));

}


export const getAcceptedUsersForCurrentUsers = async (elderUser, setAcceptedList) => {
  try {

    const q = query(collection(db, "elderlyUsers"), where("fullname", "==", elderUser.fullname));


    await onSnapshot(q, (snapshot) => {
      let temp = []
      snapshot.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }))
      let getInvitedUsers = []
      let a3 = temp.flatMap((x) => { return x.following && x.following })
      if (a3.length > 0) {

        let check = a3.filter((follower) => follower && follower.status === "accepted")
        if (check.length > 0) {
          check.forEach(a => {
            const docRef1 = doc(db, 'elderlyUsers', a.id);
            const docSnap1 = getDoc(docRef1);
            docSnap1.then((result) => {
              //console.log(result.data());
              getInvitedUsers.push({ id: a.id, ...result.data() })
              //console.log(getInvitedUsers,"getacceptedUsers");
              setAcceptedList(getInvitedUsers)
            }
            ).catch((error) => console.log(error))
          })
        }
        else {
          setAcceptedList()
        }
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
    snapshot.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

    let getInvitedUsers = []
    let a3 = temp.flatMap((x) => { return x.followers && x.followers })
    if (a3.length > 0) {

      let check = a3.filter((follower) => follower && follower.status === "requested")
      if (check.length > 0) {

        check.forEach(a => {
          const docRef1 = doc(db, 'elderlyUsers', a.id);
          const docSnap1 = getDoc(docRef1);
          docSnap1.then((result) => {
            getInvitedUsers.push({ id: a.id, ...result.data() })
            setinvitation(getInvitedUsers)
          }
          ).catch((error) => console.log(error))
        })

      }
      else {
        setinvitation()
      }
    }
    else {
      setinvitation()
    }


  })
}

export const findCreatedAt_diffDays = (invite) => {
  //console.log(invite);
//   const getRequestsByUserId = (userObj, requestedByUserId) => {
//     const matchingRequest = userObj.followers.find(
//         (request) => request.id === requestedByUserId
//     );
//     return matchingRequest || null; // Return null if no matching request found
// };

// const requestsForUser = getRequestsByUserId(invite, elderUser.id);
  const get_seconds = invite.followers.map((follower) => follower && follower.createdAt.seconds)
  console.log(get_seconds);
  const get_nanoseconds = invite.followers.map((follower) => follower && follower.createdAt.nanoseconds)
  const get_date = new Date(get_seconds * 1000 + get_nanoseconds / 1000000).toDateString()
  const date = new Date(get_date);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - date.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  const timeAgo = `${differenceInDays} day${differenceInDays !== 1 ? 's' : ''} ago`;
  return timeAgo

}

export const viewAcceptedVolunteersByElder = async (elderUser, setAcceptedList) => {
  try {

    const q = query(collection(db, "elderlyUsers"), where("fullname", "==", elderUser.fullname));


    await onSnapshot(q, (snapshot) => {
      let temp = []
      snapshot.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }))
      let getInvitedUsers = []
      let a3 = temp.flatMap((x) => { return x.volunteers && x.volunteers })
      if (a3.length > 0) {
        let checkElders = a3.filter((vol) => vol && vol.status === "accepted")
        if (checkElders.length > 0) {

          checkElders.forEach(a => {
            const docRef1 = doc(db, 'volunteerUsers', a.id);
            const docSnap1 = getDoc(docRef1);
            docSnap1.then((result) => {
              getInvitedUsers.push({ id: a.id, ...result.data() })
              //console.log(getInvitedUsers,"getacceptedUsers");
              setAcceptedList(getInvitedUsers)
            }
            ).catch((error) => console.log(error))
          })

        }
        else {
          setAcceptedList()
        }
      }
      else {
        setAcceptedList()
      }

    })


  } catch (error) {
    console.error('Error fetching users:', error);
  }
}
export const viewPendingVolunteersByElder = async(elderUser, setAcceptedList)=>{
  try {

    const q = query(collection(db, "elderlyUsers"), where("fullname", "==", elderUser.fullname));


    await onSnapshot(q, (snapshot) => {
      let temp = []
      snapshot.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }))
      let getInvitedUsers = []
      let a3 = temp.flatMap((x) => { return x.volunteers && x.volunteers })
      if (a3.length > 0) {

        let checkElders = a3.filter((vol) => vol && vol.status === "pending")
        console.log(checkElders, "chleld");
        if (checkElders.length > 0) {

          checkElders.forEach(a => {
            const docRef1 = doc(db, 'volunteerUsers', a.id);
            const docSnap1 = getDoc(docRef1);
            docSnap1.then((result) => {
              getInvitedUsers.push({ id: a.id, ...result.data() })
              //console.log(getInvitedUsers,"getacceptedUsers");
              setAcceptedList(getInvitedUsers)
            }
            ).catch((error) => console.log(error))
          })

        }
        else {
          setAcceptedList()
        }
      }
      else {
        setAcceptedList()
      }

    })


  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export const removeRequestById = async (elderUser, inviteuser) => {

  const userRef = doc(db, 'elderlyUsers', elderUser.id);
  const inviteUserRef = doc(db, 'volunteerUsers', inviteuser.id)

  const userDoc = await getDoc(userRef);
  const currentFollowers = userDoc.data().followers || [];
  const updatedFollowers = currentFollowers.filter(followuser => followuser.id !== inviteuser.id);
  await updateDoc(userRef, {
    followers: updatedFollowers
  });

  // Remove elderUser.id from the requests array
  const inviteUserDoc = await getDoc(inviteUserRef);
  const currentRequests = inviteUserDoc.data().following || [];
  const updatedRequests = currentRequests.filter(followng => followng.id !== elderUser.id);
  await updateDoc(inviteUserRef, {
    requests: updatedRequests
  });
};

export const removeVolRequestById = async (elderUser, inviteuser) => {

  const userRef = doc(db, 'elderlyUsers');
  const inviteUserRef = doc(db, 'volunteerUsers', inviteuser.id)

  // const userDoc = await getDoc(userRef);
  // const currentFollowers = userDoc.data().volunteers || [];
  // const updatedFollowers = currentFollowers.filter(followuser => followuser.id !== inviteuser.id);
  // await updateDoc(userRef, {
  //   volunteers: updatedFollowers
  // });

  // Remove elderUser.id from the requests array
  const inviteUserDoc = await getDoc(inviteUserRef);
  const currentRequests = inviteUserDoc.data().requests || [];
  const updatedRequests = currentRequests.filter(followng => followng.id !== requestedBy.id);
  await updateDoc(inviteUserRef, {
    requests: updatedRequests
  });
};


export const removePendingRequestById = async (elderUser, inviteuser) => {
  const userRef = doc(db, 'elderlyUsers', elderUser.id);
  const inviteUserRef = doc(db, 'volunteerUsers', inviteuser.id)
  
  const userDoc = await getDoc(userRef);
  const currentVolunteers = userDoc.data().volunteers || [];
  const updatedVolunteers = currentVolunteers.filter(volunteerId => volunteerId.id !== inviteuser.id);
  await updateDoc(userRef, {
    volunteers: updatedVolunteers
  });

  // Remove elderUser.id from the requests array
  const inviteUserDoc = await getDoc(inviteUserRef);
  const currentRequests = inviteUserDoc.data().requests || [];
  const updatedRequests = currentRequests.filter(requestId => requestId.id !== elderUser.id);
  await updateDoc(inviteUserRef, {
    requests: updatedRequests
  });
};
export const getUserDetails = async (email, setUserDetails,setAuthuser) => {

  const eldr_q = query(collection(db, "elderlyUsers"), where("email", "==", email));

  const volq = query(collection(db, "volunteerUsers"), where("email", "==", email));


  if (eldr_q) {
    let temp = []
    getDocs(eldr_q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserDetails({id: doc.id, data:doc.data()})
        });
      })
    // setUserDetails(temp)
  }
  else if (volq.length > 0) {
    let temp =[]
    getDocs(volq)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log('User found:', doc.id, doc.data());
          setUserDetails({id: doc.id, data:doc.data()})
          signInWithEmailAndPassword(auth, email, doc.data().password).then((user)=>setAuthuser(user))

          //temp.push(doc.id, ...doc.data())
          // Access user properties like doc.id, doc.data().displayName, etc.
        });
      })
  }
  else {
    console.log("No doc found")
  }

}

export const updateUserDetails = async (userID, password) => {

  const docRef1 = doc(db, "elderlyUsers", userID);
  const docSnap1 = await getDoc(docRef1);

  const docRef2 = doc(db, "volunteerUsers", userID);
  const docSnap2 = await getDoc(docRef2);

  if (docSnap1.exists()) {
    await updateDoc(docRef1, { password: password }, { merge: true }).then(() => console.log("password updated"))
  }
  else if (docSnap2.exists()) {
    await updateDoc(docRef2, { password: password }, { merge: true });
  }
}