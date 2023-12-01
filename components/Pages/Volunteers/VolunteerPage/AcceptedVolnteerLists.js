import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { FontAwesome, MaterialIcons, Entypo } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../../Utils/Common.js';
import { Card, Button, Avatar } from '@rneui/themed';
import { styles } from '../VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';
import { defaultImg } from '../../../Utils/ImageCommon.js';
import { AuthContext } from '../../../Config/AuthContext.js';
import { readAllAcceptedElders } from '../../../Config/volunteer_dbcls.js';

const AcceptedVolnteerLists = ({navigation}) => {


  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const [acceptedList, setAcceptedList] = useState()

  useEffect(() => {
    if (volunteerUser) {
      readAllAcceptedElders(volunteerUser, setAcceptedList);
    
    }
  }, [])

  return (
    <Card >
    <Card.Title style={{fontSize:18}}>View Accepted Requests</Card.Title>
    <Card.Divider />
    <ScrollView>
      {
        acceptedList && acceptedList.length > 0
        ?
        acceptedList.map((accept,index)=>
        <View key={index}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10,alignItems:"center"}}>
          <Avatar size={50} source={{uri:accept.avatar}}/>
          <TouchableOpacity style={{margin:5}} >
            <Text style={{ fontWeight: "600", fontSize: 16 }}>{accept.fullname}</Text>
            {/* <Text style={{ color: "#847F7F" }}>Country</Text> */}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 10, top:10 }}> 
            <Entypo name="eye" size={30} onPress={()=>navigation.navigate("ViewAcceptPage",{accepted:accept})}/>
            <MaterialIcons name="feedback" size={30} onPress={()=> navigation.navigate("UserFeedback", { feedback: accept })}/>
            <Entypo name="chat" size={30} onPress={()=> navigation.navigate("ChatUser", { network: accept })}/>
          
          </View>
        </View>
      </View>
      <Card.Divider/>
        </View>
        )
        :
        null
      }
      
     
     
     
    </ScrollView>

  </Card>
  )
}

export default AcceptedVolnteerLists
