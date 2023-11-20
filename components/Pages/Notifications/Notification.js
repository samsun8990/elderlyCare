import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome, MaterialIcons, Entypo } from "react-native-vector-icons";
import { Card, Button } from '@rneui/themed';


const Notification = ({ navigation }) => {
  return (
    <Card >
      <Card.Title style={{ fontSize: 18 }}>All (20)</Card.Title>
      <Card.Divider />
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 5, padding: 5 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate("RequestPage")}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>5 sec ago</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
             
              <FontAwesome name="ellipsis-v" size={30} />
            </View>
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 5, padding: 5 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate("RequestPage")}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>5 sec ago</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
             
              <FontAwesome name="ellipsis-v" size={30} />
            </View>
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 5, padding: 5 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate("RequestPage")}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>5 sec ago</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
             
              <FontAwesome name="ellipsis-v" size={30} />
            </View>
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 5, padding: 5 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate("RequestPage")}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>5 sec ago</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
             
              <FontAwesome name="ellipsis-v" size={30} />
            </View>
          </View>
        </View>
        <Card.Divider />
      

      </ScrollView>

    </Card>
  )
}

export default Notification
