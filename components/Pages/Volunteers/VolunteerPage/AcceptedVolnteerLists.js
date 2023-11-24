import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../../Utils/Common.js';
import { Card, Button } from '@rneui/themed';
import { styles } from '../VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';
import { defaultImg } from '../../../Utils/ImageCommon.js';

const AcceptedVolnteerLists = () => {
  return (
    <Card >
    <Card.Title style={{fontSize:18}}>View Accepted Volunteers</Card.Title>
    <Card.Divider />
    <ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} onPress={()=>navigation.navigate("RequestPage")}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>Country</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="eye" size={30}/>
            <MaterialIcons name="feedback" size={30} onPress={()=>navigation.navigate({"name":"Feedback"})}/>
            <Entypo name="chat" size={30}/>
          
          </View>
        </View>
      </View>
     
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} onPress={()=>navigation.navigate("RequestPage")}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>Country</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="eye" size={30}/>
            <MaterialIcons name="feedback" size={30} onPress={()=>navigation.navigate({"name":"Feedback"})}/>
            <Entypo name="chat" size={30}/>
          
          </View>
        </View>
      </View>
     
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} onPress={()=>navigation.navigate("RequestPage")}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>Country</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="eye" size={30}/>
            <MaterialIcons name="feedback" size={30} onPress={()=>navigation.navigate({"name":"Feedback"})}/>
            <Entypo name="chat" size={30}/>
          
          </View>
        </View>
      </View>
     
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} onPress={()=>navigation.navigate("RequestPage")}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>Country</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="eye" size={30}/>
            <MaterialIcons name="feedback" size={30} onPress={()=>navigation.navigate({"name":"Feedback"})}/>
            <Entypo name="chat" size={30}/>
          
          </View>
        </View>
      </View>
     
      <Card.Divider/>
      <View style={{ flexDirection: "row", justifyContent: "space-between" ,bottom:5, padding:5}}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={defaultImg}
            style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
          <TouchableOpacity style={{margin:5}} onPress={()=>navigation.navigate("RequestPage")}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
            <Text style={{ color: "#847F7F" }}>Country</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top:10 }}> 
            <Entypo name="eye" size={30}/>
            <MaterialIcons name="feedback" size={30} onPress={()=>navigation.navigate({"name":"Feedback"})}/>
            <Entypo name="chat" size={30}/>
          
          </View>
        </View>
      </View>
     
      <Card.Divider/>
     
     
    </ScrollView>

  </Card>
  )
}

export default AcceptedVolnteerLists
