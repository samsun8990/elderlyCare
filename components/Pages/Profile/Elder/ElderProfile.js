import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity,ScrollView } from 'react-native';
import React, { useContext, useEffect } from 'react'
import { Avatar, Button, Card, Icon } from '@rneui/themed';
import { MaterialCommunityIcons, FontAwesome, AntDesign, Ionicons } from 'react-native-vector-icons';
import { defaultImg } from '../../../Utils/ImageCommon';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../ProfileStyles';
import { AuthContext } from '../../../Config/AuthContext';



const ElderProfile = () => {
    const navigation = useNavigation()
    const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

    const timestamp_Data = {
        "nanoseconds": elderUser.joinDate.nanoseconds,
        "seconds": elderUser.joinDate.seconds
    }

    const milliseconds1 = timestamp_Data.seconds * 1000 + timestamp_Data.nanoseconds / 1000000;
    const joiningDate = new Date(milliseconds1).toDateString()

    const dateObj = new Date(elderUser.dob);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getFullYear()}`;


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profileContainer}>
            <Avatar size={100} rounded source={{ uri: elderUser.avatar }} />
                <Text style={{fontSize:18,fontWeight:"bold"}}>{elderUser.fullname}</Text>
                <Text style={{fontSize:14,fontWeight:"bold"}}>{elderUser.gender}</Text>
                <Text style={{fontSize:13,fontWeight:"bold"}}>Joined on: {joiningDate}</Text>
                <Button size={"md"} radius={10} type="solid" color={"#1B5B7D"} 
                onPress={()=>navigation.navigate("EditProfileE")} >
                    <Icon name="edit" color="white" />
                    Edit
                </Button>
            </View>
            <View style={styles.personalDetailsContainer}>
                <Text style={styles.sectionTitle}>Personal Details</Text>
                <Card.Divider style={{flex: 1, height: 1, backgroundColor: 'gray'}}/>
                <View style={styles.detailRow}>
                    <Icon name="mail" color="black" size={25} style={styles.icon} />
                    <Text>{elderUser.email}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Icon name="lock" color="black" size={25} style={styles.icon} />
                    <Text>*******</Text>
                    <Button 
                        containerStyle={{
                            height: 30,
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 5,
                        }} size={"sm"} radius={5} type="clear" color={"#1B5B7D"}
                        onPress={()=>navigation.navigate("PassChangeE")}  >
                        Change
                    </Button>
                </View>
                <View style={styles.detailRow}>
                    <AntDesign name="calendar" color="black" size={25} style={styles.icon} />
                    <Text>{formattedDate}</Text>
                </View>
               
                <View style={styles.detailRow}>
                    <AntDesign name="contacts" color="black" size={25} style={styles.icon} />
                    <Text>{elderUser.phone}</Text>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <Text style={styles.sectionTitle}>Dashboard</Text>
                <Card.Divider style={{flex: 1, height: 1, backgroundColor: 'gray'}}/>

                <View style={styles.dashboardButtons}>
                    {/* <Button size={"md"} radius={20} type="solid" color={"#8FDC97"}
                     onPress={()=>navigation.navigate("PaymentHistoryE")}  >
                        Payments
                    </Button> */}
                    <Button size={"md"} radius={20} type="solid" color={"#FFD699"}
                    onPress={()=>navigation.navigate("ChatHistoryE")}>
                        Chat History
                    </Button>
                    <Button size={"md"} radius={20} type="solid" color={"#FFB3B3"}
                    onPress={()=>navigation.navigate("HealthInfo")}>
                        Health Info
                    </Button>
                </View>
            </View>

            <View style={styles.accountContainer}>
                <Text style={styles.sectionTitle}>My Account</Text>
                <Card.Divider style={{flex: 1, height: 1, backgroundColor: 'gray'}}/>
                <Text style={{ fontSize: 16}}>
                    <Icon size={25} name="logout" color="#1B5B7D" 
                    onPress={() => 
                        // signOut()
                        // setUser(null)
                        navigation.navigate("StartPage")
                      }/> Logout
                </Text>
            </View>

            <View style={{ paddingBottom: 90 }} />
            </ScrollView>
          
        </SafeAreaView>
    );
};

export default ElderProfile;
