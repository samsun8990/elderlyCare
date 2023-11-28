import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesome } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { headerOptions } from "../../Utils/Common";
import { Card, Button } from "@rneui/themed";
import { styles } from "./NetworkStyle.js";
import { defaultImg } from "../../Utils/ImageCommon.js";
import { AuthContext } from "../../Config/AuthContext";
import { connectUser, getUsersNotFollowedByCurrentUser, readAllElderUsers } from "../../Config/dbcls";

const Suggestions = () => {
  const navigation = useNavigation();

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } =
    useContext(AuthContext);
  const [suggestionList, setSuggestionList] = useState();

  useEffect(() => {
    if (elderUser) {
      readAllElderUsers(elderUser.fullname, setSuggestionList);
      //getUsersNotFollowedByCurrentUser(elderUser, setSuggestionList)
    
    }
  }, []);

  const handleFollowUser = async (follow)=>{

    await connectUser(elderUser,follow)
    alert(`You Requested ${follow.fullname}`)
  }


  return (
    <SafeAreaView style={styles.container}>
   <Card
      containerStyle={{ backgroundColor: "#F5F5F5" }}
      wrapperStyle={{ backgroundColor: "#F5F5F5" }}
    >
      <Card.Title>People You May Know</Card.Title>
      <Card.Divider />
      <ScrollView>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 20,
            justifyContent: "center",
          }}
        >
          {suggestionList &&
            suggestionList.length > 0 &&
            suggestionList.map((suggest, index) => (
              <View style={styles.suggestions} key={index}>
                <Avatar size={60} rounded source={{ uri: suggest.avatar }} />
                <Text style={{ fontWeight: "bold" }}>{suggest.fullname}</Text>
                <Text>{suggest.gender}</Text>
                <Text></Text>
                <Button onPress={()=>handleFollowUser(suggest)}
                  buttonStyle={{
                    backgroundColor: "#1B5B7D",
                    borderWidth: 2,
                    borderColor: "#1B5B7D",
                    borderRadius: 30,
                  }}
                  // size="md"
                  disabled={suggest.followers && suggest.followers.map((follower) => follower.status === 'requested') ? true : false}
                  containerStyle={{
                    width: suggest.followers && suggest.followers.map((follower) => follower.status === 'requested') ? 100 : 90,
                    height: 39
                  }}
                  titleStyle={{ fontWeight: "bold", fontSize: 13 }}
                >
                  {suggest.followers && suggest.followers.map((follower) => follower.status === 'requested') ? 'Requested' : 'Connect'} 
                </Button>
              </View>
            ))}
        </View>
      </ScrollView>
    </Card>
    </SafeAreaView>
 
  );
};

export default Suggestions;
