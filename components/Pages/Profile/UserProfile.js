import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity,ScrollView } from 'react-native';
import React, { useContext, useEffect,useState } from 'react'
import { Avatar, Button, Card, Icon } from '@rneui/themed';
import { MaterialCommunityIcons, FontAwesome, AntDesign, Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ProfileStyles';
import { getUserDetails } from '../../Config/dbcls'

const UserProfile = ({navigation,route}) => {

    const {userid} = route.params

    const [userDetails,setUserDetails] = useState()

    useEffect(()=>{
        getUserDetails(userid,setUserDetails)
    },[])

    const timestamp_Data = {
        "nanoseconds": userDetails && userDetails.joinDate.nanoseconds,
        "seconds": userDetails && userDetails.joinDate.seconds
    }


    const milliseconds1 = timestamp_Data.seconds * 1000 + timestamp_Data.nanoseconds / 1000000;
    const joiningDate = new Date(milliseconds1).toDateString()

    const dateObj = new Date(userDetails && userDetails.dob);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getFullYear()}`;



  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.profileContainer}>
    <Avatar size={100} rounded source={{ uri: userDetails && userDetails.avatar }} />
        <Text style={{fontSize:20,fontWeight:"bold"}}>{userDetails && userDetails.fullname}</Text>
        <Text style={{fontSize:18,fontWeight:"bold"}}>{userDetails && userDetails.gender}</Text>
        <Text style={{fontSize:15,fontWeight:"bold"}}>Joined on: {userDetails && joiningDate}</Text>
    </View>
    <View style={styles.personalDetailsContainer}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <Card.Divider style={{flex: 1, height: 1, backgroundColor: 'gray'}}/>
        <View style={styles.detailRow}>
            <Icon name="mail" color="black" size={30} style={styles.icon} />
            <Text style={{fontSize:17}}>{userDetails && userDetails.email}</Text>
        </View>
        <View style={styles.detailRow}>
            <AntDesign name="calendar" color="black" size={30} style={styles.icon} />
            <Text style={{fontSize:17}}>{userDetails && formattedDate}</Text>
        </View>
       
        <View style={styles.detailRow}>
            <AntDesign name="contacts" color="black" size={30} style={styles.icon} />
            <Text style={{fontSize:17}}>{userDetails && userDetails.phone}</Text>
        </View>
    </View>

    <View style={{ paddingBottom: 90 }} />
    </ScrollView>
  
</SafeAreaView>
  )
}

export default UserProfile