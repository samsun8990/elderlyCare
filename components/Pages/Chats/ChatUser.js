import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { defaultImg } from '../../Utils/ImageCommon.js';
import { Card, Button } from '@rneui/themed';
import { FontAwesome, Entypo, MaterialCommunityIcons } from "react-native-vector-icons";
import { white } from 'color-name';
import { GiftedChat } from 'react-native-gifted-chat';
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../Config/config.js';
import { useCallback } from 'react';
import { AuthContext } from '../../Config/AuthContext.js';

const ChatUser = ({ navigation, route }) => {

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);


  const { network } = route.params

  const [messages, setMessages] = useState([])

  // useEffect(()=>{

  //   const collectionRef = collection(db,"chats")
  //   const q = query(collectionRef,ref =>ref.orderBy('createdAt','desc'))

  //   const unsubscribe = onSnapshot(q,snapshot=>{
  //     console.log("snapshot");
  //     setMessages(
  //       snapshot.docs.map(doc=>({
  //         _id:doc.id,
  //         createdAt:doc.data().createdAt.toDate(),
  //         text:doc.data().text,
  //         user:doc.data().user
  //       }))
  //     )
  //   })
  //   return ()=>unsubscribe()
  // },[])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  const sendChat = async (newMessages = []) => {
    let messageData
    messageData = {
      text: messages.text,
      createdAt: new Date(),
      user: volunteerUser.id,
    };

    const chatsRef = collection(db, 'chats');;

    // Create a new chat document if it doesn't exist
    const newChatDoc = await addDoc(chatsRef, messageData);
    console.log('New chat document created with ID:', newChatDoc.id);


  }

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      alwaysShowSend={true}
      user={user && elderUser? {
        _id: elderUser.id,name:elderUser.fullname,avatar:elderUser.avatar
      }:  {
        _id: volunteerUser.id,name:volunteerUser.fullname,avatar:volunteerUser.avatar
      }}
    />
    // <SafeAreaView style={styles.container}>
    //   <ScrollView showsVerticalScrollIndicator={true}>


    //     <Card containerStyle={{ backgroundColor: "#fff" }} wrapperStyle={{ backgroundColor: "#fff" }}>

    //       {/* <View>

    //       <View style={{gap: 10, padding: 10, flexDirection:'column', height:500}}>
    //         <Text style={{ marginBottom:20, borderWidth: 1,borderRadius: 8, padding: 10,backgroundColor:'white', width:'20%', textAlign:'left'}}>Hi</Text>
    //     </View>

    //       <View style={{ justifyContent: "space-around", alignItems: "center", gap: 12, padding: 5, flexDirection:'row' }}>

    //         <TextInput
    //           style={{
    //             borderWidth: 1, borderColor: "grey", height: 60, width: 300, borderRadius: 8, backgroundColor: "#EAEAEA",
    //             margin: 12,
    //             padding: 10,
    //             color:"gray"
    //           }}
    //           placeholder='Type a message'
    //         />

    //         <FontAwesome name="send" size={30} color="green" />



    //       </View>

    //     </View> */}

    //     </Card>
    //   </ScrollView>
    // </SafeAreaView>
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