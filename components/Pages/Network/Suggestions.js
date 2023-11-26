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
import { readAllElderUsers } from "../../Config/dbcls";

const Suggestions = () => {
  const navigation = useNavigation();

  const { user, signIn, signOut, elderUser, volunteerUser, setUser } =
    useContext(AuthContext);
  const [suggestionList, setSuggestionList] = useState();

  useEffect(() => {
    if (elderUser) {
      readAllElderUsers(elderUser.fullname, setSuggestionList);
    }
  }, []);
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
                <Image
                  source={{uri:suggest.avatar}}
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                  resizeMode="cover"
                />
                <Text style={{ fontWeight: "bold" }}>{suggest.fullname}</Text>
                <Text>{suggest.gender}</Text>
                <Text></Text>
                <Button
                  buttonStyle={{
                    backgroundColor: "#1B5B7D",
                    borderWidth: 2,
                    borderColor: "#1B5B7D",
                    borderRadius: 30,
                  }}
                  size="md"
                  containerStyle={{
                    width: 120,
                    height: 35,
                  }}
                  titleStyle={{
                    fontSize: 12,
                    padding: 10,
                  }}
                >
                  Connect
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
