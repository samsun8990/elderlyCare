import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button } from "@rneui/themed";
import { Card } from "@rneui/themed";
import { FontAwesome } from "react-native-vector-icons";
import { styles } from "../HomeStyle";
import { defaultImg } from "../../../Utils/ImageCommon";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../Config/AuthContext";
import { readAllAvailableVolunteers } from "../../../Config/dbcls";

const ElderHomeAvailable = () => {
  const navigation = useNavigation();

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } =
    useContext(AuthContext);
  const [avaiableList, setAvailableList] = useState();

  useEffect(() => {
    if (elderUser) {
      readAllAvailableVolunteers("available", setAvailableList);
    }
  }, []);


 const  getStatus = (available)=> available.requestes &&  available.requestes.map(follower => {

return follower.status

  console.log(follower,"folr");
    // if (follower.volunteerId === vol.id) {
    //   // console.log(follower);
    //   follower.status = "accepted"
    //   return follower
    // }
    // return follower;
  });

  return (

    <Card
      containerStyle={{ backgroundColor: "#F5F5F5" }}
      wrapperStyle={{ backgroundColor: "#F5F5F5" }}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Available Volunteers</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("AvailableVolunteers")}
        >
          <FontAwesome name="arrow-right" size={20} color="#1B5B7D" />
        </TouchableOpacity>
      </View>
      <Card.Divider />
      <ScrollView horizontal>
        <View style={styles.scrollContainer}>
          {avaiableList &&
            avaiableList.length > 0 &&
            avaiableList.map((available, index) => (
              <View key={index}>
                 <Avatar size={85} rounded source={{ uri: available.avatar }} />
                <TouchableOpacity onPress={()=>navigation.navigate("UserProfile",{userid:available.id})}>
                  <Text style={styles.item}>{available.fullname}</Text>
                </TouchableOpacity>
                
                <Button 
                 disabled={available.requests && available.requests.map((vol) => vol.status === 'pending' || vol.status === 'accepted') ? true : false}
                  onPress={() => navigation.navigate("RequestPage",{volUser:available})}
                  buttonStyle={{
                    backgroundColor: "#BF3A3A",
                    borderWidth: 2,
                    borderColor: "#BF3A3A",
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 90,
                    height: 45,
                  }}
                  titleStyle={{ fontWeight: "bold", fontSize: 13 }}
                >
                  {available.requests ? available.requests && available.requests.map((vol) =>
                    vol.status == 'pending' ? 'Pending' :
                    vol.status == 'accepted' ? 'Accepted' :
                    'Connect'
                  ) : 'Connect'}
                
                  {/* {available.requests && available.requests.map((vol) => vol.status === 'pending') ?
                   'Pending' : 'Request'}  */}
                </Button>
              </View>
            ))}
        </View>
      </ScrollView>
    </Card>
  );
};

export default ElderHomeAvailable;
