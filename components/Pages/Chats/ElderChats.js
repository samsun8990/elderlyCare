
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Avatar } from '@rneui/themed';
import { FontAwesome, Entypo, MaterialCommunityIcons } from "react-native-vector-icons";
import { AuthContext } from '../../Config/AuthContext.js';
import { defaultImg, logo } from '../../Utils/ImageCommon.js';
import { getAcceptedUsersForCurrentUsers } from '../../Config/dbcls.js';

const ElderChats = ({ navigation, route }) => {

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

  const [connectedNetworks, setConnected] = useState()
  useEffect(() => {
    navigation.setOptions(headerOptions);

    getAcceptedUsersForCurrentUsers(elderUser, setConnected)
  }, [navigation]);




  return (
    <View style={{flex: 1,backgroundColor: '#DCEDF6'}}>
      <Card >
        <Card.Title style={{ fontSize: 18, }}>Chat With Connected Networks</Card.Title>
        <Card.Divider />
        <ScrollView >
          {connectedNetworks && connectedNetworks.length > 0
            ?
            connectedNetworks.map((connect, index) =>
              <View key={index}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", bottom: 5, padding: 5 }}>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Avatar source={{ uri: connect.avatar }} size={50} />
                    <TouchableOpacity style={{ margin: 5 }} >
                      <Text style={{ fontWeight: "500", fontSize: 15, top: 5 }}>{connect.fullname}</Text>
                      {/* <Text style={{ color: "#847F7F" }}>1 day ago</Text> */}
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
                      <Entypo name="chat" size={30} onPress={() => navigation.navigate("ChatUser", { network: connect })} />
                      <MaterialCommunityIcons name="more" size={30} />
                    </View>
                  </View>
                </View>
                <Card.Divider />
              </View>
            )
            :
            null
          }
        </ScrollView>

      </Card>
    </View>

  )
}

export default ElderChats

//const styles = StyleSheet.create({})