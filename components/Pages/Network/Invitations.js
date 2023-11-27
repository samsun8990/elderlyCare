import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';
import { Card, Button } from '@rneui/themed';
import { styles } from './NetworkStyle.js';
import { defaultImg } from '../../Utils/ImageCommon.js';


const Invitations = () => {
  const navigation = useNavigation();

  


  return (
    <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
      <Card.Title>All(20)</Card.Title>
      <Card.Divider />
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={defaultImg}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>1 day ago</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <FontAwesome name="check" size={30} color="#265F17" />
            <FontAwesome name="times" size={30} color="#7B7979" />
          </View>
        </View>
        <Card.Divider />

      </ScrollView>
    </Card>
  )
}

export default Invitations
