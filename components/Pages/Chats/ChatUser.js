import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { defaultImg } from '../../Utils/ImageCommon.js';
import { Card, Button } from '@rneui/themed';
import { FontAwesome, Entypo, MaterialCommunityIcons } from "react-native-vector-icons";
import { white } from 'color-name';
import { GiftedChat } from 'react-native-gifted-chat';
import { addDoc, collection, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../Config/config.js';
import { useCallback } from 'react';
import { AuthContext } from '../../Config/AuthContext.js';

const ChatUser = ({ navigation, route }) => {

  const {  signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const { network } = route.params

  let user
  let uid

  if(elderUser){
    user = elderUser
    uid = network && network.id
  }
  else if(volunteerUser){
    user = volunteerUser
    uid = network && network.id
  }
  

  const [messages, setMessages] = useState([])

  const getAllMessages = async () => {
    let messagesCollection,q;
    if(elderUser && network &&network.id){
      messagesCollection = collection(db, 'Chats');
      // const q = query(messagesCollection, orderBy('createdAt', 'desc'));
       q = query(
       messagesCollection,
       where('sentBy', 'in', [uid, user.id]),
       where('sentTo', 'in', [uid, user.id]),
       orderBy('createdAt', 'desc')
     );
    }
    else if(volunteerUser){
       messagesCollection = collection(db, 'Chats');
      // const q = query(messagesCollection, orderBy('createdAt', 'desc'));
       q = query(
       messagesCollection,
       where('sentBy', 'in', [user.id, uid]),
       where('sentTo', 'in', [user.id, uid]),
       orderBy('createdAt', 'desc')
     );
    }
   
  
    try {
      const msgSnapshot = await getDocs(q);
      if(msgSnapshot.docs.length > 0){
        const allTheMsgs = msgSnapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            ...data,
            createdAt: data.createdAt.toDate(),
          };
        });
        setMessages(allTheMsgs);
      }
      
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    getAllMessages()
  },[])

  const onSend = async (msgArray) => {
    const msg = msgArray[0];
    const usermsg = {
      ...msg,
      sentBy: user.id,
      sentTo: uid,
      createdAt: new Date(),
    };

    setMessages((previousMessages) => [...previousMessages, usermsg]);


    try {
      // const messagesCollection = collection(db, 'Chats', chatId, 'messages');
      const messagesCollection = collection(db, 'Chats');
      await addDoc(messagesCollection, {
        ...usermsg,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }; 


  return (
    <>
     <GiftedChat 
      style={{flex: 1}}
      messages={messages}
      onSend={text => onSend(text)}
      user={{ 
        _id: user.id,
      }}
      />
    </>
   
  )
}

export default ChatUser

export const styles = StyleSheet.create({
  container: {
    // marginTop: 24,
    flex: 1,
    backgroundColor: '#E4EDF2'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitles: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    margin: 3
  },
  headerBtn: {
    fontSize: 16,
    color: "#1B5B7D",
  },
  cardsContainer: {
    marginTop: 16,
  },
  welcomename: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: "#1B5B7D",
    // fontFamily: "Salsa_400Regular",
  },
  welcomedesc: {
    textAlign: "center",
    fontSize: 13,
    padding: 10,
    color: "#1B5B7D"
  },
  scrollContainer: {
    flexDirection: 'row',
    padding: 10,
    gap: 25
  },
  item: {
    textAlign: "center",
    margin: 5,
    fontWeight: "600"
  },
  suggestions: {
    width: 150,
    backgroundColor: "#EBE9E9",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  search: {
    borderWidth: 1,
    backgroundColor: "#D9D9D9",
    borderColor: "#D9D9D9",
    borderRadius: 10,
    width: 150,
    height: 40,
    margin: 10
  },
  dropdown: {
    borderWidth: 1,
    backgroundColor: "#D9D9D9",
    borderColor: "#D9D9D9",
    width: 150,
    height: 40,
    margin: 10
  },
  viewallbtn: {
    borderRadius: 15,
    backgroundColor: "#1B5B7D",
    width: 126

  },
  viewrequested: {
    borderRadius: 15,
    backgroundColor: "#1B5B7D",
    width: 160,
    opacity: 0.47,
  },
  requestTitle: {
    fontSize: 18,
    fontWeight: "500"
  }

})