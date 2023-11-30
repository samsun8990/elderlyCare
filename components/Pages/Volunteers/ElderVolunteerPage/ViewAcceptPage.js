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

const ViewAcceptPage = ({ navigation, route }) => {

    const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

    const { accepted } = route.params

    const [details, setDetails] = useState()

    const getRequestsByUserId = (userObj, requestedByUserId) => {
        const matchingRequest = userObj.requests.find(
            (request) => request.requestedBy === requestedByUserId
        );
        return matchingRequest || null; // Return null if no matching request found
    };

    const requestsForUser = getRequestsByUserId(accepted, elderUser.id);
    console.log('Requests by userId:', requestsForUser);

    //   const findDetails= accepted.requests.find((ac)=>ac.requestedBy === elderUser.id )
    //   console.log(findDetails.requests,"fndv");


    return (
        <SafeAreaView style={styles.container}>
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
                        <Avatar source={{uri:accepted.avatar}} size={60}/>
                  
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 18, }}>{accepted.fullname}</Text>
                            <Text style={{ fontSize: 15 }}>{accepted.gender}</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.requestTitle}>Description</Text>
                        <Card.Divider />
                        <Text >{requestsForUser && requestsForUser.description}</Text>
                    </View>

                    <View>
                        <Text style={styles.requestTitle}>Preferences</Text>
                        <Card.Divider />
                        <View style={{ flexDirection: "row" }}>
                            {
                                requestsForUser &&
                                requestsForUser.activities.slice(0,2).map((x, index) =>
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

                    <View>
                        <Text style={styles.requestTitle}>Paymemt Amount</Text>
                        <Card.Divider />
                        <Text>QR {requestsForUser.amount}</Text>
                    </View>
                </View>
            </Card>
        </SafeAreaView>
    )
}

export default ViewAcceptPage
