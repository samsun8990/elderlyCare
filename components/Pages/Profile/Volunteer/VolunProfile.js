import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect,useState } from 'react'
import { Avatar, Button, Icon } from '@rneui/themed';
import { MaterialCommunityIcons,FontAwesome, AntDesign, Ionicons } from 'react-native-vector-icons';
import { defaultImg } from '../../../Utils/ImageCommon';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../Config/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import {ref,uploadBytesResumable , getDownloadURL} from 'firebase/storage'
import { db,storage } from '../../../Config/config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';



const VolunProfile = () => {
    const navigation = useNavigation()
    const { user, signIn, signOut, elderUser, volunteerUser, setUser } = useContext(AuthContext);

    const timestamp_Data = {
        "nanoseconds": volunteerUser.joinDate.nanoseconds,
        "seconds": volunteerUser.joinDate.seconds
    }

    const milliseconds1 = timestamp_Data.seconds * 1000 + timestamp_Data.nanoseconds / 1000000;
    const joiningDate = new Date(milliseconds1).toDateString()


    const [url,setUrl] = useState()
    const [image,setImage] = useState()

    const handeImage  = async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri)

            let fileName = result.assets[0].uri.split('ImagePicker/')[1]

            const imgRef = ref(storage, fileName)
            const img = await fetch(result.assets[0].uri)
            const bytes = await img.blob()
            await uploadBytesResumable(imgRef, bytes)
            await getDownloadURL(imgRef).then((x) =>  setUrl(x) )
            .catch((e) => alert(e.message))

            const docRef2 = doc(db, "volunteerUsers", volunteerUser.id);
            const docSnap2 = await getDoc(docRef2);
            if(docSnap2.exists())
            await updateDoc(docRef2, { avatar: url }, { merge: true })
        .then(() => console.log(" Profile Updated"))
        }

    }

    return (
        <SafeAreaView style={styles.container}>
           
            <View style={styles.profileContainer}>
            {
        url 
        ? 
        <Avatar size={100} rounded source={{uri:url}} onPress={handeImage} />
        :
        <Avatar rounded size={100} source={{uri:volunteerUser.avatar}} onPress={handeImage} />
      }
                {/* <Avatar size={100} source={{uri:volunteerUser.avatar}} onPress={handeImage} /> */}
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
                <Text>──────────────── </Text>
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
                    <Text>{volunteerUser.dob}</Text>
                </View>
                <View style={styles.detailRow}>
                    <AntDesign name="contacts" color="black" size={25} style={styles.icon} />
                    <Text>{volunteerUser.phone}</Text>
                </View>
            </View>
            {/* <View style={styles.cardContainer}>
                <Text></Text>
                <Text></Text>
                <Text style={styles.sectionTitle}>Dashboard</Text>
                <Text>──────────────── </Text>
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
            </View> */}
            <View style={styles.accountContainer}>
                <Text style={styles.sectionTitle}>My Account</Text>
                <Text>──────────────── </Text>
                {/* <Button size={"md"} radius={10} type="solid" color={"#1B5B7D"} > */}
                <Text style={{ fontSize: 16 }}>
                    <Icon size={25} name="logout" color="#1B5B7D" 
                      onPress={() => {
                        signOut()
                        setUser(null)
                        navigation.navigate("StartPage")
                      }}/> Logout
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
        padding: 15,
    },
    cardContainer: {
        flex: 1,
        alignItems: 'left',
        padding: 15,
    },
    accountContainer: {
        flex: 1,
        alignItems: 'left',
        padding: 15,
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
