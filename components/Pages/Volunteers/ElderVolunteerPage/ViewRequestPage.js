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

  const { accepted } = route.params


  const getRequestsByUserId = (userObj, requestedByUserId) => {
      const matchingRequest = userObj.requests.find(
          (request) => request.requestedBy === requestedByUserId
      );
      return matchingRequest || null; // Return null if no matching request found
  };

  const requestsForUser = getRequestsByUserId(accepted, elderUser.id);

  const timestamp_startData = {
      "nanoseconds": requestsForUser.startDate.nanoseconds,
      "seconds": requestsForUser.startDate.seconds
  };
  const timestamp_endData = {
      "nanoseconds": requestsForUser.endDate.nanoseconds,
      "seconds": requestsForUser.endDate.seconds
  };

  const milliseconds1 = timestamp_startData.seconds * 1000 + timestamp_startData.nanoseconds / 1000000;
  const startdate = new Date(milliseconds1).toDateString()

  const milliseconds2 = timestamp_endData.seconds * 1000 + timestamp_endData.nanoseconds / 1000000;
  const enddate = new Date(milliseconds2).toDateString()



  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
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
                    <Avatar source={{ uri: accepted.avatar }} size={60} />

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("UserProfile", { userid: accepted.id })}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{accepted.fullname}</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>{accepted.gender}</Text>
                    </View>
                </View>
                <Text></Text>
                <View>
                    <Text style={styles.requestTitle}>Description</Text>
                    <Card.Divider />
                    <Text></Text>
                    <Text style={{ fontSize: 15 }} >{requestsForUser && requestsForUser.description}</Text>
                </View>
                <Text></Text>

                <View>
                    <Text style={styles.requestTitle}>Preferences</Text>
                    <Card.Divider />
                    <View style={{ flexDirection: "row" }}>
                        {
                            requestsForUser &&
                            requestsForUser.activities.slice(0, 2).map((x, index) =>
                                <CheckBox
                                    key={index}
                                    center
                                    title={x}
                                    checked={x}
                                />
                            )
                        }

                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {
                            requestsForUser && requestsForUser.length > 2 &&
                            requestsForUser.activities.slice(-2).map((x, index) =>
                                <CheckBox
                                    key={index}
                                    center
                                    title={x}
                                    checked={x}
                                />
                            )
                        }
                    </View>
                </View>
                <Text></Text>
                <View>
                    <Text style={styles.requestTitle}>Date Preferences</Text>
                    <Card.Divider />
                    <Text></Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 15 }}>From: {startdate}</Text>
                        <Text style={{ fontSize: 15 }}>To: {enddate}</Text>
                    </View>

                </View>
                <Text></Text>
            </View>
        </Card>
    </ScrollView>

</SafeAreaView>
  )
}

export default ViewRequestPage
