import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { headerOptions } from "../../../Utils/Common.js";
import { Card, Button, Avatar } from "@rneui/themed";
import { styles } from "../VolunteerStyles.js";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import { defaultImg } from "../../../Utils/ImageCommon.js";
import { AuthContext } from "../../../Config/AuthContext.js";
import { readAllAvailableVolunteers } from "../../../Config/dbcls.js";

const AvailableVolunteers = ({navigation}) => {
  
  const { user, signIn, signOut, elderUser, volunteerUser, setUser } =
    useContext(AuthContext);
  const [avaiableList, setAvailableList] = useState();

  useEffect(() => {
    if (elderUser) {
      readAllAvailableVolunteers("available", setAvailableList);
    }
  }, []);

  return (
    <Card>
      <Card.Title style={{ fontSize: 18 }}>
        View All Volunteers ({avaiableList &&
          avaiableList.length})
      </Card.Title>
      <Card.Divider />
      <ScrollView>
        {avaiableList &&
          avaiableList.length > 0 &&
          avaiableList.map((available, index) => (
            <View key={index}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                <Avatar size={48} rounded source={{ uri: available.avatar }} />
                 
                  <View style={{ margin: 5 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("UserProfile", { userid: available.id })}>
                      <Text style={{ fontWeight: "600", fontSize: 16}}>{available.fullname}</Text>
                  </TouchableOpacity>
                    <Text style={{ color: "#847F7F" }}>{available.gender}</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    gap: 5,
                  }}
                >
                  <Button
                    disabled={available.requests && available.requests.map((vol) => vol.status === 'pending') ? true : false}
                    buttonStyle={{
                      backgroundColor: "#BF3A3A",
                      borderWidth: 2,
                      borderColor: "#BF3A3A",
                      borderRadius: 30,
                    }}
                    size="md"
                    containerStyle={{
                      width: 120,
                      height: 38,
                    }}
                    titleStyle={{
                      fontWeight: "bold",
                      fontSize: 13,
                      padding: 5,
                    }}
                    onPress={() => navigation.navigate("RequestPage",{volUser:available})}
                  >
                    {available.requests && available.requests.map((vol) => vol.status === 'pending') ? 'Pending' : 'Request'} 
                  </Button>
                </View>
              </View>
              <Card.Divider />
            </View>
          ))}
      </ScrollView>
      <View style={{ paddingBottom: 30 }} />
    </Card>
  );
};

export default AvailableVolunteers;
