import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react'
import { Avatar, Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons,FontAwesome, AntDesign, Ionicons } from 'react-native-vector-icons';
import { defaultImg } from '../../../Utils/ImageCommon';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../Config/AuthContext';



const VolunProfile = () => {
    const navigation = useNavigation()
    const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

    const timestamp_Data = {
        "nanoseconds": volunteerUser.joinDate.nanoseconds,
        "seconds": volunteerUser.joinDate.seconds
    }

    const milliseconds1 = timestamp_Data.seconds * 1000 + timestamp_Data.nanoseconds / 1000000;
    const joiningDate = new Date(milliseconds1).toDateString()

    const dateObj = new Date(volunteerUser.dob);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getFullYear()}`;



    return (
        <SafeAreaView style={styles.container}>
           
            <View style={styles.profileContainer}>
                <Avatar size={100} source={{uri:volunteerUser.avatar}} />
                <Text style={{fontSize:18,fontWeight:"bold"}}>{volunteerUser.fullname}</Text>
                <Text style={{fontSize:13,fontWeight:"bold"}}>Joined on: {joiningDate}</Text>
                <Button size={"md"} radius={10} type="solid" color={"#1B5B7D"}
                 onPress={()=>navigation.navigate("EditProfileV")} >
                    <Icon name="edit" color="white" />
                    Edit
                </Button>
            </View>
            <View style={styles.personalDetailsContainer}>
                <Text style={styles.sectionTitle}>Personal Details</Text>
                <View style={styles.line} />
                <View style={styles.detailRow}>
                    <Icon name="mail" color="black" size={25} style={styles.icon} />
                    <Text>{volunteerUser.email}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Icon name="lock" color="black" size={25} style={styles.icon} />
                    <Text>*********</Text>
                    <Button
                        containerStyle={{
                            height: 30,
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 5,
                        }} size={"sm"} radius={5} type="clear" color={"#1B5B7D"} 
                        onPress={()=>navigation.navigate("PassChangeV")}>
                        Change
                    </Button>
                </View>
                <View style={styles.detailRow}>
                    <AntDesign name="calendar" color="black" size={25} style={styles.icon} />
                    <Text>{formattedDate}</Text>
                </View>
                <View style={styles.detailRow}>
                    <AntDesign name="contacts" color="black" size={25} style={styles.icon} />
                    <Text>{volunteerUser.phone}</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.sectionTitle}>Dashboard</Text>
                <View style={styles.line} />
                <View style={styles.dashboardButtons}>
                    <Button size={"md"} radius={20} type="solid" color={"#8FDC97"}
                     onPress={()=>navigation.navigate("PaymentHistoryV")}>
                        Payments
                    </Button>
                    <Button size={"md"} radius={20} type="solid" color={"#FFD699"}
                    onPress={()=>navigation.navigate("ChatHistoryV")}>
                        Chat History
                    </Button>
                </View>
            </View>
            <View style={styles.accountContainer}>
                <Text style={styles.sectionTitle}>My Account</Text>
                <View style={styles.line} />
                {/* <Button size={"md"} radius={10} type="solid" color={"#1B5B7D"} > */}
                <Text style={{ fontSize: 16 }}>
                    <Icon size={25} name="logout" color="#1B5B7D" 
                     onPress={()=>navigation.navigate("StartPage")}/> Logout
                </Text>
                {/* </Button> */}
            </View>
        </SafeAreaView>
    );
};

export default VolunProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDEBEF",
        justifyContent: 'space-between'
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        gap: 5
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    personalDetailsContainer: {
        flex: 1,
        alignItems: 'left',
        padding: 20,
    },
    cardContainer: {
        flex: 1,
        alignItems: 'left',
        padding: 10,
    },
    accountContainer: {
        flex: 1,
        alignItems: 'left',
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dashboardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 5,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    icon: {
        marginRight: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    }
});
