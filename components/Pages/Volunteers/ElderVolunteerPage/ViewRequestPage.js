import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import React, { useState, useEffect, useContext } from "react";
  import { FontAwesome } from "react-native-vector-icons";
  import { useNavigation } from "@react-navigation/native";
  // import { headerOptions } from '../../Utils/Common';
  import { Card, Button, CheckBox, Avatar } from "@rneui/themed";
  import { styles } from "../VolunteerStyles.js";
  import { Picker } from "@react-native-picker/picker";
  import { Dropdown } from "react-native-element-dropdown";
import { defaultImg } from "../../../Utils/ImageCommon.js";
import { AuthContext } from "../../../Config/AuthContext.js";
const ViewRequestPage = ({navigation,route}) => {

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const {accepted} = route.params



  return (
    <SafeAreaView style={styles.container}>
      <Card
        containerStyle={{ backgroundColor: "#fff" }}
        wrapperStyle={{ backgroundColor: "#fff" }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              padding: 10,
            }}
          >
            <Avatar source={defaultImg} size={60}/>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("UserProfile", { userid: accepted.id })}>
                  <Text style={{ fontWeight: "bold" }}>{accepted.fullname}</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 12 }}>{accepted.gender}</Text>
            </View>
          </View>

          <View>
            <Text>Description</Text>
            <Card.Divider />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "grey",
                height: 60,
                width: 190,
                borderRadius: 8,
                backgroundColor: "#EAEAEA",
                margin: 12,
                borderWidth: 1,
                padding: 10,
                color: "gray",
              }}
              placeholder="What are you ooking for?"
            />
          </View>

          <View>
            <Text>Preferences</Text>
            <Card.Divider />
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                center
                title="Walking"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
              <CheckBox
                center
                title="Talking"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <CheckBox
                center
                title="Playing Games"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
              <CheckBox
                center
                title="Read/Write"
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
            </View>
          </View>

          <View>
            <Text>Paymemt Amount</Text>
            <Card.Divider />
           <Text>QR 100</Text>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  )
}

export default ViewRequestPage
