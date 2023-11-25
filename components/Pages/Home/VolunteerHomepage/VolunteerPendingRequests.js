import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { FontAwesome } from "react-native-vector-icons";
  import { useNavigation } from "@react-navigation/native";
  // import { headerOptions } from '../../Utils/Common';
  import { Card, Button, CheckBox } from "@rneui/themed";
  import { styles } from "../HomeStyle.js";
  import { Picker } from "@react-native-picker/picker";
  import { Dropdown } from "react-native-element-dropdown";
import { defaultImg } from "../../../Utils/ImageCommon.js";

const VolunteerPendingRequests = ({navigation}) => {
  return (
    <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Pending Requests</Text>
        <TouchableOpacity>
            <FontAwesome name="arrow-right" size={20} color="#1B5B7D" />
        </TouchableOpacity>
    </View>
    <Card.Divider />
    <ScrollView horizontal>
        <View style={styles.scrollContainer}>
            <View>
                <Image source={defaultImg}
                    style={{ width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                <Text style={styles.item}>Lorem Lipsum</Text>
                <Button buttonStyle={{
                    backgroundColor: '#BF3A3A',
                    borderWidth: 2,
                    borderColor: '#BF3A3A',
                    borderRadius: 30,
                }}
                    containerStyle={{
                        width: 90,
                        height: 45
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                >Accept</Button>
            </View>
            <View>
                <Image source={defaultImg}
                    style={{ width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                <Text style={styles.item}>Lorem Lipsum</Text>
                <Button buttonStyle={{
                    backgroundColor: '#BF3A3A',
                    borderWidth: 2,
                    borderColor: '#BF3A3A',
                    borderRadius: 30,
                }}
                    containerStyle={{
                        width: 90,
                        height: 45
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                >Accept</Button>
            </View>
            <View>
                <Image source={defaultImg}
                    style={{ width: 90, height: 85, borderRadius: 50 }} resizeMode="cover" />
                <Text style={styles.item}>Lorem Lipsum</Text>
                <Button buttonStyle={{
                    backgroundColor: '#BF3A3A',
                    borderWidth: 2,
                    borderColor: '#BF3A3A',
                    borderRadius: 30,
                }}
                    containerStyle={{
                        width: 90,
                        height: 45
                    }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 15 }}
                >Accept</Button>
            </View>
        </View>
    </ScrollView>
</Card>
  )
}

export default VolunteerPendingRequests
