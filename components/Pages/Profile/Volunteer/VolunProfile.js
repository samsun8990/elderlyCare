import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons,FontAwesome, AntDesign, Ionicons } from 'react-native-vector-icons';
import { defaultImg } from '../../../Utils/ImageCommon';


const VolunProfile = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
             {/* <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleBackPress}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
            </View> */}
            <View style={styles.profileContainer}>
                <Image source={defaultImg} style={styles.profileImage} />
                <Text>Joined Date: 12 Aug 2022</Text>
                <Text>Name</Text>
                <Button size={"md"} radius={10} type="solid" color={"#1B5B7D"} >
                    <Icon name="edit" color="white" />
                    Edit
                </Button>
            </View>
            <View style={styles.personalDetailsContainer}>
                <Text style={styles.sectionTitle}>Personal Details</Text>
                <View style={styles.line} />
                <View style={styles.detailRow}>
                    <Icon name="mail" color="black" size={20} style={styles.icon} />
                    <Text>Email</Text>
                </View>
                <View style={styles.detailRow}>
                    <Icon name="lock" color="black" size={20} style={styles.icon} />
                    <Text>Password</Text>
                    <Button
                        containerStyle={{
                            height: 30,
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 5,
                        }} size={"sm"} radius={5} type="clear" color={"#1B5B7D"} >
                        Change
                    </Button>
                </View>
                <View style={styles.detailRow}>
                    <AntDesign name="calendar" color="black" size={20} style={styles.icon} />
                    <Text>Date of Birth</Text>
                </View>
                <View style={styles.detailRow}>
                    <AntDesign name="contacts" color="black" size={20} style={styles.icon} />
                    <Text>Phone Number</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.sectionTitle}>Dashboard</Text>
                <View style={styles.line} />
                <View style={styles.dashboardButtons}>
                    <Button size={"md"} radius={20} type="solid" color={"#8FDC97"}>
                        Payments
                    </Button>
                    <Button size={"md"} radius={20} type="solid" color={"#FFD699"}>
                        Chat History
                    </Button>
                </View>
            </View>
            <View style={styles.accountContainer}>
                <Text style={styles.sectionTitle}>My Account</Text>
                <View style={styles.line} />
                {/* <Button size={"md"} radius={10} type="solid" color={"#1B5B7D"} > */}
                <Text style={styles = { fontSize: 16 }}>
                    <Icon size={30} name="logout" color="#1B5B7D" /> Logout
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
