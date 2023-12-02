import {
    StyleSheet, TextInput, View, Image, TouchableOpacity, Text, KeyboardAvoidingView,
    TouchableWithoutFeedback, Keyboard, ScrollView, StatusBar, SafeAreaView
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Fontisto } from 'react-native-vector-icons'
import { doc, setDoc, getDocs, collection, deleteDoc, addDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { getUserDetails, updateUserDetails } from '../../Config/dbcls';
import { getAuth, updatePassword,getUserByEmail } from 'firebase/auth';
import { auth } from '../../Config/config';

const authr = getAuth();

const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [saveOption, setSaveOption] = useState(true)
    const [userDetails, setUserDetails] = useState()

    const [authUser,setAuthuser] = useState()


    const handleSave = async () => {
        await getUserDetails(email,setUserDetails,setAuthuser)
   // console.log(authUser,"authusr");
      
        
        setSaveOption(false)

    }
    const handleUpdate = async () => {
        console.log(authUser,"authsr");
        //await updateUserDetails(userDetails.id,password)
        // await updatePassword(userDetails.id, password)
        // .then(() => {
        //   console.log('Password updated successfully');
        // })
        // .catch((error) => {
        //   console.error('Error updating password:', error);
        // });
       
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View>
                {
                    saveOption
                        ?
                        <View>
                            <View style={{ flexDirection: 'row', marginLeft: 40, alignItems: "center", borderBottomWidth: 1, paddingBottom: 4, width: '80%', marginBottom: 10, marginTop: 50 }}>
                                <Fontisto name="email" size={40}></Fontisto>
                                <TextInput
                                    placeholder="Email"
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                    style={styles.input}
                                    autoCorrect={false}
                                />
                            </View>

                            <View style={{ marginTop: 30, alignItems: 'center' }}>
                                <TouchableOpacity style={styles.button}
                                    onPress={handleSave}
                                >
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        :
                        <View style={{ top: 30 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 40, alignItems: "center", borderBottomWidth: 1, paddingBottom: 4, width: '80%' }}>
                                <Fontisto name="locked" size={40}></Fontisto>
                                <TextInput
                                    placeholder="New Password"
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                    style={styles.input}
                                    autoCorrect={false}
                                    secureTextEntry
                                />
                            </View>
                            <View style={{ marginTop: 30, alignItems: 'center' }}>
                                <TouchableOpacity style={styles.button}
                                    onPress={handleUpdate}
                                >
                                    <Text style={styles.buttonText}>Update</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                }

            </View>



        </KeyboardAvoidingView>
    )
}

export default ForgotPassword
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#E4EDF2',

    },
    input: {
        flex: 1,
        fontSize: 20,

        paddingHorizontal: 10,
        paddingVertical: 15,


    },
    inputContainer: {
        width: '80%'
    },
    button: {
        width: 250,
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 15

    },
    buttonContainer: {

        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30

    },
    buttonOutLine: {
        width: 250,
        alignItems: 'center',
        backgroundColor: 'mediumseagreen',
        borderRadius: 10,
        padding: 15,
        marginTop: 15,

    },
    buttonText: {
        fontWeight: '700',
        color: 'white',
        fontSize: 18
    },
    buttonOutLineText: {
        fontWeight: '700',
        color: 'white',
        fontSize: 18
    }

})