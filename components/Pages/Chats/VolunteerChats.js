import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from '@rneui/themed';
import { FontAwesome,Entypo, MaterialCommunityIcons } from "react-native-vector-icons";
import { AuthContext } from '../../Config/AuthContext.js';
import { defaultImg } from '../../Utils/ImageCommon.js';
import { logo } from '../../Utils/ImageCommon';

const VolunteerChats = () => {

  const navigation = useNavigation()

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const headerOptions = {
    headerTitle: '',
    headerLeft: () => (
      <TouchableOpacity>

        <Image source={logo} style={{ width: 110, height: 20, marginLeft: 15 }} resizeMode="cover" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <FontAwesome
            name="bell"
            color="#1B5B7D"
            size={24}
            style={{ marginRight: 15 }}

          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            name="sign-out"
            color="#1B5B7D"
            size={24}
            style={{ marginRight: 15 }}
            onPress={() => {
              signOut()
              setUser(null)
              navigation.replace("LoginUser")
            }}
          />
        </TouchableOpacity>
      </View>
    ),
    headerStyle: {
      elevation: 5,
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
    },
  }


  

  useEffect(() => {
    navigation.setOptions(headerOptions);
  }, [navigation]);


  
  return (
    <Card >
    <Card.Title style={{fontSize:18, }}>Chat With Connected Networks</Card.Title>
    <Card.Divider />
    <ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} >
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>1 day ago</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="chat" size={30} onPress={()=>navigation.navigate("ChatUser")}/>
            <MaterialCommunityIcons name="more" size={30} />
          </View>
        </View>
      </View>
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} >
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>3 day ago</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="chat" size={30} onPress={()=>navigation.navigate("ChatUser")}/>
            <MaterialCommunityIcons name="more" size={30} />
          </View>
        </View>
      </View>
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} >
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>1 day ago</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="chat" size={30} onPress={()=>navigation.navigate("ChatUser")}/>
            <MaterialCommunityIcons name="more" size={30} />
          </View>
        </View>
      </View>
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} >
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>3 day ago</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="chat" size={30} onPress={()=>navigation.navigate("ChatUser")}/>
            <MaterialCommunityIcons name="more" size={30} />
          </View>
        </View>
      </View>
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} >
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>3 day ago</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="chat" size={30} onPress={()=>navigation.navigate("ChatUser")}/>
            <MaterialCommunityIcons name="more" size={30} />
          </View>
        </View>
      </View>
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} >
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>3 day ago</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="chat" size={30} onPress={()=>navigation.navigate("ChatUser")}/>
            <MaterialCommunityIcons name="more" size={30} />
          </View>
        </View>
      </View>
      <Card.Divider/>
     
     
    </ScrollView>

  </Card>
  )
}

export default VolunteerChats

//const styles = StyleSheet.create({})