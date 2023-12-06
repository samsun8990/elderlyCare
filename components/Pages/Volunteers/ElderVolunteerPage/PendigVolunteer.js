import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesome, MaterialIcons, Entypo } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { headerOptions } from "../../../Utils/Common.js";
import { Card, Button, Avatar } from "@rneui/themed";
import { styles } from "../VolunteerStyles.js";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import { defaultImg } from "../../../Utils/ImageCommon.js";
import { AuthContext } from "../../../Config/AuthContext.js";
import { removePendingRequestById, viewPendingVolunteersByElder } from "../../../Config/dbcls.js";


const PendigVolunteer = ({ navigation, searchvalue }) => {
  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);
  const [pendingList, setPendiList] = useState();

  useEffect(() => {
    if (elderUser) {
      viewPendingVolunteersByElder(elderUser, setPendiList);
    }
  }, []);

  const deleteRequest = async (accept) => {
    alert("Deleted request!")
    await removePendingRequestById(elderUser, accept)
  }

  const searchResults =
    pendingList &&
    pendingList.filter((data) => {
      if (data.fullname.toLowerCase().includes(searchvalue.toLowerCase())) {
        return data;
      }
    });


  return (
    <Card>
      <Card.Title style={{ fontSize: 18 }}>
        View Pending Volunteer Requests ({pendingList &&
          pendingList.length})
      </Card.Title>
      <Card.Divider />
      <ScrollView>
        {

          pendingList &&
          (searchvalue
            ? searchResults.map((available, index) => (
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
                        <Text style={{ fontWeight: "600", fontSize: 16 }}>{available.fullname}</Text>
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
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
                        <Entypo name="eye" size={30} onPress={() => navigation.navigate("ViewRequestPage", { accepted: available })} />
                        <Entypo name="cross" size={30} onPress={() => deleteRequest(available)} />
                      </View>
                    </View>

                  </View>
                </View>
                <Card.Divider />
              </View>

            ))
            :
            pendingList &&
            pendingList.length > 0 &&
            pendingList.map((available, index) => (
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
                        <Text style={{ fontWeight: "600", fontSize: 16 }}>{available.fullname}</Text>
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
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 5 }}>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 5, top: 10 }}>
                        <Entypo name="eye" size={30} onPress={() => navigation.navigate("ViewRequestPage", { accepted: available })} />
                        <Entypo name="cross" size={30} onPress={() => deleteRequest(available)} />
                      </View>
                    </View>

                  </View>
                </View>
                <Card.Divider />
              </View>
            )
            ))}
      </ScrollView>
      <View style={{ paddingBottom: 30 }} />
    </Card>
  )
}

export default PendigVolunteer
