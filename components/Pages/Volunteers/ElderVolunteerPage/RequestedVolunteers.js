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
import { viewAcceptedVolunteersByElder } from '../../../Config/dbcls.js';

const RequestedVolunteers = () => {
  const navigation = useNavigation()

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);


  const [acceptedVol,setAcceptedVol] = useState()

  useEffect(()=>{
    viewAcceptedVolunteersByElder(elderUser,setAcceptedVol)
  },[])




  return (
    <Card >
      <Card.Title style={{ fontSize: 18 }}>View Accepted Volunteers</Card.Title>
      <Card.Divider />
      <ScrollView>
        {
          acceptedVol && acceptedVol.length > 0 ? (
            acceptedVol.map((accept,index)=>
            <View key={index}>
               <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 5, padding: 5,gap:15 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Avatar size={50} source={{uri:accept.avatar}}/>
           
            <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate("RequestPage")}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>{accept.fullname}</Text>
              <Text style={{ color: "#847F7F" }}>{accept.gender}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
              <Entypo name="eye" size={30} onPress={() => navigation.navigate("ViewAcceptPage",{accepted:accept})}/>
              <MaterialIcons name="feedback" size={30} onPress={() => navigation.navigate("Feedback",{accepted:accept})}/>
              <Entypo name="chat" size={30} />
              <Entypo name="cross" size={30} />
            </View>
          </View>
        </View>
        <Card.Divider />
            </View>
            
            
            )
          )
          :
          null
        }
       
      

      </ScrollView>

    </Card>
  )
}

export default RequestedVolunteers
