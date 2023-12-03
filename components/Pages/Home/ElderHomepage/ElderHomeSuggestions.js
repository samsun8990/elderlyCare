import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@rneui/themed";
import { Card, Avatar } from "@rneui/themed";
import { FontAwesome } from "react-native-vector-icons";
import { styles } from "../HomeStyle";
import { defaultImg } from "../../../Utils/ImageCommon";
import { useNavigation } from "@react-navigation/native";
import { connectUser, getUsersNotFollowedByCurrentUser, readAllElders, readAllOtherElderUsers } from "../../../Config/dbcls";
import { AuthContext } from "../../../Config/AuthContext";
import { db } from "../../../Config/config";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

const ElderHomeSuggestions = () => {
  const navigation = useNavigation();

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

  const [suggestionList, setSuggestionList] = useState()

  useEffect(() => {
    if (elderUser) {
      //readAllOtherElderUsers(elderUser.fullname, setSuggestionList);
      getUsersNotFollowedByCurrentUser(elderUser, setSuggestionList)
    
    }
  }, []);
  


  const handleFollowUser = async (follow)=>{
    await alert(`You Requested ${follow.fullname}`)
    await connectUser(elderUser,follow)
    //await readAllElders()
   
  }


  return (
    <Card
      containerStyle={{ backgroundColor: "#F5F5F5" }}
      wrapperStyle={{ backgroundColor: "#F5F5F5" }}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Suggestions</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Suggestions")}>
          <FontAwesome name="arrow-right" size={20} color="#1B5B7D" />
        </TouchableOpacity>
      </View>
      <Card.Divider />
      <ScrollView horizontal>
        <View style={styles.scrollContainer}>
          {suggestionList &&
            suggestionList.length > 0 &&
            suggestionList.map((suggest, index) => (
              <View key={index}>
                <Avatar size={85} rounded source={{ uri: suggest.avatar }} />
                <TouchableOpacity onPress={()=>navigation.navigate("UserProfile",{userid:suggest.id})}>
                  <Text style={styles.item}>{suggest.fullname}</Text>
                </TouchableOpacity>
                <Button onPress={()=>handleFollowUser(suggest)}
                  buttonStyle={{
                    backgroundColor: "#1B5B7D",
                    borderWidth: 2,
                    borderColor: "#1B5B7D",
                    borderRadius: 30,
                  }}
                  disabled={suggest.followers && suggest.followers.map((follower) => follower.status === 'requested') ? true : false}
                  containerStyle={{
                    width: suggest.followers && suggest.followers.map((follower) => follower.status === 'requested') ? 100 : 90,
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
  );
};

export default ElderHomeSuggestions;
