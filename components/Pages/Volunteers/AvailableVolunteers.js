import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { headerOptions } from '../../Utils/Common';
import { Card, Button } from '@rneui/themed';
import { styles } from './VolunteerStyles.js';
import { Picker } from '@react-native-picker/picker'
import { Dropdown } from 'react-native-element-dropdown';


const AvailableVolunteers = () => {
  const navigation = useNavigation();
  return (
    <Card >
      <Card.Title style={{fontSize:18}}>View Available Volunteers</Card.Title>
      <Card.Divider />
      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View style={{margin:5}}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>Country</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <Button buttonStyle={{
              backgroundColor: '#BF3A3A',
              borderWidth: 2,
              borderColor: '#BF3A3A',
              borderRadius: 30,

            }}
              size="md"
              containerStyle={{
                width: 120,
                height: 38,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize:13,padding: 5 }}
            >Request</Button>
          </View>
        </View>
        <Card.Divider/>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View style={{margin:5}}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>Country</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <Button buttonStyle={{
              backgroundColor: '#BF3A3A',
              borderWidth: 2,
              borderColor: '#BF3A3A',
              borderRadius: 30,

            }}
              size="md"
              containerStyle={{
                width: 120,
                height: 38,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize:13,padding: 5 }}
            >Request</Button>
          </View>
        </View>
        <Card.Divider/>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View style={{margin:5}}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>Country</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <Button buttonStyle={{
              backgroundColor: '#BF3A3A',
              borderWidth: 2,
              borderColor: '#BF3A3A',
              borderRadius: 30,

            }}
              size="md"
              containerStyle={{
                width: 120,
                height: 38,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize:13,padding: 5 }}
            >Request</Button>
          </View>
        </View>
        <Card.Divider/>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image source={require("../../../assets/images/defaultuser-img.png")}
              style={{ width: 50, height: 50, borderRadius: 30 }} resizeMode="cover" />
            <View style={{margin:5}}>
              <Text style={{ fontWeight: "600", fontSize: 16 }}>Lorem Lipsum</Text>
              <Text style={{ color: "#847F7F" }}>Country</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
            <Button buttonStyle={{
              backgroundColor: '#BF3A3A',
              borderWidth: 2,
              borderColor: '#BF3A3A',
              borderRadius: 30,

            }}
              size="md"
              containerStyle={{
                width: 120,
                height: 38,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize:13,padding: 5 }}
            >Request</Button>
          </View>
        </View>
        <Card.Divider/>

      </ScrollView>

    </Card>
  )
}

export default AvailableVolunteers
