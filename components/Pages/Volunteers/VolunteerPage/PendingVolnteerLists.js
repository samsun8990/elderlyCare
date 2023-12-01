import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { FontAwesome,Entypo } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../../Utils/Common.js';
import { Card, Button, Avatar } from '@rneui/themed';
import { styles } from '../VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';
import { defaultImg } from '../../../Utils/ImageCommon.js';
import { AuthContext } from '../../../Config/AuthContext.js';
import { readAllPendingElders } from '../../../Config/volunteer_dbcls.js';


const PendingVolnteerLists = ({navigation}) => {

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const [pendingList, setPendingList] = useState()

  useEffect(() => {
    if (volunteerUser) {
      readAllPendingElders(volunteerUser, setPendingList);
    
    }
  }, []);

  
  return (
    <Card >
    <Card.Title style={{fontSize:18}}>View Pending Volunteers</Card.Title>
    <Card.Divider />
    <ScrollView>
      {pendingList && pendingList.length > 0
      ?
      pendingList.map((pending,index)=>
      <View key={index}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 , alignItems:"center"}}>
          <Avatar source={{uri:pending.avatar}} size={50}/>
          <TouchableOpacity style={{margin:5}} onPress={()=>navigation.navigate("RequestPage")}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>{pending.fullname}</Text>
            {/* <Text style={{ color: "#847F7F" }}>Country</Text> */}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="eye" size={30}/>
            <FontAwesome name="check" size={30} color="#265F17" />
            <Entypo name="cross" size={30}/>
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

export default PendingVolnteerLists
