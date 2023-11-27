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
import { readAllElderUsers } from "../../../Config/dbcls";
import { AuthContext } from "../../../Config/AuthContext";

const ElderHomeSuggestions = () => {
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

                <Text style={styles.item}>{suggest.fullname}</Text>
                <Button
                  buttonStyle={{
                    backgroundColor: "#1B5B7D",
                    borderWidth: 2,
                    borderColor: "#1B5B7D",
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 90,
                  }}
                  titleStyle={{ fontWeight: "bold", fontSize: 15 }}
                >
                  Connect
                </Button>
              </View>
            ))}
        </View>
      </ScrollView>
    </Card>
  );
};

export default ElderHomeSuggestions;
