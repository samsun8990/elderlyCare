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

const RequestedVolunteers = ({searchvalue}) => {
  const navigation = useNavigation()

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);


  const [acceptedVol,setAcceptedVol] = useState()
  

  useEffect(()=>{
    if(elderUser){
      viewAcceptedVolunteersByElder(elderUser,setAcceptedVol)
    }
  },[])

  const searchResults =
  acceptedVol &&
  acceptedVol.filter((data) => {
      if (data.fullname.toLowerCase().includes(searchvalue.toLowerCase())) {
        return data;
      }
    });


  



  return (
    <Card >
      <Card.Title style={{ fontSize: 18 }}>View Accepted Volunteers({acceptedVol && acceptedVol.length})</Card.Title>
      <Card.Divider />
      <ScrollView>
        {
          acceptedVol &&
          (searchvalue
            ? searchResults.map((accept, index) => (
              <View key={index}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 5, padding: 5,gap:15 }}>
         <View style={{ flexDirection: "row", gap: 10 }}>
           <Avatar rounded size={50} source={{uri:accept.avatar}}/>
          
           <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate("RequestPage")}>
           <TouchableOpacity onPress={() => navigation.navigate("UserProfile", { userid: accept.id })}>
               <Text style={{ fontWeight: "600", fontSize: 16 }}>{accept.fullname}</Text>
             </TouchableOpacity>
            
             <Text style={{ color: "#847F7F" }}>{accept.gender}</Text>
           </TouchableOpacity>
         </View>
         <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
           <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
             <Entypo name="eye" size={30} onPress={() => navigation.navigate("ViewAcceptPage",{accepted:accept})}/>
             <MaterialIcons name="feedback" size={30} onPress={() => navigation.navigate("Feedback",{accepted:accept})}/>
             <Entypo name="chat" size={30} onPress={() => navigation.navigate("ChatUser",{network:accept})} />
           </View>
         </View>
       </View>
       <Card.Divider />
           </View>

            )):
            acceptedVol && acceptedVol.map((accept,index)=>(
              <View key={index}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 5, padding: 5,gap:15 }}>
         <View style={{ flexDirection: "row", gap: 10 }}>
           <Avatar rounded size={50} source={{uri:accept.avatar}}/>
          
           <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate("RequestPage")}>
           <TouchableOpacity onPress={() => navigation.navigate("UserProfile", { userid: accept.id })}>
               <Text style={{ fontWeight: "600", fontSize: 16 }}>{accept.fullname}</Text>
             </TouchableOpacity>
            
             <Text style={{ color: "#847F7F" }}>{accept.gender}</Text>
           </TouchableOpacity>
         </View>
         <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
           <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
             <Entypo name="eye" size={30} onPress={() => navigation.navigate("ViewAcceptPage",{accepted:accept})}/>
             <MaterialIcons name="feedback" size={30} onPress={() => navigation.navigate("Feedback",{accepted:accept})}/>
             <Entypo name="chat" size={30} onPress={() => navigation.navigate("ChatUser",{network:accept})} />
           </View>
         </View>
       </View>
       <Card.Divider />
           </View>

            )
           
            
            
            )
          )
      }



       
      

      </ScrollView>

    </Card>
  )
}

export default RequestedVolunteers
