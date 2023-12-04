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
  import { styles } from "../HomeStyle.js";
  import { Picker } from "@react-native-picker/picker";
  import { Dropdown } from "react-native-element-dropdown";
import { defaultImg } from "../../../Utils/ImageCommon.js";
import { AuthContext } from "../../../Config/AuthContext.js";
import { readAllPendingElders } from "../../../Config/volunteer_dbcls.js";

const VolunteerPendingRequests = ({navigation}) => {

    const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

    const [pendingList, setPendingList] = useState()
  
    useEffect(() => {
      if (volunteerUser) {
        readAllPendingElders(volunteerUser, setPendingList);
      
      }
    }, []);

  return (
    <Card containerStyle={{ backgroundColor: "#F5F5F5" }} wrapperStyle={{ backgroundColor: "#F5F5F5" }}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Pending Requests</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate("PendingVolnteerLists")}>
            <FontAwesome name="arrow-right" size={20} color="#1B5B7D" />
        </TouchableOpacity>
    </View>
    <Card.Divider />
    <ScrollView horizontal>
        <View style={styles.scrollContainer}>
            {pendingList && pendingList.length > 0
            ?
            pendingList.map((pending,index)=>
            <View key={index}>
            <Avatar size={85} source={{uri:pending.avatar}}/>
            <TouchableOpacity onPress={()=>navigation.navigate("UserProfile",{userid:pending.id})}>
              <Text style={styles.item}>{pending.fullname}</Text>
            </TouchableOpacity>
            <Button onPress={()=>navigation.navigate("ViewVolRequestPage",{pending:pending})}
             buttonStyle={{
                backgroundColor: '#1B5B7D',
                borderWidth: 2,
                borderColor: '#1B5B7D',
                borderRadius: 30,
            }}
                containerStyle={{
                    width: 90
                }}
                titleStyle={{ fontWeight: 'bold', fontSize:15 }}
            >Accept</Button>
        </View>
            )
            :
            null
    }
          
          
        </View>
    </ScrollView>
</Card>
  )
}

export default VolunteerPendingRequests
